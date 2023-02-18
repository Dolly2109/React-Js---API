import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
import { Link } from 'react-router-dom'

export class Featured extends Component {
   constructor(){
      super()
      this.state = {
        FeaturedProductArray: [],
        displayContent: 'none',
        displayLoading: 'block'
      }
    }
    getData() {
      axios.get(AppUrl.ProductsByRemark_featured)
      .then((response) => {
        var data = response.data;
        this.setState({ 
         FeaturedProductArray: data,
          displayContent: 'block',
          displayLoading: 'none'
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
    componentDidMount() {
      this.getData();
    }

  render() {
   var FeaturedProductArray = this.state.FeaturedProductArray;
   var myview = FeaturedProductArray.map((featuredproduct, i) => {   
    return (
        <div className="col-sm-3" key = {i}>
         <div className="product-image-wrapper">
            <div className="single-products">
               <div className="productinfo text-center">
                  <img src={featuredproduct.image} alt="" />
                  <h2>{featuredproduct.price}</h2>
                  <p>{featuredproduct.name}</p>
                  <a href="#st" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
               </div>
               <div className="product-overlay">
                  <div className="overlay-content">
                     <a href="#st">
                     <img src={featuredproduct.image} alt="" />
                        <h2>{featuredproduct.price}</h2>
                        <p>{featuredproduct.name}</p>
                        <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      )
   });
   return(
      <div>

         <div style ={{display: this.state.displayContent}} className="panel-grop category-products" id="accordian">
            {myview}
         </div>
         <div class = "ph-item" style ={{display: this.state.displayLoading}}>
            <div class = "ph-col-12">
               <div class="ph-picture"></div>
               <div class = "ph-row">
                  <div class ="ph-col-6 big"></div>
                  <div class ="ph-col-4 empty big"></div>
                  <div class ="ph-col-2 big"></div>
                  <div class ="ph-col-4"></div>
                  <div class ="ph-col-8"></div>
                  <div class ="ph-col-6"></div>
                  <div class ="ph-col-6 empty"></div>
                  <div class ="ph-col-12"></div>
               </div>
            </div>
         </div>
      </div>
   )
  }
}
export default Featured