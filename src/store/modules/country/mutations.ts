import { mapActions } from 'vuex';
import type { MutationTree } from 'vuex';
import { CountryMutationTypes } from "../../enums"
import type { ApiResponse } from '../../../types';
import type { CountryStateTypes, CountryMutations } from "./types"

export const mutations: MutationTree<CountryStateTypes> & CountryMutations = {
    [CountryMutationTypes.SET_COUNTRY_LIST](state: CountryStateTypes, countryList: ApiResponse[]) {
        countryList.forEach((country, index) => {
            if (country.name.common === 'Kosovo') return
            state.countryList.push({
                id: index + 1,
                flag: country.flags.svg,
                name: country.name.common,
                nativeName: `${country.name.nativeName ? (Object.keys(country.name.nativeName)).map((item: string) => country.name.nativeName[item].common) : null}`,
                population: country.population.toLocaleString('en'),
                region: country.region,
                subRegion: country.subregion,
                capital: country.capital ? country.capital[0] : null,
                topLevelDomain: country.tld ? country.tld : null,
                currencies: country.currencies ? (Object.keys(country.currencies)).map((item: string) => country.currencies[item].name) : null,
                languages: country.languages ? (Object.keys(country.languages)).map((item: string) => country.languages[item]) : null,
                borderCountries: country.borders ? country.borders.map((iso: string) => countryList.map((state: any) => {
                    return (state.name.common !== undefined && state.cca3 === iso) ? state.name.common : "null"
                }).filter((item: string) => item !== "null")[0]).map(countryName => { if (countryName === 'Kosovo' && country.name.common === 'Serbia') return 'Albania'; if (countryName === 'Kosovo' && country.name.common === 'Albania') return 'Serbia'; if (countryName !== 'Kosovo') return countryName }).filter((item: string | undefined) => item !== undefined).sort() : null,
            })
        });
        state.countryList = state.countryList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    },
    [CountryMutationTypes.SET_LOADING](state: CountryStateTypes, value: boolean) {
        state.loading = value;
    },
    [CountryMutationTypes.SET_ERROR](state: CountryStateTypes, value: string) {
        state.error = value;
    }
}