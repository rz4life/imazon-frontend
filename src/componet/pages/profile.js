import {Link} from 'react-router-dom'


const Profile = (props) =>{

        return(
            <div>
               
                    <h2>User Profile</h2>
                <h3>
                    {props.user.name}
                </h3>
                <h5>
                    {props.user.email}
                </h5>
                
                <div>
               <Link to = '/userorders'><h3> My Orders</h3></Link> 
               <Link to = '/userwallet'><h3> My wallet</h3></Link>
               <Link to = '/useraddress'><h3> My Address</h3></Link>

                </div>
            </div>
        )



}

export default Profile