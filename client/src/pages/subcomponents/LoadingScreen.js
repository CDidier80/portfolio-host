import React from 'react'
import "./loading.css"


const LoadingScreen = (props) => {
   
    return (
        <div className={"e-loadholder"}>
            <div className={"m-loader"}>
                <span className={"e-text"}>Loading</span>
            </div>
        </div>
    )
}

export default LoadingScreen