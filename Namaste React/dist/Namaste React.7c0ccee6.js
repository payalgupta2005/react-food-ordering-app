// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {id : "heading"}, "hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//ReactElement(object)==>HTML(browser understands)
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "hello this is h1 tag"),
        React.createElement("h2", {}, "hello this is h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "hello this is h1 tag"),
        React.createElement("h2", {}, "hello this is h2 tag")
    ])
]);
// console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=Namaste React.7c0ccee6.js.map
