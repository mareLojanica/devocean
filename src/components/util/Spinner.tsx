import React from "react"
const Spinner = (): JSX.Element => {
	return (
		<div className="lds-roller">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Spinner
