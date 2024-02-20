import { combineReducers, Reducer } from 'redux';

import { homeReducer } from '@/screens/Home/reducers';

interface RootState {
  home: any;
}

const siteReducer: Reducer<RootState> = combineReducers({
  home: homeReducer,
});

export default siteReducer;
