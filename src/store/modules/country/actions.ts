import type { ActionTree } from 'vuex';
import type { ApiResponse } from '../../../types';
import { CountryActionTypes, CountryMutationTypes, } from "../../enums"
import type { RootStateTypes } from "../../types";
import type { CountryStateTypes, CountryActions } from './types';
import axios, { type AxiosResponse } from 'axios';

export const actions: ActionTree<CountryStateTypes, RootStateTypes> & CountryActions = {
    async [CountryActionTypes.FETCH_COUNTRY_LIST]({ commit }) {
        try {
            commit(CountryMutationTypes.SET_LOADING, true)
            const response: AxiosResponse<ApiResponse[]> = await axios.get("https://restcountries.com/v3.1/all");
            commit(CountryMutationTypes.SET_COUNTRY_LIST, response.data);
            commit(CountryMutationTypes.SET_LOADING, false)
        } catch (error: any) {
            commit(CountryMutationTypes.SET_ERROR, error.message);
        }
    },
}