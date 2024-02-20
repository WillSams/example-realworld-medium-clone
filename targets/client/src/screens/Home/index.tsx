import React from 'react';
import { Dispatch } from 'redux';

import { RootState } from '@/rootReducer';
import { actionTypes, ConnectComponent } from '@/shared/base';

const HomeComponent: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const screen = ConnectComponent(HomeComponent, {
  componentName: actionTypes.HOME_COMPONENT,
  state: (state: RootState) => state?.site?.home?.articles ?? [],
  load: {},
  dispatch: (dispatch: Dispatch) => ({}),
});

export default screen;
