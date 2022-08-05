import { Module } from 'vuex';
import { RootStateTypes } from "../../types";
import { ThemeStateTypes } from './types';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';

export const themeStore: Module<ThemeStateTypes, RootStateTypes> = {
    state,
    actions,
    mutations
};