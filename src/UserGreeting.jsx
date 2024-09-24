/* eslint-disable react/prop-types */



function UserGreeting(props) {
    
    if(props.isLoggedIn) {

        return (
          <div>Welcome {props.username}</div>
        )
    }
}

export default UserGreeting