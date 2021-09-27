import React, { Component } from "react"
import { withRouter } from "react-router"
import Spinner from "../../components/util/Spinner"
import {
	ApiDataType,
	RouterHistoryTypes,
	BusinessData,
} from "../../ApiDataType"
import Component__CSS from "./ListItemDetails.module.css"
import NearbyPlaces from "../../components/NearbyPlaces/NearbyPlaces"
import { ListItemDetailsState } from "./ListItemDetailsTypes"

class ListItemDetails extends Component<
	ApiDataType & RouterHistoryTypes,
	ListItemDetailsState
> {
	state: ListItemDetailsState = {
		nearbyPlaces: [],
		currentBusiness: {
			id: "",
			image: "",
			name: "",
			phone: "",
			description: "",
			email: "",
			address: {
				city: "",
				country: "",
				number: "",
				street: "",
				zip: "",
			},
		},
	}
	/**
	 *
	 * @param props
	 * @param state
	 * @returns new state if params from url are valid or redericts to list , error handlig for url inserted by hand
	 */
	public static getDerivedStateFromProps(
		props: RouterHistoryTypes & ApiDataType,
		state: ListItemDetailsState
	): null | ListItemDetailsState {
		const { business, loading } = props.businessData
		if (business.length > 0 && !loading) {
			const { id } = props.match.params
			try {
				const currentBusiness = business[+id]
				const city = props.businessData.business[+id].address.city
				const nearbyPlaces = props.businessData.business.filter(
					(business: BusinessData) =>
						business.address.city === city &&
						business.id !== props.businessData.business[+id].id
				)
				return { ...state, currentBusiness, nearbyPlaces }
			} catch (error) {
				props.history.push("/")
				return null
			}
		}
		return null
	}
	renderLoadingSection(): JSX.Element {
		return (
			<div className="spinner__holder">
				<Spinner />
			</div>
		)
	}
	/**
	 * it could be broken up into several peaces if something had some interaction , but i think its useless to split code
	 * @returns jsx element
	 */
	renderDetails(): JSX.Element {
		const { currentBusiness, nearbyPlaces } = this.state
		const { address, email, phone } = currentBusiness
		const { city, country, number, street, zip } = address
		return (
			<>
				{currentBusiness.image !== "" && (
					<section className={Component__CSS.image__holder}>
						<img
							src={currentBusiness.image}
							alt={`${currentBusiness.name}`}
						/>
					</section>
				)}
				<section className={Component__CSS.content}>
					{address && (
						<div className={Component__CSS.column}>
							<article
								className={Component__CSS.contact__article}
							>
								<h2 className={Component__CSS.title}>
									Address
								</h2>
								<p>{`${number} ${street}`}</p>
								<p>{`${city}, ${country},  ${zip}`}</p>
							</article>
							<article
								className={Component__CSS.contact__article}
							>
								<h2 className={Component__CSS.title}>
									Contact
								</h2>
								<p>{phone}</p>
								<p>{email}</p>
							</article>
							<div></div>
						</div>
					)}
					{nearbyPlaces.length > 0 && (
						<div
							className={`${Component__CSS.column} ${Component__CSS.nearby}`}
						>
							<article className={Component__CSS.nearby__article}>
								<h2 className={Component__CSS.title}>
									Nearby Places
								</h2>
								<ul className={Component__CSS.places__lists}>
									{nearbyPlaces.map((places, index) => (
										<React.Fragment key={index}>
											<NearbyPlaces {...places} />{" "}
										</React.Fragment>
									))}
								</ul>
							</article>
						</div>
					)}
				</section>
			</>
		)
	}

	render(): JSX.Element {
		const { error, loading } = this.props.businessData

		return (
			<div className={Component__CSS.container}>
				{loading ? (
					this.renderLoadingSection()
				) : error ? (
					<div>error</div>
				) : (
					this.renderDetails()
				)}
			</div>
		)
	}
}
export default withRouter(ListItemDetails)
