import React from "react";
const ShimmerCard = ()=>{

    return(

        <div className="shimmer-container">

        <div className="shimmer-card shimmer-wrapper">
        <div className="shimmer-image shimmer-wrapper"></div>
        <div className="shimmer-title shimmer-wrapper"></div>
        <div className="shimmer-text shimmer-wrapper"></div>
        <div className="shimmer-text shimmer-wrapper"></div>
        <div className="shimmer-button shimmer-wrapper"></div>
        </div>
        </div>

    );
}


const ShimmerUI = () =>{

    // const shimmerCardArray = [];

    // for(let i = 0; i<18; i++){

    //     shimmerCardArray.push(<ShimmerCard key={i}> </ShimmerCard>);
    // }


    //or 



    return(
            <div className="shimmer-container">

            {Array(18).fill("").map((Elements,Index) =><ShimmerCard key={Index}/>)}
            {/*Array(18) -> array of 18, .fill("") -> fill with empty string, .map() => map function on every empty string */}
            </div>
    );

}

export default ShimmerUI;

