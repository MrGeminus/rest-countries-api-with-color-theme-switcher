export interface ApiResponse {
    name: {
        common: string,
        official: string,
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            }
        }
    },
    tld: string[],
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        }
    },
    idd: {
        root: string;
        suffixes: string[];
    },
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: {
        [key: string]: string;
    },
    translations: {
        [key: string]: string;
    },
    latlng: number[],
    landlocked: boolean,
    borders: string[],
    area: number,
    demonym: {
        [key: string]: {
            [key: string]: string;
        }
    },
    flag: string,
    maps: {
        [key: string]: string;
    },
    population: number,
    fifa: string,
    car: {
        signs: string[]
        side: string;
    },
    timezones: string[],
    continents: string[],
    flags: {
        png: string;
        svg: string;
    },
    coatOfArms: {
        png: string;
        svg: string;
    },
    startOfWeek: string,
    capitalInfo: {
        latlng: number[];
    },
    postalCode: {
        format: string;
        regex: string;
    },
}
