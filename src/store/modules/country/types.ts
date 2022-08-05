import { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from "vuex";
import { Country, ApiResponse } from "../../../types";
import { CountryGetterTypes, CountryActionTypes, CountryMutationTypes } from "../../enums"
import { RootStateTypes } from "../../types";

export interface CountryStateTypes {
    loading: boolean;
    error: string | null;
    countryList: Country[];
}

export type CountryGetters = {
    [CountryGetterTypes.GET_COUNTRY_BY_NAME]: (state: CountryStateTypes) => (name: string) => Country
    [CountryGetterTypes.GET_COUNTRIES_BY_NAME]: (state: CountryStateTypes) => (query: string) => Country[]
    [CountryGetterTypes.GET_COUNTRIES_BY_REGION]: (state: CountryStateTypes) => (region: string) => Country[]
}

export type ActionAugments = Omit<ActionContext<CountryStateTypes, RootStateTypes>, 'commit'> & {
    commit<K extends keyof CountryMutations>(
        key: K,
        payload: Parameters<CountryMutations[K]>[1],
        options?: CommitOptions
    ): ReturnType<CountryMutations[K]>
}

export type CountryActions = {
    [CountryActionTypes.FETCH_COUNTRY_LIST](context: ActionAugments): void,
}

export type CountryMutations = {
    [CountryMutationTypes.SET_COUNTRY_LIST](state: CountryStateTypes, countryList: ApiResponse[]): void
    [CountryMutationTypes.SET_LOADING](state: CountryStateTypes, value: boolean): void
    [CountryMutationTypes.SET_ERROR](state: CountryStateTypes, value: string): void
}

export type CountryStoreType<S = CountryStateTypes> = Omit<
    VuexStore<S>,
    'commit' | 'getters' | 'dispatch'
> & {
    commit<K extends keyof CountryMutations, P extends Parameters<CountryMutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<CountryMutations[K]>
} & {
    getters: {
        [K in keyof CountryGetters]: ReturnType<CountryGetters[K]>
    }
} & {
    dispatch<K extends keyof CountryActions>(
        key: K,
        payload?: Parameters<CountryActions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<CountryActions[K]>
} 