import { readConfig } from "browserslist";
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", {id : "parent"}, 
// [
//     React.createElement("div", {id : "child1"}, 
//         [
//             React.createElement("h1", {}, "This is h1 tag"),
//             React.createElement("h2", {}, "This is h2 tag"),
//         ]),
//     React.createElement("div", {id : "child2"} ,
//         [
//             React.createElement("h1", {}, "This is a h1 tag"),
//             React.createElement("h2", {}, "This is a h2 tag")
//         ])
// ])

// const JSXheading = (<h1 id="heading" tabIndex="5">
//     Hello World from React yo</h1>
// );

// const TitleComponent = () => (
//     <h1>Hello from the Title</h1>
// );

// const HeadingComponent = () => {
//     return (<div id ="container">
//         <TitleComponent/>
//         <h1>Hello Heading</h1>
//         </div>
//     )
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

//creating nested elements using React.creatElement
const heading = React.createElement("div", {className: "title"} ,
    [
        React.createElement("h1", {}, "This is a h1 tag"),
        React.createElement("h2", {}, "This is a h2 tag"),
        React.createElement("h3", {}, "This is a h3 tag")
    ]
 );


//creating using JSX
const heading2 = (
    <div className="title">
        <h1>This is a h1 tag</h1>
        <h2>This is a h2 tag</h2>
        <h3>This is a h3 tag</h3>
    </div>
)

//create functional component 

const HeadingComponent = () => (
   
    <header className="header">
    <div className="logo-container">
      <img
        src="https://www.onedoor.org.au/Images/UserUploadedImages/239/A%20Beautiful%20Mind_%20Tile.png"
        alt="Your Logo"
        className="logo"
      />
    </div>

    <div className="search-container">
      <form action="/search" method="GET" className="search-form">
        <input
          className="searchBox"
          type="search"
          name="q"
          placeholder="Search…"
        />
        <button type="submit">Go</button>
      </form>
    </div>

    <div className="right-container">
      <button className="profile-btn">Profile</button>
    </div>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
