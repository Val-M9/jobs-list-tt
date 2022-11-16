import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../common/types';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
