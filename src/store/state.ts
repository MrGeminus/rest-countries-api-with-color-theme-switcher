import Country from "@/interfaces/Country";

export type State = {
    loading: boolean;
    country: Country | null;
    fullCountriesList: Country[];
    displayedCountriesList: Country[];
};
export const state: State = {
    loading: false,
    country: null,
    fullCountriesList: [],
    displayedCountriesList: []
};