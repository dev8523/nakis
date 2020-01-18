import React, { Component } from 'react';

export default class ClassBComponent extends Component {
    constructor(props) {
        super();
     this.changeParentValue = this.changeParentValue.bind(this);

    }

    render() {
        return (
            <div>
    <p>Hi, {this.props.username}</p>
    <br/>

    {/*--- Sending click to parent component ---*/}
    <div className="childToParentDiv">
            <button onClick={this.changeParentValue}>Change Parent value now </button>
    </div>
       
            </div>
        )
    }
    changeParentValue() {
        this.props.changeUsernameValue();
    }
}