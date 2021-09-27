import React from "react"
import { ApiDataType } from "../ApiDataType"

export interface RouteType {
	component: React.ComponentType<ApiDataType>
	pathname: string
}
