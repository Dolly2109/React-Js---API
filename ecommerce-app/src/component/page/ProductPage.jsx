import React, { Component } from 'react'
import Header from '../common/Header'
import CategoryMenu from '../product/CategoryMenu'
import BrandMenu from '../product/BrandMenu'
import Footer from '../common/Footer'
import NewArrival from '../home/NewArrival'
import Featured from '../home/Featured'

export class ProductPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                  <CategoryMenu />
                <h2>Brands</h2>
                  <BrandMenu />
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">New Items</h2>
                  <NewArrival/>
              </div>
            <div className="features_items">
              <h2 className="title text-center">Features Items</h2>
                <Featured/>
              </div>            
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ProductPage