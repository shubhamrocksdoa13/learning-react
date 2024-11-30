import React from 'react';
import ReactDOM from 'react-dom';


const heading = React.createElement(
    "div", { id:"parent"}, 
    [
        React.createElement("div", {id:"child1"}, 
        [
        React.createElement("h1", {}, "This is an H1 Tag"), 
        React.createElement("h2", {}, "This is an H2 Tag")
        ]),
        React.createElement("div", {id:"child2"}, 
        [
        React.createElement("h1", {}, "This is an H1 Tag"), 
        React.createElement("h2", {}, "This is an H3 Tag")
        ])
    ]
    );
console.log(heading)    
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(heading);
 // transitive dependency - We have only downloaded parcel but in node modules it showed so many files, because parcel as a project had other dependencies and other dependecies had other other dependencies
