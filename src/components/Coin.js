import React, { Component } from 'react';

class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            expression: "expression",
        }
        this.flip = this.flip.bind(this);
    }

    flip() {
        this.setState({ expression: "" }, () => {
            if(Math.random() > 0.5) {
                this.setState({ result: 'heads' });
                alert("Heads");
            } else {
                this.setState({ result: 'tails' });
                alert("Tails");
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <div id='coin' className={this.state.result}>
                    <div className='side1'>
                    </div>
                    <div className='side2'>
                    </div>
                </div>
                <h1>Press this button to flip the coin</h1>
                <button onClick={this.flip}>Flip</button>
            </div>
            
        )
    }
}

export default Coin;