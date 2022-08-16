import type { MutationTree } from 'vuex';
import { ThemeMutationTypes } from "../../enums"
import type { ThemeStateTypes, ThemeMutations } from "./types"

export const mutations: MutationTree<ThemeStateTypes> & ThemeMutations = {
    [ThemeMutationTypes.SET_THEME](state: ThemeStateTypes, value: string) {
        state.theme = value;
    },
}