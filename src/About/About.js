import React from 'react';
import '../About/about.css';
import about1 from '../asset/about1.png';
import about2 from '../asset/about2.png';
import vector from '../icon/Vector.svg';
import vector1 from '../icon/Vector1.svg';

class About extends React.Component {
  render() {
    return (
      <div className="conAbout">
        <div className="about_img">
          <img className="rasm1" src={about1} />
          <img className="rasm2" src={about2} />
        </div>
        <div className="About">
          <p className="firstp">About Us</p>
          <h1>We are Specializing in interior Improvments</h1>
          <p className="secondp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
            posuere sem purus enim eleifend habitant arcu, sed.
          </p>
          <div className="about1">
            <About1 rasm={vector} title="Free Consulatation" />
            <About1 rasm={vector1} title="Best Team Members" />
          </div>
          <button className="aboutbtn">Explore Now</button>
        </div>
      </div>
    );
  }
}
export default About;

class About1 extends React.Component {
  render() {
    return (
      <div className="conAbout1">
        <img src={this.props.rasm} />
        <h3>{this.props.title}</h3>
        <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
      </div>
    );
  }
}
