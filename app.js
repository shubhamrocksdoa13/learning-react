import React from 'react';
import ReactDOM from 'react-dom';


const heading = React.createElement(
    "div", { id:"parent"}, "This is test"
    );
   
let testJSX = <h1>This is loading from JSX</h1>    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(testJSX);
 // transitive dependency - We have only downloaded parcel but in node modules it showed so many files, because parcel as a project had other dependencies and other dependecies had other other dependencies
