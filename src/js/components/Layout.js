import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {title: "Welcome"};
    }
    changeTitle(title){
        this.setState({title})
    }
    render(){
        console.log(this.props)
        return(
        <div>
            {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> */}
            <Contents />
            <Footer />
        </div>
        );
    }
}
