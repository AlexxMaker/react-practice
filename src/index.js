import React from 'react'
import ReactDOM from 'react-dom'

import json from './db.json'

//COMPONENTS
import Header from './components/header'


const App = () => {
    console.log(json)
    return (
        <Header />
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))