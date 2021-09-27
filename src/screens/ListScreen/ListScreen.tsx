import React, { Component } from "react"
import Component__CSS from "./ListScreen.module.css"
import { Link } from "react-router-dom"
import { ApiDataType, BusinessData } from "../../ApiDataType"

import Spinner from "../../components/util/Spinner"

class ListScreen extends Component<ApiDataType> {
	/**
	 *
	 * @param business
	 * @returns table of contets
	 */
	renderBusinsessTable(business: BusinessData[] | []): JSX.Element {
		return (
			<>
				{business.length > 0
					? business.map((bus: BusinessData, index) => (
							<div
								key={index}
								className={Component__CSS.table__row}
							>
								<div>
									<Link
										to={{
											pathname: `/businesslistitem/${index}`,
											state: { data: business[index] },
										}}
										className={Component__CSS.default__link}
									>
										{bus.name}
									</Link>
								</div>
								<div>{bus.description}</div>
							</div>
					  ))
					: null}
			</>
		)
	}
	render(): JSX.Element {
		const { error, loading, business } = this.props.businessData
		return (
			<div className={`${Component__CSS.container} overlay__scrollbar`}>
				<div
					className={`${Component__CSS.table__row} ${Component__CSS.color__purple}`}
				>
					<div className={Component__CSS.header__name}>Name</div>
					<div>Description</div>
				</div>
				{loading ? (
					<div className="spinner__holder">
						<Spinner />
					</div>
				) : error ? (
					"error"
				) : (
					this.renderBusinsessTable(business)
				)}
			</div>
		)
	}
}

export default ListScreen
