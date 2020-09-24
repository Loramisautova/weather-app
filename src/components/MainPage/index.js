import React from 'react';

export class MainPage extends React.PureComponent {

    state = {
        query: "",
        text: ""
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }

    handleSubmit = () => {
        this.setState({ text: this.state.query });
    }

    render () {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Search for Location / City"
                />
                <button 
                    onClick={this.handleSubmit}
                >   
                Search
                </button>
                <div> {this.state.text} </div>
          </div>
        );
    }
  }
