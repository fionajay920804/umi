export default {
    publicPath: "/umi-ant-pro/",
    runtimePublicPath: true,
    "proxy": {
        "/api": {
            "target": "http://localhost:1688",
            "changeOrigin": true,
            "pathRewrite": { "^/api" : "" }
        }
    },
    plugins: [
        [
            "umi-plugin-react",
            {
                antd: true,
                dva: true
            }
        ]
    ],
    routes: [
        {path: "/login", component: "./login"},
        {
            path: "/", component: "../layouts", routes: [
                {path: "/", component: "./goods/index"},

                {path: "/goods", component: "./goods/index"},
                {
                    path: "/about",
                    component: "./about",
                    Routes: ["./routes/PrivateRoute.js"]
                },
                {
                    path: "/users",
                    component: "./users/_layout",
                    routes: [
                        {path: "/users/", component: "./users/index"},
                        {path: "/users/:id", component: "./users/$id"}
                    ]
                },
                {
                    component: "./404"
                }]
        },
        {
            component: "./404"
        },

    ]
};
