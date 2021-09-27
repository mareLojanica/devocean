import { BusinessData } from "../../ApiDataType"

export interface ListItemDetailsState {
	nearbyPlaces: BusinessData[] | []
	currentBusiness: BusinessData
}
