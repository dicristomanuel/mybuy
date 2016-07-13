import React, { PropTypes, Component } from 'react';

class Locator extends Component {
  constructor() {
    super();
    this.stages = [{number: 1, text: 'CHOOSE CATEGORY'}, {number: 2, text: 'PICK BRANDS'}, {number: 3, text: 'ENTER BUDGET'}, {number: 4, text: 'VIEW RESULTS'}];
  }

  componentDidMount() {
    this.refs['CHOOSE CATEGORY'].className += ' margin-left';
    this.refs['PICK BRANDS'].className += ' margin-left';
  }

  generateStages(current) {
    let enabledCount = current;
    let visible;

    return this.stages.map(stage => {
      if (stage.number <= current) {
        visible = 'stage-enabled';
      } else {
        visible = 'stage-disabled';
      }
      return <div className={`stage ${visible}`} ref={stage.text}>
        {stage.text}
      </div>
    })
  }

  generateDots(current) {
    let visible;
    let visibleLine;



    return this.stages.map(stage => {
      if (stage.number < current) {
        visible = 'previous';
        visibleLine = 'line line-enabled';
      } else if (stage.number === current) {
        visible = 'enabled';
        visibleLine = 'line line-enabled'
      } else {
        visible = 'disabled-with-border';
        visibleLine = 'line'
      }

      if (stage.number < 4)
        return [<div className={`dot ${visible}`}> {stage.number} </div>, <div className={`${visibleLine}`}></div>]
      else
        return [<div className={`dot ${visible}`}> {stage.number} </div>]
    })
  }

  render() {
    const stage = this.props.stage;
    return(
      <div className='locator'>
        <div className='stages'>
          {this.generateStages(stage)}
        </div>

        <div className='numbers' children={this.generateDots(stage)}>
        </div>
      </div>
    )
  }
}
// <div className='dot enabled'>
//   1
// </div>
// <div className='line line-enabled'>
// </div>
// <div className='dot disabled-with-border'>
//   2
// </div>
// <div className='line'>
// </div>
// <div className='dot disabled-with-border'>
//   3
// </div>
// <div className='line'>
// </div>
// <div className='dot disabled-with-border'>
//   4
// </div>
export default Locator;
