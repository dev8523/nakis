import React, { Component } from 'react';

export default class superPropsComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
    <p>{'test'}</p>
            </div>
        );
    }
}

