import React from 'react';
class Cart extends React.Component {
  render() {
    return (
      <div className="cart-con">
        <div className="left-cart">
          <img src={this.props.icon} />
        </div>
        <div className="right-cart">
          <h3 className="cart-title">{this.props.title}</h3>
          <p className="cart-desc">{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default Cart;
