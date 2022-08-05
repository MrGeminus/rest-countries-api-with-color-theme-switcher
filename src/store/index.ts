import { createStore, useStore as VuexStore, createLogger } from 'vuex';
import { countryStore as country } from './modules/country';
import { themeStore as theme } from './modules/theme';
import { RootStateTypes, Store } from "./types";

export const store = createStore<RootStateTypes>({
    plugins: import.meta.env.MODE === 'development' ? [createLogger()] : [],
    modules: {
        country,
        theme
    }
})

export function useStore(): Store {
    return VuexStore() as Store;
}
