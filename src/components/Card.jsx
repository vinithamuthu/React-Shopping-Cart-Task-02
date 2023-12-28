import React,{useState} from 'react'

function Card({data,cart,setCart}) {

    let [toggle,setToggle] = useState(true)

  return <div className="col mb-5">
  

  <div className="card h-100">
      {/* <!-- Sale badge--> */}
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
      {/* <!-- Product image--> */}
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      {/* <!-- Product details--> */}
      <div className="card-body p-4">
          <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{data.product}</h5>
              {/* <!-- Product price--> */}
              <span className="text-muted text-decoration-line-through">$50.00</span>
              {data.price}
          </div>
      </div>
      {/* <!-- Product actions--> */}
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
            toggle?
            <button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
              }}>
            Add to cart
            </button>:
            <button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
              }}>
            Remove from Cart
            </button>

            }
         </div>
      </div>
  </div>
</div>



  
  
  }
  
  export default Card