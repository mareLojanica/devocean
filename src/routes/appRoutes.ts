import ListScreen from "../screens/ListScreen/ListScreen"
import ListItemDetails from "../screens/ListItemDetails/ListItemDetails"
import { RouteType } from "./appRoutesTypes"
export const RouteList: RouteType[] = [
	{
		pathname: "/businesslist",
		component: ListScreen,
	},
	{
		pathname: "/businesslistitem/:id",
		component: ListItemDetails,
	},
]
