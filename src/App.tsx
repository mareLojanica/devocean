import React, { Component, Fragment } from "react"
import "./App.css"
import ViewPort from "./components/ViewPort/ViewPort"

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<header className="navbar">
					<div className="header__container">Logo</div>
				</header>
				<main className={"wrapper"}>
					<ViewPort />
				</main>
			</Fragment>
		)
	}
}
