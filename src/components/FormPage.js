import React, { useState } from 'react'
import nodemailer from 'nodemailer-react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact'
import 'mdbreact/dist/css/mdb.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


const FormPage = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')
  const handleSubmit = async () => {
    const fullMessage ={
      name:name,
      email:email,
      subject:subject,
      message:message
    }
    console.log(fullMessage)
    window.emailjs.send('gmail',
        'template_25evq0p',
          {subject:fullMessage.subject,from_name:fullMessage.name,email:fullMessage.email,message:fullMessage.message},'user_4JzcHgNROI2pAXMv78Dpc'
      ).then(res => {
       console.log('Email successfully sent!')
     })
  }

  return (
    <div>
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
        <div
          style={{
            backgroundColor: '#4ed715',
            height: '3px',
            width: '50px',
            marginBottom: '5%',
            marginLeft: '40%',
            marginTop: '0%',
          }}
        ></div>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form>
              <MDBRow>
                <MDBCol md="6" style={{ width: '900px' }}>
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-name" label="Your name"value={name} onChange={(e) => {
								setName(e.target.value)
							}} />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-email" label="Your email" value={email} onChange={(e) => {
								setEmail(e.target.value)
							}}/>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-subject" label="Subject" value={subject} onChange={(e) => {
								setSubject(e.target.value)
							}}/>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ marginBottom: '10%' }}>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput type="textarea" id="contact-message" label="Your message" value={message} onChange={(e) => {
								setMessage(e.target.value)
							}}/>
                    <MDBBtn rounded color="green" style={{ color: 'white' }}>
                      <MDBIcon style={{ color: 'white', fontSize: '15px' }} icon="paper-plane" onClick={() => {
							handleSubmit()
						}}>
                        {'   '} Send
                      </MDBIcon>
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
            {/* <MDBBtn color="green" size="md" style={{color:'white'}}>
              Send
            </MDBBtn> */}
          </MDBCol>
          <MDBCol md="3" className="text-center" style={{ marginTop: '70px' }}>
            <ul className="list-unstyled mb-0">
              <li>
                <MDBIcon icon="map-marker-alt" size="2x" className="green-text" />
                <p>Sheraton Heliopolis- Egypt</p>
              </li>

              <li>
                <MDBIcon icon="envelope" size="2x" className="green-text mt-4" />
                <p>info@Alhikma.com.eg</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default FormPage
