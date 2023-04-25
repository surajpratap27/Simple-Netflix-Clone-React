import React from "react";
import Card from "./Card";
import './index.css'
import Sdata from "./Sdata";

const App = (props) => {
    return (
        <>
            <div>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="logo" />
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png" alt="" className="logo1" />
                <h1 className="heading_style">List of Top 6 Netflix Series in 2023</h1>
            </div>

            {Sdata.map((val) => {
                return (
                    <Card
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                )

            })};
        </>

    )
}

export default App;