/*
<div id="parent">
   <div id="child">
      <h1>I'm heading<h1>
   </div>
</div>

<div id="parent">
   <div id="child">
      <h1>I'm heading<h1>
      <h2>I'm heading2<h2>
   </div>
</div>

<div id="parent">
   <div id="child1">
      <h1>I'm heading1<h1>
      <h2>I'm heading2<h2>
   </div>
   <div id="child2">
      <h1>I'm heading1<h1>
      <h2>I'm heading2<h2>
   </div>
</div>

*/

// const parent = React.createElement("div", {id:"parent"},
//                React.createElement("div", {id:"child"}, 
//                [React.createElement("h1", {}, "I'm heading"),
//                React.createElement("h2", {}, "I'm heading2")]))

const parent = React.createElement("div", {id:"parent"},
               [React.createElement("div", {id:"child1"},
               [React.createElement("h1", {}, "I'm heading1"), React.createElement("h2", {}, "I'm heading2")]),
               ], React.createElement("div", {id:"child2"},
               [React.createElement("h1", {}, "I'm heading1"), React.createElement("h2", {}, "I'm heading2")]))


const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
//console.log(heading); // Will return Object
const root = ReactDOM.createRoot(document.querySelector("#root"));
//console.log(root); // Will return Object
root.render(parent);