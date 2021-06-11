import {combineReducers} from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
})

export default reducers;

//to tell to type script what type is the reducer.
export type RootState = ReturnType<typeof reducers>;