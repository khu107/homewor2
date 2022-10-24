import React from 'react';
import '../Most/most.css';

import most1 from '../asset/most1.png';
import most2 from '../asset/most2.png';
import most3 from '../asset/most3.png';
import most4 from '../asset/most4.png';
import most5 from '../asset/most5.png';

class Most extends React.Component {
  render() {
    return (
      <div className="most">
        <h1 className="most-tit">Most Popular Places</h1>
        <p className="most-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="most-cont">
          <div className="most1-item">
            <img src={most1} />
          </div>
          <div className="most2-con">
            <Most2 rasm={most2} title="Japan" desc="50 Properties" />
            <Most2 rasm={most3} title="Malaysia" desc="50 Properties" />
            <Most2 rasm={most4} title="London" desc="50 Properties" />
            <Most2 rasm={most5} title="India" desc="50 Properties" />
          </div>
        </div>
      </div>
    );
  }
}
export default Most;

class Most2 extends React.Component {
  render() {
    return (
      <div className="most2-item">
        <div className="most-item">
          <img src={this.props.rasm} />
        </div>
        <div className="most2-desc">
          <h4 className="mosth4">{this.props.title}</h4>
          <h4 className="most4">{this.props.desc}</h4>
        </div>
      </div>
    );
  }
}
