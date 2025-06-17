import { useState } from "react"
import HeadingComponent from "./Heading"
import { RestaurantContainer } from "./RestaurantContainer"

const Body = () => {

    let arr = useState('');
    let [searchData, setSearch] = arr;
    let searchInput = "";

    return (<div className="bodyCode">
            <HeadingComponent/>
            <div className="searchBox">
                <input type="search" value = {searchData} placeholder="Search" 
                onChange={(e)=>{
                    //searchData = searchInput;
                    setSearch(e.target.value);
                    console.log(searchData);
                }}/>
            </div>
            <h1>{searchData}</h1>
            <RestaurantContainer/>
        </div>
    )
}
export default Body;
