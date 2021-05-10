import axios from 'axios'
import { useEffect, useState } from 'react'

const Singleproduct = (props) => {

    const [inCart, setInCart] = useState(false)

    const includescart = (items, id) => {
        const arr = []
        items.map((item) => {

            arr.push(item.id)
        })
        console.log(arr)
        if (arr.includes(id)) {
            // return true
            setInCart(true)
        } else {
            // return false
            setInCart(false)
        }
    }


    useEffect(() => {
        includescart(props.cart, props.singleproduct.id)
    }, [])



    return (


        <div className='product' >

            <h4>Name:- {props.singleproduct.name}</h4>
            <h4> Description:- {props.singleproduct.description}</h4>
            <h4>Price:- $ {props.singleproduct.price}</h4>
            <h4>Quantity:- {props.singleproduct.quantity}</h4>
            <img src={`images/${props.singleproduct.image}`} />
            {
                inCart ?

                    <button onClick={() => {
                        const cartId = localStorage.getItem('cartId')
                        console.log(cartId)
                        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/carts/${cartId}/products/${props.singleproduct.id}`).then((response) => {
                            console.log(response)
                            // window.location.reload()
                            setInCart(false)
                        })

                    }}>Remove Item from Cart</button>
                    :
                    <button onClick={() => {
                        console.log(props.singleproduct.id)
                        const userId = localStorage.getItem('userId')

                        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}/addToCart`, {
                            productId: props.singleproduct.id

                        }).then((response) => {
                            console.log(response.data.cart)
                            localStorage.setItem('cartId', response.data.cart.id)
                            // window.location.reload()
                            setInCart(true)

                        })

                    }}>Add to Cart</button>
            }

        </div>
    )


}

export default Singleproduct