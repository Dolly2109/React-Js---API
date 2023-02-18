import axios from 'axios';
import React, { Component } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validation from '../../validation/Validation';
import AppUrl from '../api/AppUrl';
export class Contact extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      message:''
    }
  }
  nameOnChange=(e)=>{
    this.setState({name:e.target.value});
  }

  emailOnChange=(e)=>{
    this.setState({email:e.target.value});
  }

  messageOnChange=(e)=>{
    this.setState({message:e.target.value});
  }

componentDidMount(){
  let contactForm=document.getElementById('contactForm')
  contactForm.addEventListener('submit',this.onSubmitForm)
}
onSubmitForm=(e)=>{
e.preventDefault()
let name=this.state.name
let email=this.state.email
let message=this.state.message

if(name.length==0) toast.error('Please write name')
else if(email.length==0) toast.error('Please write email')
else if(message.length==0) toast.error('Please write message')
else if(!(validation.nameRegx).test(name))
toast.error('Name invalid')
else
{
  sendBtn.innerHTML = "Sending...";
  let MyFormData = new FormData();
  MyFormData.append("name",name)
  MyFormData.append("email",email)
  MyFormData.append("message",message)

  axios.post(AppUrl.PostContact,MyFormData).then(function(response){
    if(response.status == 200 && response.data == 1){
      toast.success("Message Send Successfully");
      sendBtn.innerHTML="Send";
      // contactForm.reset();
    }
    else{
    toast.error("error");
    sendBtn.innerHTML="Send"
    }
  })
  .catch(function(error){
    toast.error(error);
  })

  let sendBtn=document.getElementById('sendBtn')
  sendBtn.value='Sending...'
}
}


  render() {
    return (
        <div className="row no-gutters contact">
        <div className="col-md-7">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Contact Us</h3>
            <div id="form-message-warning" className="mb-4" />
            <form method="POST" id="contactForm" name="contactForm" className="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group"><label className="label" htmlFor="name">Full Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Name" onChange={this.nameOnChange} /></div>
                </div>
                <div className="col-md-6">
                  <div className="form-group"><label className="label" htmlFor="email">Email Address</label>
                  <input onChange={this.emailOnChange} type="email" className="form-control" name="email" id="email" placeholder="Email" /></div>
                </div>
                <div className="col-md-12">
                  <div className="form-group"><label className="label" htmlFor="#">Message</label>
                  <textarea onChange={this.messageOnChange} name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} /></div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input id="sendBtn" type="submit" className="btn btn-primary" />
                    <div className="submitting" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          name:{this.state.name}<br/>
          email:{this.state.email}<br/>
          message:{this.state.message}
        </div>
        <div className="col-md-5 d-flex "><iframe src="https://www.google.com/maps/@16.0589576,108.2341614,13.26z" width={400} height={400} loading="lazy" style={{border: '0px'}} /></div>
        <ToastContainer />
      </div>
    )
  }
}

export default Contact