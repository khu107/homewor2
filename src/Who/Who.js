import React from 'react';
import '../Who/who.css';
import whoimg from '../asset/who.png';

class Who extends React.Component {
  render() {
    return (
      <div className="who-con">
        <div className="who">
          <h3 className="who-tit">Who Choose Us?</h3>
          <p className="who-dec">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            laoreet sit neque sagittis. Gravida viverra at auctor sed aliquam.
            Sed magna eros lectus amet, viverra. Ultrices diam, volutpat sit ut
            feugiat semper interdum dapibus. Et malesuada tempus lacus at ornare
            gravida ornare nulla dui. Velit tellus elit consectetur dui vel
            convallis eu in lectus. Vitae id est, suspendisse suspendisse.
          </p>
          <button className="who-btn">Read more </button>
        </div>
        <div className="who-img">
          <img src={whoimg} />
        </div>
      </div>
    );
  }
}

export default Who;
