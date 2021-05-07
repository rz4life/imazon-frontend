import './App.css';
import {Redirect, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

import Navbar from './navbar'
import Home from './componet/pages/home'
import Signup from './componet/pages/signup'
import Login from './componet/pages/login'
import Profile from './componet/pages/profile'
import Cart from './componet/pages/cart'
import UserOrders from './componet/userorders'
import Useraddress from './componet/useraddress'
import Userwallet from './componet/userwallet'

function App() {
  const [user, setUser] = useState (null)

  const getUserInfo = async () =>{

    const userId = localStorage.getItem('userId')
    try {
      const user = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify/${userId}`)
      if(user.data){
        console.log(user)
        setUser(user.data.user)
      }
    }  catch(error){
      console.log(error)
    }
  }
  useEffect (() =>{ getUserInfo()}, [])

  return (
    <div className="App">
      <Navbar user = {user} setUser = {setUser}/>


      <Route path = '/' exact render ={ () =>( <Home/>)}/>


      <Route path = '/profile'  render ={ () =>{ 
        if (user){
          return <Profile user = {user}/>
        }else{
          return<Redirect to = '/login'/>
        }
      }}/>

      <Route path = '/cart'  render ={ () =>{ 
        if (user){
          return <Cart user = {user}/>
        }else{
          return<Redirect to = '/login'/>
        }
      }}/>

      <Route path = '/userorders' exact  render ={ () =>{ 
        if (user){
          return <UserOrders user = {user}/>
        }else{
          return<Redirect to = '/login'/>
        }
      }}/>

      <Route path = '/useraddress' exact  render ={ () =>{ 
        if (user){
          return <Useraddress user = {user}/>
        }else{
          return<Redirect to = '/login'/>
        }
      }}/>

      <Route path = '/userwallet' exact  render ={ () =>{ 
        if (user){
          return <Userwallet user = {user}/>
        }else{
          return<Redirect to = '/login'/>
        }
      }}/>   


      <Route path = '/signup'  render ={ () =>{ 
        if (user){
          return<Redirect to = '/'/>
        }else{
          return <Signup setUser = {setUser}/>
        }
      }}/>
      <Route path = '/login' render ={ () =>{ 
        
        if (user){
          return<Redirect to = '/'/>
        }else{
          return <Login  setUser = {setUser}/>
        }
      }}/>
    </div>
  )
}

export default App;
