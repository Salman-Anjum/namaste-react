import React from "react";
import ReactDOM from "react-dom/client";

//This is how we create React Element using core React
//React.createElement => ReactElement => JS Object => HTML(render)
//const heading = React.createElement("h1", {id:"heading"}, "Namaste React");
//console.log(jsxHeading); //Object

//This is how we create React Element using JSX
//JSX => Babel transpiles it to React.createElement => ReactElement => JS Object => HTML(render)
const element = <span>React Element</span>;
const jsxHeading = (
  <h1 id="heading" className="head">
    {element}
    Namaste React using JSX
  </h1>
);
//console.log(jsxHeading); //Object

//React Component
//Everything in React is a component- Header,Footer,Button,Card,Input Box,Title,Search Bar etc.
//There are two types of components in React - Class Based Components & Functional Components
//Class Based Components -- OLD WAY OF WRITING CODE
//Functional Components  -- NEW WAY OF WRITING CODE

//React Functional Component
//React Functional Component is just a normal JS function which returns some piece of JSX code (i.e React Elements)
//Function that returns a piece of JSX code (i.e React Elements) is Functional Component

//Syntax 1
// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };

//Syntax 2
const number = 10000;
const HeadingComponent = () => (
  //Inserting Footer component inside HeadingComponent is known as component composition
  <div id="container">
    <FooterComponent />
    <FooterComponent></FooterComponent>
    {FooterComponent()}
    <h2>{number}</h2>
    {jsxHeading}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const FooterComponent = () => (
  <div id="footer">
    <h1 className="footerSection">This is Footer Section</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent />);
