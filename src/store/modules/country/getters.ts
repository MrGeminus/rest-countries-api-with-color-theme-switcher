import type { GetterTree } from 'vuex'
import type { Country } from '../../../types';
import type { RootStateTypes } from "../../types";
import type { CountryStateTypes, CountryGetters } from './types'
import { CountryGetterTypes } from '../../enums'

export const getters: GetterTree<CountryStateTypes, RootStateTypes> & CountryGetters = {
    [CountryGetterTypes.GET_COUNTRY_BY_NAME]: (state: CountryStateTypes) => (name: string): Country => {
        return state.countryList.filter(country => country.name.toLocaleLowerCase() === name.toLocaleLowerCase())[0]
    },
    [CountryGetterTypes.FILTER_COUNTRY_LIST]: (state: CountryStateTypes) => (query: string, region: string): Country[] => {
        if (query.toLocaleLowerCase() !== '' && region.toLocaleLowerCase() !== 'worldwide') {
            return state.countryList.filter(country => country.region.toLocaleLowerCase() === region.toLocaleLowerCase()).filter(country => country.name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        }
        if (query.toLocaleLowerCase() !== '' && region.toLocaleLowerCase() === 'worldwide') {
            return state.countryList.filter(country => country.name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        }
        if (query.toLocaleLowerCase() === '' && region.toLocaleLowerCase() !== 'worldwide') {
            return state.countryList.filter(country => country.region.toLocaleLowerCase() === region.toLocaleLowerCase()).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        }
        return state.countryList
    },
}