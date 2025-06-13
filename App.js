import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
   return(<div className="heading">
        <img className="imgLogo" src="https://www.shutterstock.com/image-vector/burger-logo-vector-icon-symbol-600nw-2496553061.jpg"/>
        <ul>
            <li>Links</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
   )
}
const RestaurantCard = (props) =>{
    const name = props?.resname ?? "Wendy's";
    const description = props?.description ?? "Chicken, Fries";

    return (
        <div className="res-card">
            <img className="res-img" src = "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/78e952f2-250e-471d-8a05-24ca784ac46c.png"/>
            <h4>{name}</h4>
            <h4>{description}</h4>
            <h4>38 minutes</h4>
            <h4>4.4 stars</h4>
        </div>
    )
}
const RestaurantContainer = () =>
{
    return (<div className="res-container">
        <RestaurantCard/>
        <RestaurantCard resname = {"McD"} description ={"Burger"}/>
    </div>)
}
const Body = () => {
    return (<div className="bodyCode">
            <HeadingComponent/>
            <RestaurantContainer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);
