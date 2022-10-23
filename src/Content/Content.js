import React from 'react';
import '../Content/content.css';
import conimg from '../asset/conimg.png';
import Cart from './cart';

import con1 from '../icon/con1.svg';
import con2 from '../icon/con2.svg';
import con3 from '../icon/con3.svg';
import con4 from '../icon/con4.svg';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="cont-title">
          <p>What are you looking for?</p>
        </div>
        <div className="con-item">
          <div className="left">
            <img src={conimg} />
          </div>
          <div className="right">
            <Cart
              icon={con1}
              title="Family House"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus "
            />
            <Cart
              icon={con2}
              title="Apartment"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus "
            />
            <Cart
              icon={con3}
              title="Studio & Offices"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus "
            />
            <Cart
              icon={con4}
              title="Villa & Condo"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar at augue vestibulum euismod risus "
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
