import React from 'react';
import '../Opener/opener.css';

class Opener extends React.Component {
  render() {
    return (
      <div className="opener">
        <h1 className="h1">Find Your Drem House</h1>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
          posuere sem purus enim eleifend habitant arcu, sed.
        </p>
        <div className="rectangel">
          <div className="rectangel-item">
            <h6>Location</h6>
            <p>California</p>
          </div>
          <div className="rectangel-item">
            <h6>Properties</h6>
            <p>Delux</p>
          </div>
          <div className="rectangel-item">
            <h6>Price</h6>
            <p>$10,000-$12,0000</p>
          </div>
          <button className="rectangel-btn">Search</button>
        </div>
      </div>
    );
  }
}
export default Opener;
