import React from "react"
import Component__CSS from "./NearbyPlaces.module.css"
import { BusinessData } from "../../ApiDataType"
import { GenerateAddress } from "../util/generateAddres"
const NearbyPlaces = (props: BusinessData): JSX.Element => {
	const { address } = props
	return (
		<li className={Component__CSS.list__item}>
			<h3 className={Component__CSS.subtitle}>{props.name}</h3>
			<p>{GenerateAddress(address)}</p>
		</li>
	)
}

export default NearbyPlaces
