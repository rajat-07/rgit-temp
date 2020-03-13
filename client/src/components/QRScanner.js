import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import ProductList from './ProductList';
const { products } = require("../productdata");
 
class QRScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      cart: []
    }
    this.handleScan = this.handleScan.bind(this)
  }
  addProduct(qc){
    let flag = true;
    this.state.cart.map(c => { 
        if(c.qrcode === qc){
            flag = false;
        }
    });
    if(flag){
        products.map(product => {
            if(qc === product.qrcode){
                this.state.cart.push(product);
            }
        });
    }
    console.log(this.state.cart);
  }
  handleScan(data){
    this.setState({
      result: data,
    });
    // console.log(data);
    if(data !== null){
    //   console.log(data);
      this.addProduct(this.state.result);
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
        <ProductList carts={this.state.cart} />
      </div>
    )
  }
}

export default QRScanner;

// qr code - 
/*
http://en.m.wikipedia.org
https://itunes.apple.com/us/app/qr-code-reader-open-tap-and-go/id938721461?ls=1&mt=8
http://www.amazon.com/gp/product/B004THI25K?ie=UTF8&ref=mas_faad
app.digantadey.tk/qrcode/
https://www.designmaz.net/best-free-online-qr-code-generator/
https://internationalbarcodes.com/
*/