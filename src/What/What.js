import React from 'react';
import '../What/what.css';
import whatimg1 from '../asset/what1.png';
import whatimg2 from '../asset/what2.png';
import whatimg3 from '../asset/what3.png';
import whatstar1 from '../asset/whatstar1.png';

class What extends React.Component {
  render() {
    return (
      <div className="what">
        <h3 className="what-tit">What People Say</h3>
        <p className="what-desc">Lorem ipsum dolor sit amet, consectetur </p>
        <div className="what-bot-item">
          <What1
            rasm={whatimg1}
            title="Williamsons"
            rasm1={whatstar1}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant."
          />
          <What1
            rasm={whatimg2}
            title="Farhad Reja"
            rasm1={whatstar1}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant."
          />
          <What1
            rasm={whatimg3}
            title="Peter sams"
            rasm1={whatstar1}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant."
          />
        </div>
      </div>
    );
  }
}
export default What;

class What1 extends React.Component {
  render() {
    return (
      <div className="what-top">
        <div className="what-item">
          <div className="what-items">
            <h5 className="what-h5">Williamsons</h5>
            <img className="what-im" src={this.props.rasm1} />
            <p className="what-p">{this.props.desc}</p>
          </div>
          <div className="what-img">
            <img src={this.props.rasm} />
          </div>
        </div>
      </div>
    );
  }
}
