import React, { Component } from 'react';
import apple from './apple.png';
import Display from './Display';
import Numpad from './Numpad';

export default class Calculator extends Component {
    state={
        result:""
    }

    handleclick=(buttonName)=>{
     if(buttonName ==="="){
         this.calculate()
     }else if (buttonName==="c"){
         this.setState({
             result:""
         });
     }
     
     else
      this.setState({
          result: this.state.result + buttonName
      });
    };

    calculate=()=>{
        try{
            this.setState({
            result: eval(this.state.result)
        });
    }catch(e){
        this.setState({
            result:"error"
        });
    };
    
    
    };
    render() {
        return (
            <div className="body">
                <img src={apple} />
                <Display result={this.state.result} />
                <Numpad handleclick={this.handleclick} />
            </div>
        )
    }
}
