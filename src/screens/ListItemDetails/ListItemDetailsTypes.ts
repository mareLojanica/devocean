import { BusinessData } from "../../ApiDataType"

export type ListItemDetailsState = {
	nearbyPlaces: BusinessData[] | []
	currentBusiness: BusinessData
}
