import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

class Button extends Component {
  render() {
    return (
      <a href='#' onClick={this.props.onClick}>
        {this.props.title}
      </a>
    )
  }
}

class App extends Component {
  clicar() {
    console.log('Botão clicado')
  }
  render() {
    return (
      <Fragment>
        <h1>Olá Mundo!!</h1>
        <Button title='Enviar' onClick={this.clicar} />
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
