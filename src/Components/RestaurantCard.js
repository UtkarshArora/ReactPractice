const RestaurantCard = (resData) =>{
    
    let customData = JSON.parse(resData.resData.custom);
    let imgSrc = customData?.window_shopping?.cover?.image?.remote?.uri ?? "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/78e952f2-250e-471d-8a05-24ca784ac46c.png";
    let name = resData.resData.text?.title ?? "Hello";
    return (
        <div className="res-card">
            <img className="res-img" src = {imgSrc}/>
            <h4>{name}</h4>
            <h4>There</h4>
            <h4>38 minutes</h4>
            <h4>4.4 stars</h4>
        </div>
    )
}

export default RestaurantCard;