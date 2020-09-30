import React from 'react';

export class SearchBar extends React.PureComponent {
    
    render () {
        return (
            <form onSubmit={this.props.submit}>
                <input
                    type="text" 
                    value={this.props.value} 
                    placeholder="Enter city" 
                    onChange={this.props.change}
                />
                <button>   
                    Search
                </button>
            </form>
        );
    }
}
