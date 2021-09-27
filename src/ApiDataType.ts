import { RouteComponentProps } from "react-router"
export interface ApidataTypeBusiness {
	businessData: {
		loading: boolean
		error: boolean
		business: BusinessData[] | []
	}
}
export interface ApiDataType extends ApidataTypeBusiness {
	LoadData: (url: string) => void
}

export type RouterHistoryTypes = RouteComponentProps<{ id: string }, {}, {}>
export type BusinessData = {
	id: string
	image: string
	name: string
	phone: string
	description: string
	email: string
	address: AdressBusiness
}
export type AdressBusiness = {
	city: string
	country: string
	number: string
	street: string
	zip: string
}
