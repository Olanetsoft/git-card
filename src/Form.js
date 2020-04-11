import React, { Component } from 'react';
import axios from 'axios';


import './App.css';


export default class Form extends Component {
    state = { userName: '', errorHandling: false };



    handleSubmit = async (event) => {
        try {
            event.preventDefault();

            const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
            this.props.onSubmit(resp.data);
            this.setState({ userName: '' });
            this.setState({ errorHandling: false });
        } catch (err) {
            this.setState({errorHandling: true}); // TypeError: failed to fetch
        }

    };




    render() {
        let main;
        let show;
            main = (
                <div>
                    <form className="w-full items-center max-w-sm border-teal-500" onSubmit={this.handleSubmit}>
                        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="GitHub Username"
                                aria-label="Full name"
                                value={this.state.userName}
                                onChange={event => this.setState({ userName: event.target.value })}
                                required
                            />
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"    >
                                Search
                        </button>
                        </div>
                    </form>
                </div>


            );
        
            if(this.state.errorHandling){
       
            show = (
                <div>
                    <br />
                        <div className="bg-red border border-red-400 text-red-700 px-4 py-2 rounded" role="alert">
                    <strong className="font-bold">Holy smokes!</strong>
                    <p className="block">GitHub User Not Found !</p>
                </div>
                </div>
                
            )
            }
        
        return (
            <div className="flex justify-center bg-gray-100">
                {main}
               {show}
            </div>
        )
    }
}

{/* 
<form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username"
                    required
                />
                <button>Add card</button>
            </form> */}