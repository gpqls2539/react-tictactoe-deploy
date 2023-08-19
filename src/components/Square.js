//export 하여 다른 파일에서도 사용할 수 있게끔 만듦
import React from "react";
import "./Square.css";

//export default class Square 

//class component
// extends React.Component {

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   }
//   // }


//   render() {
//     return (
//       <button className="square"
//       onClick={() => { this.props.onClick() }}>
//       {this.props.value}
//       </button>
//     )
//   }
// }


//functional componen
const Square = ({onClick, value}) => {

  return (
    <button className="square"
    onClick = {() => {onClick()}}>
    {value}
    </button>
  )
}

export default Square;