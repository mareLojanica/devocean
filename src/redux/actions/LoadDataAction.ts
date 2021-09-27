import {
	LOAD_DATA_ERROR,
	LOAD_DATA_REQUEST,
	LOAD_DATA_SUCCESS,
} from "../actionTypes/LoadDataActions"
import { Dispatch } from "redux"
import { Business } from "../iSotre"

/**
 *
 * @param apiUrl url of api
 * @returns data from api
 */
export const LoadData = (apiUrl: string) => (dispatch: Dispatch) => {
	dispatch({ type: LOAD_DATA_REQUEST })
	fetch(`${apiUrl}`)
		.then((response) => response.json())
		.then((result: Business[]) => {
			dispatch({
				type: LOAD_DATA_SUCCESS,
				payload: {
					business: result,
				},
			})
		})
		.catch((error) => {
			dispatch({
				type: LOAD_DATA_ERROR,
				payload: { error: true },
			})
		})
}
