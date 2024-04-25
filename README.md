#Namaste React

#React.createElement is a JavaScript Object

#Parcel is a beast. It performs the following task

- Dev build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algoritham
- Catching - Faster Builds
- Image Optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different development and production bundles
- Transpiling

#JSX is a JavaScript syntax which is easier to create React Elements
#JSX is not HTML inside JavaScript, it is HTML-like or XML-like syntax
#Whenever we write some code in JSX, Parcel (Babel) transpiles it before it reaches JS Engine
#Transpiling means JSX code gets converted into a code that our browsers & react can understand
#Parcel gives the reponsibility of Transpilation to a JS package, known as Babel
#Babel converts the JSX code to React.Element, which is a JS Object
#We have to use camelCase while giving attributues to JSX
#While writing more than one line of code in JSX, it is mandatory to wrap it in round brackets
#At the end of the day, JSX is a React Element
#JSX sanitizes the data coming from an API call, this saving us from becoming a target of an attacker/hacker

#Just like functional component is a JS function at the end of the day which returns some piece of JSX code,
also known as React Element, props (abbreviation of Properties) is something which you can pass to the
functional component. When we want to dynamically pass some data to components, we can pass it as props.
In other words, props at the end of the day are just arguments to a functional component.

#When i say, i am passing props to a component, it is exactly like saying i am passing argument to a function.
#When we have to dynamically pass some data to a component, we pass in as a props
#We can pass any number of props we wish to. React will wrap all of them as an Object

#Whenever we do something on loop, like using map, filter methods, we should make a habit of adding key, which
should be a unique id.

#Food Ordering App

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-       - Image
-       - Name of Restaurant, Star Rating, Cuisines, Delivery Time
- Footer
- - Copyright
- - Links
- - Address
- - Contact Information
    \*/

#Two types of Export/Import

- Default Export/Import

export default Component
import Component from "path"

- Named Export/Import

export const Component
import {Component} from "path"

#React Hooks

- React Hooks are normal JS utility function, written by Facebook developers
- Facebook developers wrote this utility function inside React
- As we run the command npm install react, we got all the utility functions into our code
- There are two important React Hooks
  - useState() - This is used to generate Superpowerful State Variable in React. In other words, useState gives us Superpowerful React Variables
  - useEffect() -

#State Variables maintain the state of our components.
#Just like the local variable scope is inside a function, the scope of local state variables is inside a component.
#Since usState is a normal JavaScript utility function, when we call it, usState gives us a state variable
and then we recieve that state variable inside an array.
#In order to modify data inside state variable, we use a function as second parameter. The industry convention to pass the second parameter is by adding the "set" keyword in front of the state variable. With the help of second
parameter, we can modify the state variable.
#The superpowerful variable (state variable) keep the UI layer in sync with the data layer. On the other hand, the normal JS Variable doesn't allow us to update the UI.

#The ability of superpowerful variable (state variable) to update the UI is called Render.
#In other words, whenever a state variable updates/changes, React re-renders the component.

#How React works behind the scenes
-- React uses something known as Reconciliation Algorithm, also called React Fiber
-- Whenever we have a UI layer, React creates a virtual DOM of it.
-- React Virtaul DOM is the representation of actual DOM, which is the tree-like structure made up of HTML tags.
-- React Virtaul DOM is basically a normal JS Object which we get upon creating a React Element.
-- Diff Algortihm bascially finds out the difference between two virtual DOMs, the update virtual DOM and the
previous virtual DOM.
-- In React 16, a new Algorithm to update the DOM was introduced. That Algorithm is known as Reconciliation.
-- Whenever something changes on the UI, this is known as Reconciliation.
-- React Fiber is the new way of finding the diff and updating the DOM.
-- React Fiber is the new Reconciliation process to efficiently manipulate the DOM.
-- Whenever there is any change in the state varibale, React will find out the difference between two virtual DOMs and it will re-render our component/it will update the DOM.

#React is so fast because it does efficient DOM manipulation, thanks to virtual DOM
#React is so fast because it has Diff Algorithm, which is very efficient

#React Hooks - useEffect()

- useEffect() function will take two arguments - the callback function and depedency array
- The callback function will be called after the React component renders

NOTE: Whenever state varibale updates, React triggers a Reconciliation cycle (re-renders component)
