export interface Store {
	loading: boolean
	error: boolean
	business: Business[]
}

export type Business = {
	userId: number
	id: number
	title: string
	body: string
}
