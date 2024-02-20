import { all } from 'typed-redux-saga';

import sharedSagas from '@/shared/sagas';
import homeComponentSagas from '@/screens/Home/sagas';

export default function* rootSaga(): Generator {
  yield* all([sharedSagas(), homeComponentSagas()]);
}
