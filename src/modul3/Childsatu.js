import React, { Component } from "react";

class Childsatu extends Component {
    state = {
        nama: "Julian"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ChangeName = () => {
        this.setState((state) => {
            if (state.nama === "Julian"){
                return {nama : "Daniel"}
            } else {
                return { nama: "Julian"}
            }
        })
    }

    componentWillUnmount() {
        alert(`Anak pertama bakal hilang :(`)
    }
    render(){
        return (
            <div>
                <h3>Aku Anak Pertama</h3>
                <button onClick={this.ChangeName}>Change Name!</button>
                <br/>
                <h3>{this.state.nama}</h3>
            </div>
        );
    }
}
export default Childsatu;
