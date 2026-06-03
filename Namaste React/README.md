# REACT


# PARCEL
 -dev build
 -local server
 -HMR = hot module replacement
 -file watching algorithm 
 -caching (faster builds)
 -image optimization
 -minification 
 -bundling
 -compress


# app structure
/*
--Header
    -logo
    -Nav items
--body 
    -search bar
    -restaurantContainer
        -restaurantCard
            -img
            -name, cuisine, rating, time
--Footer
    -copyright
    -links
    -address
    -contact
*/


# React hooks
(Normal JS Utility Functions)
-useState() - superpowerful state variable in React
-useEffect() - Function called after Body Component will be rendered



# 2 type of routing in web
-Client-side Routing
-Server-side Routing



 # app.js code
 import React from "react";
import ReactDOM from "react-dom/client";
    
    // // const heading = React.createElement("h1", {id : "heading"}, "hello world from react");
    // // const root = ReactDOM.createRoot(document.getElementById("root"));
    // // root.render(heading);
    // //ReactElement(object)==>HTML(browser understands)

    // const parent = React.createElement("div", {id: "parent"},
    //     [React.createElement("div", {id: "child"},
    //         [React.createElement("h1",{}, "hello this is h1 tag"),
    //         React.createElement("h2",{}, "hello this is h2 tag")
    //         ]
    //     ),
    //     React.createElement("div", {id: "child2"},
    //         [React.createElement("h1",{}, "hello this is h1 tag"),
    //         React.createElement("h2",{}, "hello this is h2 tag")
    //         ]
    //     )
    // ]
    // );
    //  console.log(parent); //object
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);

    //React.createElement ==>ReactElement-JS Object ==>HTML Element(render)
    // const heading= React.createElement(
    //     "h1",
    //     {id: "heading"},
    //     "NAmaste React"
    // );
    //JSX ==> React.createElement ==>ReactElement-JS Object ==>HTML Element(render)
    // const jsxheading = <h1>Namaste react using JSX</h1>
    
    //functional component
    // const HeaderComponent = () => {
    //     return <h1>this is header of functional component</h1>
    // }

    // const HeadingComponent = () =>{
    // return (
    //     <div>
    //     <HeaderComponent />
    //     <h1>this is functional Component</h1>
    //     </div>
    // )
    // }

    // const root= ReactDOM.createRoot(document.getElementById("root"));
    // root.render(<HeadingComponent/>);

//react component

// const heading = <h1>hello this is react component heading 1</h1>;


// const heading2 = <h1>hello this is also react component heading 2</h1>;

// const heading3 = (
//     <div>
//         {/* <MainComponent/> */}
//         {heading}
//         <h1>hello this is also react component heading 3</h1>
//         <h1>hello this is also react component heading 3</h1>
//     </div>
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent></HeaderComponent>);


//react functional component

/* 
const HeaderComponent =()=>{
    return <h1>hello this is header of functional component</h1>
}

const FooterComponent =()=>{
    return <h1>hello this is footer of functional component</h1>
}


const MainComponent =()=>{
    return (
        <div>
            <HeaderComponent></HeaderComponent>
             <h1>hello this is main of functional component</h1>
             <h1>hello this is main of functional component</h1>
             {FooterComponent()}
             {heading3}
             {heading2}

        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent></MainComponent>);
root.render(heading3);
*/





