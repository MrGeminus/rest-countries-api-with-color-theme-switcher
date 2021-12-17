import { ActionTree, ActionContext } from 'vuex';
import { State } from './state';
import { Mutations, MutationType } from './mutations';
import axios, { AxiosResponse } from 'axios';

export enum ActionTypes {
    GET_FULL_COUNTRIES_LIST = 'GET_FULL_COUNTRIES_LIST',
    FILTER_COUNTRIES_BY_NAME = 'FILTER_COUNTRIES_BY_NAME',
    FILTER_COUNTRIES_BY_REGION = 'FILTER_COUNTRIES_BY_REGION',
    GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
export type Actions = {
    [ActionTypes.GET_FULL_COUNTRIES_LIST](context: ActionAugments): void,
    [ActionTypes.FILTER_COUNTRIES_BY_NAME](context: ActionAugments, searchQuery: string): void,
    [ActionTypes.FILTER_COUNTRIES_BY_REGION](context: ActionAugments, searchQuery: string): void,
    [ActionTypes.GET_COUNTRY_BY_NAME](context: ActionAugments, countryName: string): void
}
export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GET_FULL_COUNTRIES_LIST]({ commit }) {
        if (localStorage.countriesList == undefined) {
            try {
                commit(MutationType.SET_LOADING, true)
                const response: AxiosResponse = await axios.get("https://restcountries.com/v3.1/all");
                commit(MutationType.SET_COUNTRIES_LIST, response.data);
                localStorage.setItem('countriesList', JSON.stringify(response.data));
                commit(MutationType.SET_LOADING, false)
            } catch (error) {
                console.error(error);
            }
        }
        else {
            commit(MutationType.SET_LOADING, true);
            commit(MutationType.SET_COUNTRIES_LIST, JSON.parse(`${localStorage.getItem('countriesList')}`));
            commit(MutationType.SET_LOADING, false)
        }

    },
    [ActionTypes.FILTER_COUNTRIES_BY_NAME]({ commit }, searchQuery) {
        commit(MutationType.SET_LOADING, true)
        commit(MutationType.UPDATE_COUNTRIES_LIST_BY_NAME, searchQuery);
        commit(MutationType.SET_LOADING, false)
    },
    [ActionTypes.FILTER_COUNTRIES_BY_REGION]({ commit }, searchQuery) {
        commit(MutationType.SET_LOADING, true)
        commit(MutationType.UPDATE_COUNTRIES_LIST_BY_REGION, searchQuery);
        commit(MutationType.SET_LOADING, false)
    },
    [ActionTypes.GET_COUNTRY_BY_NAME]({ commit }, countryName) {
        commit(MutationType.SET_LOADING, true)
        commit(MutationType.SET_COUNTRY, countryName);
        commit(MutationType.SET_LOADING, false)
    }
}