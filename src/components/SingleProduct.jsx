import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({item}) => {
   return (
<div class="card single_product">
    <Link to={`product/${item.id}`}>
  <img src={item.image} class="card-img-top" alt="..."/>
  </Link>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{(item.description).substring(0, 15)}...<Link to={`product/${item.id}`}>more</Link></p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
  <div className="card-footer">
    <h5>Price:<del>{item.market_price}$</del>{item.selling_price}$</h5>
  </div>
</div>
  )
}

export default SingleProduct