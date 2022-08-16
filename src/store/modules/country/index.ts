import type { Module } from 'vuex';
import type { RootStateTypes } from '../../types';
import type { CountryStateTypes } from './types';
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
