import { ActionTree } from 'vuex';
import { ThemeActionTypes, ThemeMutationTypes, } from "../../enums"
import { RootStateTypes } from "../../types";
import { ThemeStateTypes, ThemeActions } from './types';

export const actions: ActionTree<ThemeStateTypes, RootStateTypes> & ThemeActions = {
    async [ThemeActionTypes.UPDATE_THEME]({ commit }) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            commit(ThemeMutationTypes.SET_THEME, "dark");
        }
        else {
            commit(ThemeMutationTypes.SET_THEME, "light");
        }
    },
}