import React from 'react';
import ShowcaseSingle from '../components/ShowcaseSingle';

// const samples  = [
//   {
//     title: "Spinning square",
//     src: "./samples/main.js"
//   }
// ]


const Showcase = (props) =>{
    return(
      <ShowcaseSingle title={"Spinning Square"} src={"./samples/main.js"}></ShowcaseSingle>
    );
}

export default Showcase;