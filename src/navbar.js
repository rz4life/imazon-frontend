import {Link} from 'react-router-dom'


const Navbar = (props) =>{


    return(
        <nav className='navbar'>

            <Link to = '/' className='navtext'>Home</Link>
            {
                props.user ?
                <>
                
                <Link to = '/profile' className = 'navtext'> Profile</Link>
                
                <Link to = '/cart' className = 'navtext'> My Cart</Link>
                
                <span onClick={() => {
                            localStorage.removeItem('userId')
                             props.setUser(null)
                }}><Link className="navLink" to="/login" className = 'navtext'>Logout</Link></span>
                </>
                :
                <>
                
                <Link to = '/signup' className = 'navtext'> Signup</Link>
            
                <Link to = '/login' className = 'navtext'> Login</Link> 
                <img className='logo' src='http://pngimg.com/uploads/amazon/amazon_PNG18.png'></img>
                </>
                
            }
        
        </nav>
    )



}

export default Navbar
