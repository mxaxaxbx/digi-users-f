import { GetterTree } from 'vuex';

import { decode } from '@/utils/custom-enc-dec';

import {
  ProjectStateI,
} from './state';
import { RootStateI } from '../state';

export const getters: GetterTree<ProjectStateI, RootStateI> = {
};
