import React from "react";
import Overview from "./Contents/Overview";
import Career from "./Contents/Career";
import Achievements from "./Contents/Achievements";
import Portfolio from "./Contents/Portfolio";
import Twitter from "./Contents/Twitter";
import IntellectualProperty from "./Contents/IntellectualProperty";


export default class Contents extends React.Component{
    render(){
        return(
            <div>
                <Overview />
                <Career />
                <Achievements />
                <Portfolio />
            </div>
            // <IntellectualProperty />
            // <Twitter />
        );
    }
}