import type { Module } from 'vuex';
import type { RootStateTypes } from "../../types";
import type { ThemeStateTypes } from './types';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';

export const themeStore: Module<ThemeStateTypes, RootStateTypes> = {
    state,
    actions,
    mutations
};