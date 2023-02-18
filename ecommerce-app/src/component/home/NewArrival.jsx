import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
import { Link } from 'react-router-dom'

export class NewArrival extends Component {
   constructor(){
      super()
      this.state = {
        NewProductArray: [],
        displayContent: 'none',
        displayLoading: 'block'
      }
    }
    getData() {
      axios.get(AppUrl.ProductsByRemark_new)
      .then((response) => {
        var data = response.data;
        this.setState({ 
          NewProductArray: data,
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
   var NewProductArray = this.state.NewProductArray;
   var myview = NewProductArray.map((newproduct, i) => {
    return (
      
        <div className="col-sm-3" key = {i}>
         <div className="product-image-wrapper">
            <div className="single-products">
               <div className="productinfo text-center">
                  <img src={newproduct.image} alt="" />
                  <h2>{newproduct.price}</h2>
                  <p>{newproduct.name}</p>
                  <a href="#st" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
               </div>
               <div className="product-overlay">
                  <div className="overlay-content">
                     <Link to={"/producDetail/"+ newproduct.id} >
                        <img src={newproduct.image} alt="" />
                        <h2>{newproduct.price}</h2>
                        <p>{newproduct.name}</p>
                        <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                     </Link>
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

export default NewArrival