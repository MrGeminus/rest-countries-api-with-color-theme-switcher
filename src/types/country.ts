export interface Country {
    id: number,
    flag: string,
    name: string,
    nativeName: string | null,
    population: string,
    region: string,
    subRegion: string,
    capital: string | null,
    topLevelDomain: string[] | null,
    currencies: string[] | null,
    languages: string[] | null,
    borderCountries: string[] | null,
}