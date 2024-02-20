import { actionTypes, createComponentReducer } from '@/shared/base';

interface State {
  loading: boolean;
  articles: any[];
}

const initialState: State = {
  articles: [],
  loading: true,
};

const actionHandlers = {};

const reducer = createComponentReducer<State>(
  actionTypes.HOME_COMPONENT,
  initialState,
  actionHandlers,
);

export { reducer };
