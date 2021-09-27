import React from "react"
import { ApiDataType } from "../ApiDataType"

export type RouteType = {
	component: React.ComponentType<ApiDataType>
	pathname: string
}
