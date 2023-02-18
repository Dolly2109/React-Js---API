import React, { Component } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import CategoryMenu from '../product/CategoryMenu'
import BrandMenu from '../product/BrandMenu'
import ProductByCategory from '../product/ProductByCategory'

export class ProductByCategoryPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <CategoryMenu />
                <BrandMenu />
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <ProductByCategory />
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ProductByCategoryPage