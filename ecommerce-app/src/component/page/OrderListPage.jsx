import React, { Component } from 'react'
import Header from '../common/Header';
import OrderList from '../cart/OrderList';

export class OrderListPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <OrderList />
      </div>
    )
  }
}

export default OrderListPage