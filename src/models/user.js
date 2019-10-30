import axios from "axios";
import router from "umi/router";

const userinfo = JSON.parse(localStorage.getItem("userinfo")) || {
    token: false, role: "", username: "", balance: 0
};

function login(payload) {
    return (axios.post("/api/umi/api/login", payload).then(res=>{
        return {code: res.data.code, userinfo: res.data.data};
    }));
};

export default {
    namespace: "user",
    state: userinfo,
    effects: {
        *login({payload}, {call, put}) {
            try {
                const { code, userinfo } = yield call(login, payload);
                if (code == 0) {
                    // 登录成功: 缓存用户信息
                    localStorage.setItem("userinfo", JSON.stringify(userinfo));
                    yield put({ type: "init", payload: userinfo });
                    router.push("/");
                } else {
                }
            } catch (error) {}
        }
    },
    reducers: {
        init(state, action) {
            return action.payload;
        }
    }

}