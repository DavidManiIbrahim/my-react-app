/* eslint-disable react/prop-types */

 

import propTypes from 'prop-types'


function Student(props) {
    // const{name="mani",age={22}} = props;
  return (
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent}</p>
        
    </div>
  )
}

Student.propsTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool
}
Student.defaultProps = {
  name:"Guest",
  age: 0,
  isStudent: false,
}

export default Student












