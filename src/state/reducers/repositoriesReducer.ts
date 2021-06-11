import {ActionType} from '../action-types'
import {Actions} from '../actions'

interface repoState {
  data: string[],
  loading: boolean,
  error: string | null,
}

const initialState = {
  data: [],
  loading:false,
  error: null
}

const reducer = (state: repoState = initialState, action: Actions): repoState => {
  switch(action.type){
    case ActionType.SEARCH_REPOSITORIES:
      return {loading: true, error: null, data: []}
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {loading: false, error: null, data: action.payload}
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {loading: false, error: action.payload, data: []}
    default:
      return state;
  }
}

export default reducer;