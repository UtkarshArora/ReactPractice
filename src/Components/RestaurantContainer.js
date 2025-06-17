import RestaurantCard from "./RestaurantCard";
import { resObj } from "../../utils/config";
export const RestaurantContainer = () =>
    {
        return (
        <div className="res-container">
        {
            resObj.map((restaurant) => 
                <RestaurantCard key = {restaurant.id} resData = {restaurant}/>
            )
        }
        </div>
        )
    };
