import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.scss";

class App extends Component {
	state = {
		contador: 0
	};

	clicar = () => {
		const { contador } = this.state;
		this.setState({ contador: contador + 1 });
	};

	render() {
		const { contador } = this.state;
		return (
			<Fragment>
				<h1 className="title">Olá Mundo!!</h1>
				<h3 style={{ color: "#f00" }}>{contador}</h3>
				<Button title="Enviar" onClick={this.clicar}>
					Somar
				</Button>
			</Fragment>
		);
	}
}

render(<App />, document.getElementById("app"));
