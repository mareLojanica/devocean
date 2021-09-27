import {
	LOAD_DATA_ERROR,
	LOAD_DATA_SUCCESS,
	LOAD_DATA_REQUEST,
} from "../../actionTypes/LoadDataActions"
import { loadAction } from "../../actions/LoadActionTypes"
import { Store } from "../../iSotre"

const initialState: Store = {
	loading: true,
	business: [],
	error: false,
}

/**
 *
 * @param state
 * @param action
 * @returns state for store
 */
export const loadReducer = (
	state = initialState,
	action: loadAction
): Store => {
	const { type } = action

	switch (type) {
		case LOAD_DATA_REQUEST:
			return initialState
		case LOAD_DATA_SUCCESS:
			const { business } = action.payload
			return { ...state, loading: false, business, error: false }
		case LOAD_DATA_ERROR:
			return { ...state, loading: false, error: true }
		default:
			return state
	}
}
