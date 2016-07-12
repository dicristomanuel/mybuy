import { Server } from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';
import Blipp from 'blipp';
import Inert from 'inert';
import Yar from 'Yar'
import { CookieToken } from './app/tokens';

const server = new Server();
const PORT = process.env.PORT || 3001;

server.connection({
  port: PORT
});

const io = require('socket.io')(server.listener);

server.register([
  Inert,
  { register: Blipp },
  { register: Good,
    options: {
      reporters: [{
        reporter: GoodConsole,
        events: { log: '*', response: '*' }
      }]
    },
  },
  {
    register: Yar,
    options: {cookieOptions: {
      password: CookieToken,
      isSecure: false
    }
  }
}], (err) => {
  if (err)
  throw err;

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: './public/assets',
        listing: false,
        index: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      const { hash, name } = request.query;
      request.yar.set({ hash, name });
      reply.file('./public/index.html');
    }
  });
});

server.start((error) => {
  if (error) {
    console.log(error.message);
    process.exit(1);
  }
  console.log(`server is running on port ${PORT}`);
});
