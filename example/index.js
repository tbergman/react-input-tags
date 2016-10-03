import React from 'react'
import { render } from 'react-dom'
import ReactTagging from '../src'

class Example extends React.Component {
    render() {
        return <ReactTagging />
    }
}

render(<Example />, document.getElementById('react-app'))
