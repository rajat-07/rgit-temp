import React, { Component } from 'react';
import Product from './Product';
// import styled from 'styled-components';

class ProductList extends Component {
  render() {
    let carts = this.props.carts;
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
                {carts.map(cart => {
                    return <Product key={cart.id} product={cart} />;
                })};
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;