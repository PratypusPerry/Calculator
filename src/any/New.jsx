import React from 'react';
import ReactDOM from 'react-dom';
const a='Pratyush Banerjee'
const cd= new Date();
// setInterval(cd,1000);
const Few = () => {
  return ([<h1><marquee>{`Hello myself ${a}!`}</marquee></h1>,<p>Hello Everyone!</p>,<h2>Come On</h2>,<ol><li>World is bad</li><li>World is not that good</li><li>Why is the world so bad?</li></ol>]);
  // return(<><h1>{`My name is ${a}`}</h1><p>{`Today's date is ${cd.toLocaleDateString()} and the time is ${cd.toLocaleTimeString()}`}</p></>)
}
// const Chew=()=>{
//   return(<React.Fragment>
//   <h2>How You Doin'?</h2>
//   <p>Whatever you doing man I think you should just go and fuck yourself</p>
//   </React.Fragment>)
// }

export default Few
// export default Chew;
// export default Chew