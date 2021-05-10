import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


const Cart = (props) => {

  const [cart, setCart] = useState(props.cart)
  console.log("CART AT BEGINING: ", cart)

  const getuserCart = async () => {

    const cartId = localStorage.getItem('cartId')
    try {
      const cart = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/carts/${cartId}/products`)
      console.log(cart)
      if (cart.data.products) {
        setCart(cart.data.products)
        console.log("CART AT getcart: ", cart)

      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeitem = (cartId, productId) => {

    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/carts/${cartId}/products/${productId}`)
      .then((response) => {
        console.log(response)
        console.log("CART AT Removeitem: ", cart)
        // window.location.reload()
        getuserCart()

      })

  }

  useEffect(() => {
    getuserCart()
  }, [])

  useEffect(removeitem, [cart])




  return (

    <div className='cartpage'>
      {
        cart.map((item, i) => (
          <div className='cartproduct' key={i}>

            <h4>{item.name}</h4>
            <h4>{item.price}</h4>
            <img src={`images/${item.image}`} />
            <button onClick={() => {
              removeitem(item.cartItems.cartId, item.cartItems.productId)
              // getuserCart()
            }}>Remove Item</button>
            <br />
            <br />
          </div>
        ))
      }
      <br />
      <br />
      <Link to='/checkout'>
        <button onClick={() => {
        }}>Proceed to checkout</button>
      </Link>
    </div>
  )

}

export default Cart