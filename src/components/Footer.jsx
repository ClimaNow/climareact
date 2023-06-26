import React from 'react';
import './Footer.css';



const Footer = () => {
  return (
    
    <div id="container3"> 

      <footer classpie="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div classpie="col-md-4 d-flex align-items-center">
            <span classpie="mb-3 mb-md-0 text-body-secondary">
                <h2 id='titulo-footer'>Clima-Now</h2>
                <h2 id='derechos'>Derechos Reservados. Copyright © 2023</h2>
            </span>
        </div>
        
        <div className='col-sm-2 col-lg-4 col-xs-12 footer-text-contac text-center' align='text-center'>
            <div id="list-footer">
                <span className='font-footer'>  
                <h6>Contacto</h6>
                </span>
                <h6>Dirección: CABA-Argentina</h6>
                <h>Clima-Now@gmail.com</h>    
            </div>
        </div>
        <div id='container2'>
         <ul classpie="nav col-md-4 list-unstyled d-flex">
            <button> <a href="https://twitter.com/" > <img src="./img/Twitter.jpg" alt="instagram" width='50px' height='50px'/> </a></button>
            <button>  <a href="https://www.instagram.com/">  <img src="./img/Instagram (2).jpg" alt="instagram" width='50px' height='50px'/> </a></button>
            <button> <a href="https://www.facebook.com/"> <img src="./img/Facebook.jpg" alt="instagram" width='50px' height='50px'/> </a></button>
         </ul>
        </div>
     </footer>
    </div>
  )
}

export default Footer