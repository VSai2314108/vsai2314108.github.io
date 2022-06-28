import React, { Component } from "react";
import emailjs from '@emailjs/browser';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "",
      ref: React.createRef()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.ref.current)
    if(this.state.name ==="" || this.state.name ==="" || this.state.name ==="" || this.state.name ==="") {
      this.setState({status:"MISSING"})
      return
    }
    emailjs.sendForm('service_zs38ym9', 'template_fsq0b1v', this.state.ref.current, 'nb1Fp6rLRv5RvNrFU')
      .then((result) => {
          console.log(result.text);
          this.setState({status: "SUCCESS"})
      }, (error) => {
          console.log(error.text);
          this.setState({status: "ERROR"})
      });
  };

  render() {
    if (this.props.data) {
      let name = this.props.data.name;
      let street = this.props.data.address.street;
      let city = this.props.data.address.city;
      let state = this.props.data.address.state;
      let zip = this.props.data.address.zip;
      let phone = this.props.data.phone;
      const { status } = this.state;
      return (
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">Please feel free to contact me.</p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <form
                onSubmit={this.handleSubmit}
                id="contactForm"
                name="contactForm"
                action="Your FormSpree link"
                method="POST"
                ref={this.state.ref}
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size="35"
                      id="contactName"
                      placeholder="Name Required"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size="35"
                      id="contactEmail"
                      placeholder="Email Required"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      size="35"
                      placeholder="Subject Title"
                      id="contactSubject"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      placeholder="Main Message"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div>
                    {status === "SUCCESS" ? (
                      <p>Thanks! Looking forward to speaking to you soon!</p>
                    ) : (
                      <button type="submit" className="submit">
                        Submit
                      </button>
                    )}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    {status === "MISSING" && <p>Please fill out all categories before submitting!</p>}

                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>
            </div>

            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </div>
        </section>
      );
    } else {
      return <div />;
    }
  }
}

export default Contact;
