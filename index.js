var bodyParser = require('body-parser');

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/createOrder", (req, res) => {
    res.json({
        "success": true
    });
    return;
});

app.post("/api/submitTransaction", (req, res) => {
    console.log(req);
    res.json({
        "txHash": "0xac832c61a242f44e93a1b6b011347eeb2a67c75fbc3ad29d2b940da0afb78afd"
    });
    return;
});

const zero = "0x0000000000000000000000000000000000000000";
const PersonA = "0x6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb";
const PersonB = "0x5409ed021d9299bf6814279a6a1411a7e866a631";
const PersonC = "0x5409ed021d9299bf6814279a6a1411a7e866a631";
const productA_address = "0xsdfsi98324jshkdflkjsdkfljsdlkfjslkdfjlla";
const productB_address = "0x98sd734jkhskjdfuy9832jlkhsdfjkhskjfh3jjj";
const productC_address = "0xk9d0ewlksdjflksdjflksuwohjsdlfkjoiwejlsd";

const etherContract_address = "0x98sdjk23jsfd78923hlsdyf98y23oi4hljkshefd"; //this is the 0x ethereum address

let orders = [
    {
        "maker": PersonA,
        "taker": zero,
        "takerTokenAddress": etherContract_address,
        "makerTokenAddress": productA_address,
        "makerTokenAmount": "1",
        "takerTokenAmount": "1",
    },
    {
        "maker": PersonB,
        "taker": zero,
        "takerTokenAddress": etherContract_address,
        "makerTokenAddress": productA_address,
        "makerTokenAmount": "10",
        "takerTokenAmount": "9",
    },
    {
        "maker": PersonB,
        "taker": zero,
        "takerTokenAddress": etherContract_address,
        "makerTokenAddress": productB_address,
        "makerTokenAmount": "1",
        "takerTokenAmount": "2",
    }
];

app.get("/api/tokens", (req, res) => {
    res.json(
        [
            {
                "owner": PersonA,
                "contractAddress": productA_address,
                "name": "A Token",
                "symbol": "A",
                "dateCreated": "1508013730",

            },
            {
                "owner": PersonB,
                "contractAddress": productB_address,
                "name": "B Token",
                "symbol": "B",
                "dateCreated": "1508014970"
            },
            {
                "owner": PersonC,
                "contractAddress": productC_address,
                "name": "C Token",
                "symbol": "C",
                "dateCreated": "1508015037"
            }
        ]);
    return;
});

app.get("/api/orders", (req, res) => {
    console.log(req);
    res.json(orders);
    return;
});

app.post("/api/fillOrder", (req, res) => {
    console.log(req);
    res.json({
        txHash: "0x3c2cd0d777a6becade90082e13a7f0b6884e8c475133379bb522aa0a934f4580"
    });
    return;
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});