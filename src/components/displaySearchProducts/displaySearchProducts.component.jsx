import React from 'react';
import {Card} from 'react-bootstrap'
import './displaySearchProducts.styles.css'
const DisaplaySearchproducts=({id, name, price, imageUrl})=>(
    <div class="container">
      <div class="product">
    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {price}
        </Card.Text>
        
        </Card.Body>
     </Card>

      </div>
         
    </div>
)

export default DisaplaySearchproducts;