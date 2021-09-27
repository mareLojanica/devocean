import { Store } from "../iSotre"

type requestType = "LOAD_DATA_ERROR" | "LOAD_DATA_REQUEST" | "LOAD_DATA_SUCCESS"
export interface loadAction {
	type: requestType
	payload: Store
}
