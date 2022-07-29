import { MutationTree } from 'vuex';
import Country from "../interfaces/Country"
import { State } from './state'

export enum MutationType {
    SET_COUNTRIES_LIST = 'SET_COUNTRIES_LIST',
    UPDATE_COUNTRIES_LIST_BY_NAME = 'UPDATE_COUNTRIES_LIST_BY_NAME',
    UPDATE_COUNTRIES_LIST_BY_REGION = 'UPDATE_COUNTRIES_LIST_BY_REGION',
    SET_LOADING = 'SET_LOADING',
    SET_COUNTRY = 'SET_COUNTRY'
}

export type Mutations = {
    [MutationType.SET_COUNTRIES_LIST](state: State, countriesList: any[]): void
    [MutationType.UPDATE_COUNTRIES_LIST_BY_NAME](state: State, searchQuery: string): void
    [MutationType.UPDATE_COUNTRIES_LIST_BY_REGION](state: State, searchQuery: string): void
    [MutationType.SET_LOADING](state: State, value: boolean): void
    [MutationType.SET_COUNTRY](state: State, countryName: string): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_COUNTRIES_LIST](state, countriesList) {
        countriesList.forEach((country, index) => {
            state.fullCountriesList.push({
                id: index + 1,
                flag: country.flags.svg,
                name: country.name.common,
                nativeName: `${country.name.nativeName ? (Object.keys(country.name.nativeName)).map((item: string) => country.name.nativeName[item].common) : null}`,
                population: country.population.toLocaleString('en'),
                region: country.region,
                subRegion: country.subregion,
                capital: country.capital ? country.capital[0] : null,
                topLevelDomain: country.tld ? (Object.keys(country.tld)).map((item: string) => country.tld[item]) : null,
                currencies: country.currencies ? (Object.keys(country.currencies)).map((item: string) => country.currencies[item].name) : null,
                languages: country.languages ? (Object.keys(country.languages)).map((item: string) => country.languages[item]) : null,
                borderCountries: country.borders ? country.borders.map((iso: string) => countriesList.map((land: any) => {
                    return (land.name.common != undefined && land.cca3 === iso) ? land.name.common : "null"
                }).filter((item: string) => item !== "null")[0]).sort() : null,
            })
        });
        state.fullCountriesList = state.fullCountriesList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        state.displayedCountriesList = state.fullCountriesList;
    },
    [MutationType.UPDATE_COUNTRIES_LIST_BY_NAME](state, searchQuery) {
        searchQuery !== '' ? state.displayedCountriesList = state.fullCountriesList.filter(country => country.name.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase())).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) : state.displayedCountriesList = state.fullCountriesList
    },
    [MutationType.UPDATE_COUNTRIES_LIST_BY_REGION](state, searchQuery) {
        searchQuery.toLocaleLowerCase() !== 'worldwide' ? state.displayedCountriesList = state.fullCountriesList.filter(country => country.region.toLocaleLowerCase() === searchQuery.toLocaleLowerCase()).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) : state.displayedCountriesList = state.fullCountriesList
    },
    [MutationType.SET_LOADING](state, value) {
        state.loading = value;
    },
    [MutationType.SET_COUNTRY](state, countryName) {
        state.fullCountriesList.forEach(country => {
            if (country.name === countryName) {
                state.country = country;
            }
        })
    }
}