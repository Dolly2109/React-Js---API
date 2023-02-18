import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../component/others/Contact'
import HomePage from '../component/page/HomePage'
import ContactPage from '../component/page/ContactPage'
import ProductByCategoryPage from '../component/page/ProductByCategoryPage'
import ProductBySubCategoryPage from '../component/page/ProductBySubCategoryPage'
import ProductByBrandPage from '../component/page/ProductByBrandPage'
import ProductBySubBrandPage from '../component/page/ProductBySubBrandPage'

import ProductDetailPage from '../component/page/ProductDetailPage'
import ProductPage from '../component/page/ProductPage'
import LoginPage from '../component/page/LoginPage'
import RegisterPage from '../component/page/RegisterPage'
import ProfilePage from '../component/page/ProfilePage'
import ForgetPasswordPage from '../component/page/ForgetPasswordPage'
import ResetPasswordPage from '../component/page/ResetPasswordPage'
import InfoPage from '../component/page/InfoPage'
import CartPage from '../component/page/CartPage'
import OrderListPage from '../component/page/OrderListPage'



export class AppRoute extends Component {
  render() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
            <Route path='/productByCategory' element={<ProductByCategoryPage />}></Route>
            <Route path='/productBySubCategory/:subCategory' element={<ProductBySubCategoryPage />}></Route>

            <Route path='/productByBrand' element={<ProductByBrandPage />}></Route>
            <Route path='/productBySubBrand/:subBrand' element={<ProductBySubBrandPage />}></Route>

            <Route path='/productDetail' element={<ProductDetailPage />}></Route>
            {/* <Route path='/productSubDetail/productDetail/{id}' element={<ProductSubDetailPage />}></Route> */}

            

            <Route path='/product' element={<ProductPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/forgetPassword' element={<ForgetPasswordPage />}></Route>
            <Route path='/resetPassword' element={<ResetPasswordPage />}></Route>

            <Route path='/about' element={<InfoPage slug="about" title="Về chúng tôi" />}></Route>
            <Route path='/policy' element={<InfoPage slug="policy" title="Chính sách bán hàng" />}></Route>
            <Route path='/warranty' element={<InfoPage slug="warranty" title="Chính sách bảo hành" />}></Route>

            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/orderList' element={<OrderListPage />}></Route>

        </Routes>
    )
  }
}

export default AppRoute
