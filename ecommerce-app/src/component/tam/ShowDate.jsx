import React, { Component } from 'react'

export class ShowDate extends Component {
    constructor (props){
    super(props);
    this.state = 
        {
            ngay: 15,
            thang: 2,
            nam: 2022
        }
        alert('khoi tao')
    }
    componentDidMount(){
        alert('render xong= dismount');
    }
    shouldComponentUpdate(){
        alert('xem xetb update')
        return true
    }
    componentDidUpdate(){
        alert('da update')
    }
    capnhat = () => {
        this.setState({
            ngay: this.state.ngay + 1,
            thang: this.state.thang + 1,
            nam: this.state.nam + 1

        })
    }
  render() {
    return (
      <div>
        <p>Ngay: {this.state.ngay} Thang: {this.state.thang} Nam: {this.state.nam}</p>
        <button
            onClick={this.capnhat}>
            Cập Nhật
        </button>
      </div>
    );
  }
}

export default ShowDate
