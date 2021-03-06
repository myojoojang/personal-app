import React, { Component } from 'react';
import emailjs from 'emailjs-com';


export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      massage: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'mjjang0127@gmail.com',
      message_html: `from ${name}, ${message}`
    }
    emailjs.send(
      'mj',
      'template_kVZx57Xe',
      templateParams,
      'user_A0Ws8Im7zTuGKRTNOxKgW'
    ).then(
      alert('You Contact Me Successfully!'),
      this.resetForm()
    )
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }



  render() {
    return (
      <form className="container my-5" onSubmit={this.handleSubmit}>
        <div className='contact'>
          <div className='my-1'>
            <input type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              autocomplete="off"
              required />
          </div>
          <div className='my-1'>
            <input ttype="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              autocomplete="off"
              required />
          </div>
          <div className='my-1'>
            <textarea
              name="message"
              value={this.state.message}
              rows='6'
              onChange={this.handleChange}
              autocomplete="off"
              required />
          </div>
          <button type="submit" className="btn" value="Send">Send</button>
        </div>
      </form>

    )
  }
}

export default Contact
