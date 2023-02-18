import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Featured from '../home/Featured'
import NewArrival from '../home/NewArrival'
import Slider from '../home/Slider'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <div className='row'>
          <div className='features_items'>
            <h2 className='title text-center'>New arrival</h2>
            <NewArrival />
          </div>
        </div>
        <div className='row'>
          <div className='features_items'>
            <h2 className='title text-center'>New arrival</h2>
            <Featured />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomePage