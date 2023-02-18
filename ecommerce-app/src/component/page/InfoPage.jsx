import React, { Component } from 'react'
import Header from '../common/Header';
import Info from '../common/Info';
import Footer from '../common/Footer';


export class InfoPage extends Component {
  render() {
    return (
      <div>
          <Header />
          <Info slug={this.props.slug} title={this.props.title} />
          <Footer />
      </div>
    )
  }
}

export default InfoPage