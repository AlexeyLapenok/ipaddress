import React, { Component } from "react";
import IPAddress from "./IPAddress";
var xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip_addres: "37.214.32.16"
        };
        this.processRequest = this.processRequest.bind(this);
    }
    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();

        xhr.addEventListener("readystatechange",
            this.processRequest, false);
    }
    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            this.setState({ ip_addres: response.ip });
        }
    }
    render() {
        return (
            <IPAddress ip={this.state.ip_addres} />
        )
    }
}
export default IPAddressContainer;