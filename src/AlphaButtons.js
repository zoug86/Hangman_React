import React, { Component } from 'react'


class AlphaButtons extends Component {
    static defaultProps = {

    }
    constructor(props) {
        super(props);
        this.handleGuess = this.handleGuess.bind(this);
    }

    handleGuess(e) {
        this.props.Guess()
    }
    render() {
        return (
            <div>
                {"abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
                    <button
                        key={index}
                        value={ltr}
                        onClick={this.handleGuess}
                        disabled={this.state.guessed.has(ltr)}
                    >
                        {ltr}
                    </button>
                ))
                }
            </div>
        )
    }
}

export default AlphaButtons;