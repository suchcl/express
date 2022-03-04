const express = require("express");
const app = express();

app.all("*", function (req, res, next) {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", req.get("Origin"))
    res.setHeader("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE, PUT')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since")
    next();
})

// 跨域设置
app.get("/", function (req, res) {
    let id = req.query.id;
    console.log(typeof id);
    console.log(id);
    let user = [];
    if (id === "1") {
        user = [
            {
                id: 1,
                name: "hanmeimei",
                gender: "女"
            },
            {
                id: 2,
                name: "Nicholas Zakas",
                gender: "男"
            }
        ];
    } else {
        user = [
            {
                id: 3,
                name: "拜登",
                gender: "female"
            },
            {
                id: 4,
                name: "特朗普",
                gender: "无"
            }
        ];
    }
    setTimeout(() => {
        console.log(user);
        res.statusCode = 200;
        res.send(user);
    }, 4000);

});


app.listen(3000, function (err) {
    if (err) {
        return;
    }
    console.log("server is running....");
});