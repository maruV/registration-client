import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            employee: {
                empID: '',
                username: '',
                firstname:'',
                lastname: '',
                email: ''
            },
            uri: ''
        }
         
        this.getEmp = this.getEmp.bind(this);
    }
    
    getEmp() {
        console.log(this.state.uri);

        let ptn = new RegExp("\\D+");

        let baseUrl = 'http://localhost:9191/sbl/employee/';

        let searchUrl = '';

        if (ptn.test(this.state.uri))
        {
            searchUrl = baseUrl + 'withusername/'
        }
        else
        {
            searchUrl = baseUrl + 'withid/'
        }

        axios.get(searchUrl + this.state.uri)
                .then(response => 
                    {
                        const empdata = response.data;

                        this.setState( prevState => 
                            ({
                                employee: {
                                    ...prevState.employee,
                                    empID: empdata.empID,
                                    username: empdata.empUName,
                                    firstname: empdata.empFName,
                                    lastname: empdata.empLName,
                                    email: empdata.empEmail
                                }
                        }));
                    })
                .catch((error) => {
                    console.log(error.message);
                    alert(error);
                });
    }

    changeUri = (e) => {
        this.setState({uri: e.target.value})
    }
    
    render() {
        return (
            <div>
                <h1> Search Box </h1>
                <div>
                    <input type="text" onChange = {this.changeUri} />
                    <button id="searchbtn" onClick={this.getEmp}> Search </button>
                </div>
                <div>
                    <p>{this.state.employee.username}</p>
                    <p>{this.state.employee.firstname}</p>
                    <p>{this.state.employee.lastname}</p>
                    <p>{this.state.employee.email}</p>
                </div>
            </div>
        );
    }
}

export default Search;
