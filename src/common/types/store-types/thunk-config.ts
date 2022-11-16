import { AppDispatch } from './app-dispatch';
import { AppState } from './app-state';

export type ThunkConfig = {
  state: AppState;
  dispatch: AppDispatch;
};
