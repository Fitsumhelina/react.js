// Card.jsx

import React from 'react';
import './Card.css'

function Card(props) {
  // Destructure props to access attributes
  const { imageUrl, title, description } = props;

  return (

 
          <div className="card">
     
             <img src={imageUrl} alt="Card Image" className="card-img-top" />
            
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                 <a href="" className="btn btn-primary">Linkden</a>
             </div>
         </div>

  
  );
}

export default Card;
