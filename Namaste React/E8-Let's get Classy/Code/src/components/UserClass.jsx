//Class based component similar to/same as functional component User.jsx

import React from "react"; //'React.Component' is a class inside React, hence importing React

// Class based component: similar to functional based components, class based components are also simply a normal javascript class
//(reminder: functional based components are simple normal javascript functions that return some jsx)

class UserClass extends React.Component{ //'extends React.Component' will help React know/identify that this is a class based component and so React starts tracking it
                                         // 'React.Component' is a class given to us by React and here 'UserClass' class is inheriting properties from 'React.Component' class

  //constructor to recieve the props data in Class based component
  constructor(props){
    //In a functional component, you can directly access the props object passed to the component function. However, in a class-based component, the props object is not automatically available to the component class. Instead, you need to call the super() method to initialize the React.Component class and gain access to the props object, and so here as 'UserClass' class is inheriting properties from 'React.Component' class hence 'UserClass' also gets the ability to access the props object.
    //Therefore, by calling super(props) in the constructor of UserClass, you are effectively initializing the React.Component class with the props object. This allows you to use the props object within the UserClass component, just like you would in a functional component.
    //The purpose of using the constructor with super and props as argument is to allow the component to inherit the properties of its parent component and also pass in additional properties as arguments to the component, so to use properties of parent class (React.Component) in child class(UserClass) we are using super(props)
    //IMP Links: overreacted.io/why-do-we-write-super-props/ , www.geeksforgeeks.org/what-is-the-use-of-superprops/
    super(props);

    console.log(props);
    // console.log(props.phone);
  }

  //this render method will return some piece of jsx and that jsx eventually gets rendered on the screen
  //so in short similar to functional based components, Class based component is a class which has a render method which returns some piece of jsx
  // render(){
  //   return <div className="user-card">
  //     <h2>Name: Vishal_Class</h2>
  //     <h3>Location: Hyderabad_Class</h3>
  //     <h4>Contact: @vishalsingh2972_Class</h4>
  //     <h3>Phone: {this.props.phone}</h3>
  //     <h3>Gender: {this.props.gender}</h3>
  //   </div>
  // }

  //better or cleaner way to write render() ---> destructuring this.props
  render(){

    const {phone, gender} = this.props;

    return <div className="user-card">
      <h2>Name: Vishal_Class</h2>
      <h3>Location: Hyderabad_Class</h3>
      <h4>Contact: @vishalsingh2972_Class</h4>
      <h3>Phone: {phone}</h3>
      <h3>Gender: {gender}</h3>
    </div>
  }
}

export default UserClass
