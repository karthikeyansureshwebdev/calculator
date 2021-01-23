import React, { Component } from 'react'

export default class numpad extends Component {
    handleclick = e =>{
        this.props.handleclick(e.target.name);
    };
    render() {
        return (
            <div className="buttons">
            <button name="1" onClick={this.handleclick}>1</button>
            <button name="2" onClick={this.handleclick}>2</button>
            <button name="3" onClick={this.handleclick}>3</button>
            <button name="+" onClick={this.handleclick}>+</button>
            <button name="4" onClick={this.handleclick}>4</button>
            <button name="5" onClick={this.handleclick}>5</button>
            <button name="6" onClick={this.handleclick}>6</button>
            <button name="-" onClick={this.handleclick}>-</button>
            <button name="7" onClick={this.handleclick}>7</button>
            <button name="8" onClick={this.handleclick}>8</button>
            <button name="9" onClick={this.handleclick}>9</button>
            <button name="*" onClick={this.handleclick}>*</button>
            
            <button name="c" onClick={this.handleclick}>c</button>
            <button name="0" onClick={this.handleclick}>0</button>
           
            <button name="/" onClick={this.handleclick}>/</button>
            
            <button name="=" onClick={this.handleclick}>=</button>
        </div>
            
        )
    }
}
