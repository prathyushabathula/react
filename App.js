import React from "react";
import { createRoot } from "react-dom/client";
/**
 * <div id="parent">
 * <div id = "child1">
 *      <h1>"I'm an h1 tag"</h1>
 *      <h2>"I'm an h2 tag"</h2>
 * </div>
 * <div id = "child2">
 *      <h1>"I'm an h1 tag"</h1>
 *      <h2>"I'm an h2 tag"</h2>
 * </div>
 * </div>
 */



// const parent = React.createElement("div", {id:"parent"}, 
// [ React.createElement("div", {id:"child1"}, 
//     [ React.createElement("h1", {}, "I'm an h1 tag"), 
//       React.createElement("h2", {}, "I'm an h2 tag")
//     ]), 
// React.createElement("div", {id:"child2"}, 
//     [ React.createElement("h1", {}, "I'm an h1 tag"), 
//       React.createElement("h2", {}, "I'm an h2 tag")
//     ])
// ]);
// const root = createRoot(document.getElementById("root"));
// root.render(parent);

// const jsxHeading = <h1 className="heading">This is react with JSX</h1>
// const root = createRoot(document.getElementById("root"));
// root.render(jsxHeading);
const Title = () => <h1>This is Title Component</h1>
const number = 50;
//Component Composition
const HeadingComponent = () => {
    return ( 
    <div>
    <Title/>
    <Title></Title>
    {Title()}
    {number} 
    <h1>This is React Functional Component</h1>
    </div>
    )
};

const HeadingComponent2 = () => <h1>This is React Functional Component</h1>

const HeadingComponent3 = () => (
    <h1>This is React Functional Component</h1>
)

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);