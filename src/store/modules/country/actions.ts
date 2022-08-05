import { ActionTree } from 'vuex';
import { ApiResponse } from '../../../types';
import { CountryActionTypes, CountryMutationTypes, } from "../../enums"
import { RootStateTypes } from "../../types";
import { CountryStateTypes, CountryActions } from './types';
import axios, { AxiosResponse } from 'axios';

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