import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
import { Component } from "react";
import UserContext from "../utils/context/UserContext"; //trying to use React Context in class based component About.jsx

//Class based 'About' component
//here trying one class based component (UserClass) inside another class based component (About) , in this case order of execution ----> 1)Parent Constructor - 2)Parent Render method - 3)Child Constructor - 4)Child Render method, hence this is how lifecycle of CBC works
// class About extends React.Component{ //can also be written like this ⬇️
class About extends Component { //destructuring on the go, using destructuring to import the Component class from react

  constructor(props) {
    super(props);

    // console.log("Parent Constructor")
  }

  componentDidMount() {
    // console.log('Parent componentDidMount method called')
  }

  render() {
    // console.log("Parent Render method")
    
    return (
      <div>
        {/* {console.log("Parent Render method2")} */}
        <h1>About Class Component</h1>
        <h2>This is your about section</h2>
        {/* <User phone={"123456789 (FBC)"}/> */}

        <div>
          LoggedIn User

          {/* as we can't use useContext hook here in CBCs(About.jsx now being a CBC) we will access the context using Context.Consumer component, in our case we are using UserContext.Consumer component */}
          <UserContext.Consumer> 
            {/* so in CBCs instead of useContext hook we use UserContext.Consumer by using this we get direct acccess to all the data present inside UserContext component*/}
            {/* {(data) => console.log(data.loggedInUser)} */}
            {({ loggedInUser }) => <h1 className="text-pink-600 font-bold italic">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>

        {/* Creating 2 instances of the same class named 'UserClass' with different props being passed for each */}
        {/* <UserClass phone={"First"} gender={"Male"} /> */}
        {/* <UserClass phone={"Second"} gender={"Male"} /> */}
        {/* <UserClass phone={"Third"} gender={"Male"} /> */}
      </div>
    )
  }
}

export default About