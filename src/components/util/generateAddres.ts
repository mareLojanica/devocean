import { AdressBusiness } from "../../ApiDataType"

/**
 * @param address
 * @returns adress of given params
 */
export const GenerateAddress = (address: AdressBusiness): string => {
	const { number, city, country, street, zip } = address
	return `${number}, ${street}, ${city}, ${zip}, ${country}`
}
