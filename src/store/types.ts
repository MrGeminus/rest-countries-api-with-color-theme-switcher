import { CountryStateTypes, CountryStoreType } from './modules/country/types';
import { ThemeStateTypes, ThemeStoreType } from './modules/theme/types';

export type RootStateTypes = {
    country: CountryStateTypes;
    theme: ThemeStateTypes;
};

export type Store = CountryStoreType<Pick<RootStateTypes, 'country'>>
    & ThemeStoreType<Pick<RootStateTypes, 'theme'>>;