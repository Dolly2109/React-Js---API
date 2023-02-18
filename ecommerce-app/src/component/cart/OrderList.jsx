import React, { Component } from 'react'

export class OrderList extends Component {
  render() {
    return (
      <div className="container">
        <div className="section-title text-center mb-55">
          <h2>Order History </h2>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div>
                <div>
                  <h5 className="product-name">MaiShop-1648977403469</h5>
                  <h5 className="product-name">Áo Phông Polo Nữ YODY Tay Ngắn Phối Bo Chất Liệu Pique M</h5>
                  <h6> Quantity = 1 </h6>
                  <p>XS | pink</p>
                  <h6>Price = 165000 x 1 = 165000$</h6>
                  <h6>Status = Pending </h6>
                  <p>03-04-2022 | 04:16:44pm</p>
                </div>
                <button className="btn btn-danger">Post Review </button>
                <hr />
              </div>
              <div>
                <div>
                  <h5 className="product-name">MaiShop-1648977403469</h5>
                  <h5 className="product-name">Áo Phông Polo Nữ YODY Tay Ngắn Phối Bo Chất Liệu Pique M</h5>
                  <h6> Quantity = 1 </h6>
                  <p>XS | pink</p>
                  <h6>Price = 165000 x 1 = 165000$</h6>
                  <h6>Status = Pending </h6>
                  <p>03-04-2022 | 04:16:44pm</p>
                </div>
                <button className="btn btn-danger">Post Review </button>
                <hr />
              </div>       
              <div>
                <div>
                  <h5 className="product-name">MaiShop-1648891316601</h5>
                  <h5 className="product-name">Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</h5>
                  <h6> Quantity = 1 </h6>
                  <p>XS | red</p>
                  <h6>Price = 65000 x 1 = 65000$</h6>
                  <h6>Status = Pending </h6>
                  <p>02-04-2022 | 04:21:57pm</p>
                </div>
                <button className="btn btn-danger">Post Review </button>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div className="footer-widget">
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Service</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="#st">Online Help</a></li>
                      <li><a href="#st">Contact Us</a></li>
                      <li><a href="#st">Order Status</a></li>
                      <li><a href="#st">Change Location</a></li>
                      <li><a href="#st">FAQ’s</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Quock Shop</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="#st">T-Shirt</a></li>
                      <li><a href="#st">Mens</a></li>
                      <li><a href="#st">Womens</a></li>
                      <li><a href="#st">Gift Cards</a></li>
                      <li><a href="#st">Shoes</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Policies</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="/policy">Policy</a></li>
                      <li><a href="/warranty">Warranty</a></li>
                      <li><a href="#st">Refund Policy</a></li>
                      <li><a href="#st">Billing System</a></li>
                      <li><a href="#st">Ticket System</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>About POST</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="/about">About us</a></li>
                      <li><a href="#st">Careers</a></li>
                      <li><a href="#st">Store Location</a></li>
                      <li><a href="#st">Affillate Program</a></li>
                      <li><a href="#st">Copyright</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3 col-sm-offset-1">
                  <div className="single-widget">
                    <h2>About POST</h2>
                    <form action="#st" className="searchform">
                      <input type="text" placeholder="Your email address" /><button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                      <p>Get the most recent updates from <br />our site and be updated your self...</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <p className="pull-left">Copyright © 2020 THERICH-SHOP Inc. All rights reserved.</p>
                <p className="pull-right">Designed by <span><a target="_blank" href="#st">Therichpost</a></span></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default OrderList