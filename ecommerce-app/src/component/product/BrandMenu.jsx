import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
import { Link } from 'react-router-dom'

export class BrandMenu extends Component {
  constructor(){
    super()
    this.state = {
      brandArray: [],
      displayContent: 'none',
      displayLoading: 'block'
    }
  }
  getData() {
    axios.get(AppUrl.AllBrands)
    .then((response) => {
      var data = response.data;
      this.setState({ 
        brandArray: data,
        displayContent: 'block',
        displayLoading: 'none'
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  componentDidMount() {
    this.getData()
  }

  render() {
    var brandArray = this.state.brandArray;
    var myview = brandArray.map((brands, i) => {
    return (
        <div className="brands-name" key ={i}>
          <ul className="nav nav-pills nav-stacked">
            <li key={i}><Link to={"/productBySubBrand/"+brands}> <span className="pull-right">(50)</span>{brands}</Link></li>
          </ul>
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


export default BrandMenu