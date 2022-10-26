import React from 'react';
import '../Footer/footer.css';
import buildimg from '../icon/logo.svg';
import f from '../icon/f.svg';
import q from '../icon/q.svg';
import i from '../icon/i.svg';
import inn from '../icon/in.svg';
import t from '../icon/t.svg';
import ggg from '../icon/ggg.png';

import p from '../icon/p.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footfor">
          <h3 className="forh3">For Daily Update Subscribe Now</h3>
          <section>
            <div class="search">
              <form action="">
                <input
                  class="btn_text"
                  type="text"
                  placeholder="Enter Your Mail.."
                />
                <button class="btn_search">Subcribe</button>
              </form>
            </div>
          </section>
        </div>
        <div className="footfor1">
          <div className="footitem1">
            <div className="footbul">
              <img src={buildimg} />
              <p>Building</p>
            </div>
            <p className="footp">
              Lorem ipsum dolor sit amet, consectet adipiscing elit. Quam turpis
              sed ut fam tortor pharetra. Lorem auctor congue pellentesque
              facilisis diam
            </p>
            <div className="footicon">
              <img src={f} />
              <img src={q} />
              <img src={i} />
              <img src={inn} />
            </div>
          </div>
          <div className="footitem">
            <p className="bold">Home</p>
            <p>Process</p>
            <p>Listing</p>
            <p>Popular Property</p>
            <p>Out Agents</p>
            <p>Testimonial</p>
          </div>
          <div className="footitem">
            <p className="bold">Servies</p>
            <p>Site map</p>
            <p>Property type</p>
            <p>Terms and conditions</p>
            <p>Privacy policy</p>
          </div>
          <div className="footitem">
            <p className="bold">About</p>
            <p>About us</p>
            <p>Who choose us?</p>
            <p>Events</p>
            <p>Blog</p>
          </div>
          <div className="footitem">
            <p className="bold">Contact</p>
            <div className="fotitems">
              <img src={t} /> <span>+888 561 258</span>
            </div>
            <div className="fotitems">
              <img src={ggg} /> <span>webmaile@gmail.com</span>
            </div>
            <div className="fotitems">
              <img src={p} /> <span>Google play</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
