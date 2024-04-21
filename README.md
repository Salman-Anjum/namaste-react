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
