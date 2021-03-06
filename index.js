const express = require("express");
const app = express();

// 跨域设置
app.all("*", function (req, res, next) {
    res.setHeader("Access-Control-Allow-Credentials", true);
    // res.setHeader("Access-Control-Allow-Origin", req.get("Origin")); // 添加这一行代码，代理配置不成功
    res.setHeader("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since")
    next();
})


app.get("/", function (req, res) {
    let id = req.query.id;
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

app.get("/menu", function (req, res) {
    const menu = [
        {
            id: 1,
            path: '/orderList',
            text: '订单列表',
            icon: "ConsoleSqlOutlined"
        },
        {
            id: 2,
            path: '/report',
            text: '商品管理',
            icon: "CameraOutlined"
        },
        {
            id: 3,
            path: '/service',
            text: '客服',
            icon: "CustomerServiceOutlined"
        },
        {
            id: 4,
            path: "/chanel",
            text: "渠道管理",
            icon: "DollarCircleOutlined",
            children: [
                {
                    id: 5,
                    path: "/chanel/supplier",
                    text: "供应商管理",
                    icon: "ProjectOutlined"
                },
                {
                    id: 6,
                    path: "/chanel/contract",
                    text: "合同管理",
                    icon: "MacCommandOutlined",
                    children: [
                        {
                            id: 8,
                            path: '/chanel/contract/deal',
                            text: "交易合同",
                            icon: "MoneyCollectOutlined"
                        },
                        {
                            id: 9,
                            path: "/chanel/contract/mortgage",
                            text: "抵押合同",
                            icon: "MehOutlined"
                        },
                        {
                            id: 10,
                            path: "/chanel/contract/lease",
                            text: "租赁合同",
                            icon: "CiCircleOutlined"
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            path: "/customer",
            text: "客户管理",
            icon: "CommentOutlined"
        },
        {
            id: 11,
            path: "/commodity",
            text: "商品管理",
            icon: "RobotOutlined",
            children: [
                {
                    id: 12,
                    path: "/commodity/mechanical",
                    text: "机械商品",
                    icon: "CarOutlined"
                },
                {
                    id: 13,
                    path: "/commodity/office",
                    text: "办公用品",
                    icon: "DesktopOutlined"
                }
            ]
        }
    ];
    const data = {
        code: 200,
        defaultOpenKey: ['/commodity'],
        msg: "获取成功",
        data: menu
    };
    res.send(data);
});


app.get("/getUser", function (req, res) {
    const user = [
        {
            id: 1,
            name: "Nicholas Zakas",
            gender: "male"
        },
        {
            id: 2,
            name: "Hanmeimei",
            gender: "female"
        }
    ];
    res.send(user);
});

app.listen(3000, function (err) {
    if (err) {
        return;
    }
    console.log("server is running at 3000");
});