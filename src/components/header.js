import React, { Component } from 'react'




class Header extends Component {

    state = {
        keywords: ''
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value,
        })
    }

    render() {
        return (
            <header>
                <div className="logo">Logo</div>
                <input type="text" onChange={this.inputChangeHandler.bind(this)}/>
                <p>{this.state.keywords}</p>
            </header>
            )
        }
    }




export default Header;  