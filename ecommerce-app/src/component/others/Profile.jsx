import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
        <div className="profile">
        <h2 className="text-center">PROFILE </h2>
        <ul className="list-group">
          <li className="list-group-item">Name :  mai </li>
          <li className="list-group-item">Email :  titosbi@yahoo.com <button className="btn btn-success"> All Orders</button></li>
        </ul>
      </div>
    )
  }
}

export default Profile