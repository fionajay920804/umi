import axios from "axios";

// api
function getGoods() {
  return axios.get("api/umi/api/list");
}

export default {
  namespace: "goods",
  state: {
    courses: {},
    tags: [] // classes
  },
  effects: {
    *getList(action, { call, put }) {
      const res = yield call(getGoods);
      yield put({ type: "initGoods", payload: res.data.result});
    }
  },
  reducers: {
    initGoods(state, { payload }) {
      const { tags, data: courses } = payload;
      return { ...state, tags, courses };
    },
    addGood(state, action) {
      console.log(action);
      return [...state, { title: action.payload.title }];
    }
  }
};
