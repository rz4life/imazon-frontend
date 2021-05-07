import {Link} from 'react-router-dom'

const Navbar = (props) =>{


    return(
        <nav>

            <Link to = '/'> Home</Link>
            {
                props.user ?
                <>
                {' | -- |'} {' -- | '}
                <Link to = '/profile' className = 'navtext'> Profile</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/cart' className = 'navtext'> My Cart</Link>
                {' | -- |'} {' -- | '}
                <span onClick={() => {
                            localStorage.removeItem('userId')
                             props.setUser(null)
                }}><Link className="navLink" to="/login" className = 'navtext'>Logout</Link></span>
                </>
                :
                <>
                {' | -- |'} {' -- | '}
                <Link to = '/signup' className = 'navtext'> Signup</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/login' className = 'navtext'> Login</Link> 
                </>
            }
        
        </nav>
    )



}

export default Navbar
