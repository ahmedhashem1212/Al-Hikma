import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact'
import 'mdbreact/dist/css/mdb.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
const FormPage = () => {
  return (
    <div>
      <MDBContainer>
        {/* <form>
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="green">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form> */}

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
                    <MDBInput type="text" id="contact-name" label="Your name" />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-email" label="Your email" />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-subject" label="Subject" />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ marginBottom: '10%' }}>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput type="textarea" id="contact-message" label="Your message" />
                    <MDBBtn rounded color="green" style={{ color: 'white' }}>
                      <MDBIcon style={{ color: 'white', fontSize: '15px' }} icon="paper-plane">
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
