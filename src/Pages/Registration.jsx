import React, { Component } from 'react';
import axios from "axios";

class Registration extends Component {

    constructor(props){
        super(props)
        
        /*
            state contains the employee attributes
        */

        this.state = {
            empID:'',
            empUName:'',
            empFName:'',
            empLName:'',
            empEmail:'',
        }

        //binding the event handler methods to 'this'

        this.collectInfo.bind(this);
        this.createEmployee.bind(this);
    }

    /*
        below method changes the states of the inputs using 
        the name attribute and target value
    */
    collectInfo = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    /*
        post request method
        grabs the full state and sends it in the request body
    */
    createEmployee = (e) => {
        console.log(this.state);

        axios.post('http://localhost:9191/sbl/employee', this.state)
            .then(response => {
                console.log(response);
                alert(response + "was saved successfully");
            })
            .catch(error => {
                console.log(error);
                alert(error);
            })
    }

    render() {

        const {empID, empUName, empFName, empLName, empEmail} = this.state

        return (
            <div>
                <h1> Register an Employee </h1>
                <div>
                    <div>
                        <p> Employee ID: </p>
                        <input name="empID" type="text" onChange={this.collectInfo} />
                    </div>
                    <div>
                        <p> Username: </p>
                        <input name="empUName" type="text" onChange={this.collectInfo}/>
                    </div>
                    <div>
                        <p> First Name: </p>
                        <input name="empFName" type="text" onChange={this.collectInfo}/>
                    </div>
                    <div>
                        <p> Last Name: </p>
                        <input name="empLName" type="text" onChange={this.collectInfo}/>
                    </div>
                    <div>
                        <p> Email: </p>
                        <input name="empEmail" type="text" onChange={this.collectInfo}/>
                    </div>
                    <div>
                        <button onClick={this.createEmployee}> Create Employee</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
