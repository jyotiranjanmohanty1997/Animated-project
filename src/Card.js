import React from 'react';

import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
        
        <div className='col-md-4 col-10 mx-auto'>
            <div class="card">
                <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="#" class="btn btn-outline-success">Go somewhere</Link>
                </div>
            </div>
        </div>
                    
    </>
  )
}

export default Card
