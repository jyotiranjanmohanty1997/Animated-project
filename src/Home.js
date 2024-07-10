import React from 'react'
import Img from '../src/Images/B9.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
     <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid '>
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className='row'>
                <div className='col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>Grow Your Business <strong>With E-cart</strong></h1>
                  <h2 className='my-3'>We are Talented Developer Making Websites</h2>
                  <div className='mt-3'>
                    <Link to="/Service" className="btn btn-success">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img '>
                  <img src={Img} className='img-fluid' alt='My-banner'/>
                </div>
              </div>
            </div>
          </div>
        </div>
     </section> 
    </>
  )
}

export default Home
