import React, { Component } from 'react'
import Header from '../common/Header'
import ProductDetail from '../product/ProductDetails'
import SimilarProduct from '../product/SimilarProduct'
import Footer from '../common/Footer'

export class ProductDetailPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductDetail />
        <SimilarProduct />
        <Footer />
      </div>
    )
  }
}

export default ProductDetailPage