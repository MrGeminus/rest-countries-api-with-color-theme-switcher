import { Module } from 'vuex';
import { RootStateTypes } from '../../types';
import { CountryStateTypes } from './types';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const countryStore: Module<CountryStateTypes, RootStateTypes> = {
  state,
  getters,
  mutations,
  actions
};
