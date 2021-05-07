import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = (props) =>{

    const [products, setProducts] = useState ([])

    const getallproduct = async () =>{
  
    //   const userId = localStorage.getItem('userId')
      try {
        const product = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
         if(product.data){
          console.log(product)
          setProducts(product.data.products)
        }
      }  catch(error){
        console.log(error)
      }
    }
    useEffect (() =>{ getallproduct()}, [])

    return(

        
            <div className = 'home'>

                <h1> All Products</h1>
                {
                    products.map((item, i) =>(
                        <div className = 'product' key = {i}>

                            <h4>Name:- {item.name}</h4>
                            <h4>$ {item.price}</h4>
                            <img src = {`images/${item.image}`}/>
                          <Link to = '/singleproduct'>
                           <button onClick = {() =>{
                               props.setSingeleproduct(item)
                            }}>View Product</button>
                          </Link> 
                          <br/>
                          <br/>
                        </div>
                    
                    ))
                }
                
             </div>

        
        
    )

}

export default Home