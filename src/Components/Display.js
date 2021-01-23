import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div className="display">
                 <p>{this.props.result}</p>
            </div>
        )
    }
}


