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
        React.createElement("h2", {}, "This is an H2 Tag")
        ])
    ]
    );
console.log(heading)    
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(heading);
