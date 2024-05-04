import React from "react";
import Button from "../Button/Button";

class Header extends React.Component{

  constructor(props){
    super(props)
    this.state = {
        helpText : "Header Text"
    }

    this.mouseOver = this.mouseOver.bind(this)
  }


    render(){
        return (
            <div className={"Header"}>
             
              <h1 onClick={this.mouseOver}> {this.state.helpText}</h1> 
              <Button  />
            </div>
          );
    }
    
    mouseOver(){
      this.setState({helpText: "HEllo!!"})
      console.log('нажали')
    }

    askName(){
      prompt("Ввеедите имя!")
    }

    componentDidUpdate(prevProp){
      if (this.state.helpText !== "sad"){
        console.log("some")
      }
    }
    
}

export default Header;



// function Header() {
//     return (
//       <div className="Header">
//         <h1> hello</h1>
//       </div>
//     );
//   }
  
//   export default Header;
  
  