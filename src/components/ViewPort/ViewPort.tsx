import React, { Component } from "react"
import { RouteType } from "../../routes/appRoutesTypes"
import { Switch, Route, Redirect } from "react-router"
import { RouteList } from "../../routes/appRoutes"
import { connect } from "react-redux"
import { LoadData } from "../../redux/actions/LoadDataAction"
import { ApiDataType, ApidataTypeBusiness } from "../../ApiDataType"

class ViewPort extends Component<ApiDataType> {
	static defaultProps: ApiDataType = {
		LoadData: (url: string): void => {},
		businessData: {
			loading: true,
			error: false,
			business: [],
		},
	}
	componentDidMount() {
		this.props.LoadData("https://api.jsonbin.io/b/60215a7906934b65f530333a")
	}

	/**
	 *
	 * @param routeList
	 * @returns all routes with given apramter
	 */
	renderRoutes(routeList: RouteType[]): JSX.Element {
		return (
			<Switch>
				{routeList.length > 0 &&
					routeList.map((route: RouteType, index: number) => {
						const { pathname } = route
						return (
							<Route
								exact
								key={index}
								path={pathname}
								component={() => (
									<route.component {...this.props} />
								)}
							/>
						)
					})}
				<Route
					path="*"
					component={() => (
						<Redirect to={{ pathname: "/businesslist" }} />
					)}
				/>
			</Switch>
		)
	}
	render() {
		return <>{this.renderRoutes(RouteList)}</>
	}
}
const mapStateToProps = (state: ApiDataType): ApidataTypeBusiness => {
	const { businessData } = state
	return { businessData }
}
export default connect(mapStateToProps, { LoadData })(ViewPort)
