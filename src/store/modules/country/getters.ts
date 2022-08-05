import { GetterTree } from 'vuex'
import { Country } from '../../../types';
import { RootStateTypes } from "../../types";
import { CountryStateTypes, CountryGetters } from './types'
import { CountryGetterTypes } from '../../enums'

export const getters: GetterTree<CountryStateTypes, RootStateTypes> & CountryGetters = {
    [CountryGetterTypes.GET_COUNTRY_BY_NAME]: (state: CountryStateTypes) => (name: string): Country => {
        return state.countryList.filter(country => country.name === name)[0]
    },
    [CountryGetterTypes.GET_COUNTRIES_BY_NAME]: (state: CountryStateTypes) => (query: string): Country[] => {
        console.log(query)
        return query !== '' ? state.countryList.filter(country => country.name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) : state.countryList
    },
    [CountryGetterTypes.GET_COUNTRIES_BY_REGION]: (state: CountryStateTypes) => (region: string): Country[] => {
        console.log(region)
        return region.toLocaleLowerCase() !== 'worldwide' ? state.countryList.filter(country => country.region.toLocaleLowerCase() === region.toLocaleLowerCase()).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) : state.countryList
    },
}