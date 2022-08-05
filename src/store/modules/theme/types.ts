import { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from "vuex";
import { ThemeActionTypes, ThemeMutationTypes } from "../../enums"
import { RootStateTypes } from "../../types";

export interface ThemeStateTypes {
    theme: string;
}

export type ActionAugments = Omit<ActionContext<ThemeStateTypes, RootStateTypes>, 'commit'> & {
    commit<K extends keyof ThemeMutations>(
        key: K,
        payload: Parameters<ThemeMutations[K]>[1],
        options?: CommitOptions
    ): ReturnType<ThemeMutations[K]>
}

export type ThemeActions = {
    [ThemeActionTypes.UPDATE_THEME](context: ActionAugments): void,
}

export type ThemeMutations = {
    [ThemeMutationTypes.SET_THEME](state: ThemeStateTypes, value: string): void
}

export type ThemeStoreType<S = ThemeStateTypes> = Omit<
    VuexStore<S>,
    'commit' | 'dispatch'
> & {
    commit<K extends keyof ThemeMutations, P extends Parameters<ThemeMutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<ThemeMutations[K]>
} & {
    dispatch<K extends keyof ThemeActions>(
        key: K,
        payload?: Parameters<ThemeActions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<ThemeActions[K]>
} 