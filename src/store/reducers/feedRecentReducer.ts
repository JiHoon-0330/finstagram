import { createReducer, ActionType } from "typesafe-actions";

import * as actions from "store/actions";

type State = {
  data: any;
  isFetching: boolean;
  error: any;
};

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export type Action = ActionType<typeof actions>;

export default createReducer<State, Action>(initialState, {
  FEED_RECENT_REQUEST: (state) => ({
    ...state,
    isFetching: true,
    error: null,
  }),
  FEED_RECENT_SUCCESS: (state, action) => ({
    data: action.payload,
    isFetching: false,
    error: null,
  }),
  FEED_RECENT_FAIL: (state, action) => ({
    ...state,
    error: action.payload,
    isFetching: false,
  }),
});
