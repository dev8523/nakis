import React, { Component } from 'react';
import ClassBComponent from './componentB';

export default class ClassAComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            showData: true,
            username: '',
            password: ''
        }
       
       this.handleClick = this.handleClick.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.changeUsernameValue = this.changeUsernameValue.bind(this);
    }

    render() {
        return (
            
            <div className="wrapperDiv">

                {/*--Parent Div --*/}
                {
                    this.state.showData ?
                        <div>
                            <p>Start Entering Details</p>
                       <label>Username: </label> <input type="text" value={this.state.username} onChange={this.changeInputValue}/>
                        <br/>
                
                        <br/>
                            <button onClick={this.handleClick}>Click ME!</button>
                            
                </div> : ''
                }
                
                {/*--Child Div --*/}
                <ClassBComponent username={this.state.username}  changeUsernameValue={this.changeUsernameValue}/>
            </div>
        )
    }

    handleClick() {
        console.log("handle clicked");
        console.log(this);
    }

    changeInputValue(e) {

        console.log("changed input value: ", e)
        this.setState({
            username: e.target.value
        })
    }

    changeUsernameValue() {
        this.setState({
            username: "Guest"
        })
    }


}
