/* eslint-disable no-constant-condition */
import Student from './Student.jsx'
import Greeting from './UserGreeting.jsx'


function App() {
  

  return (
    <>
    
    <Student name="MANI" age={30} isStudent={true ? "Yes" : "No" }/>
    <Student name="Joe" age={20} isStudent={false ? "Yes" : "No" }/>
    <Student name="Emma" age={15} isStudent={true ? "Yes" : "No" }/>
    <Student name="Joshua" age={8} isStudent={false ? "Yes" : "No" }/>
    <Student />
    <Greeting isLoggedIn={true} username="Mani"/>
    </>
  )
}

export default App
