
export default {
    "post /api/login": function(req, res){
        console.log(1111);
        const {username, password} = req.body;
        console.log(username, password);
        console.log(111);
        if (username == "leo" && password == "123") {
            return res.json({
                code: 0,
                data: {token: true, role: "admin", balance: 1000, username: "Leo"}
            });

        }
        if (username == "sandra" && password == "123") {
            return res.json({code: 0, data: {token: true, role: "user", balance: 100, username: "sandra"}});

        }
        return res.json({

            code: -1,

            msg: "invalid password"
        });
    }
};