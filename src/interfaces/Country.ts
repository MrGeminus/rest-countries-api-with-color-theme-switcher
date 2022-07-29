interface Country {
    id: number,
    flag: string,
    name: string,
    nativeName: string | null,
    population: string,
    region: string,
    subRegion: string,
    capital: string,
    topLevelDomain: any[] | null,
    currencies: any[] | null,
    languages: string[] | null,
    borderCountries: string[] | null,
}

export default Country