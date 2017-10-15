var bodyParser = require('body-parser');

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("/api/tokens", (req, res) => {
    res.json(
        [
            {
                "owner": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
                "contractAddress": "0xc519cf37790f58b3444692605382aee7c53bb06e",
                "name": "Verify Token",
                "symbol": "VTX",
                "dateCreated": "1508013730"
            },
            {
                "owner": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
                "contractAddress": "0xaed6aa4340e2a1f71601172627e03d174ddf7c4a",
                "name": "blah",
                "symbol": "S",
                "dateCreated": "1508014970"
            },
            {
                "owner": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
                "contractAddress": "0x5dfc5d64ea0688df89827e3ef044ed936c353efa",
                "name": "blah",
                "symbol": "S",
                "dateCreated": "1508015037"
            }
        ]);
    return;
});

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

var orders = [
    {
        "maker": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
        "taker": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
        "takerTokenAddress": "0x5dfc5d64ea0688df89827e3ef044ed936c353efa",
        "makerTokenAddress": "0x5dfc5d64ea0688df89827e3ef044ed936c353efa",
        "makerTokenAmount": "2",
        "takerTokenAmount": "2",
        "takerFee": "0",
        "makerFee": "0",
        "exchangeContractAddress": "0xb69e673309512a9d726f87304c6984054f87a93b",
        "feeRecipient": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
        "expirationUnixTimestampSec": "1508016431100000",
        "salt": "83249299622462572745539513584134626030319093614134030042068936075717146707649",
        "ecSignature": {
            "v": 27,
            "r": "0x0ca3feeaf1d1c4850da6b25eac91a56df0e06f44a15ae64a2daeecfbd09ee194",
            "s": "0x3c2cd0d777a6becade90082e13a7f0b6884e8c475133379bb522aa0a934f4580"
        }
    },
    {
        "maker": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
        "taker": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
        "takerTokenAddress": "0x5dfc5d64ea0688df89827e3ef044ed936c353efa",
        "makerTokenAddress": "0x5dfc5d64ea0688df89827e3ef044ed936c353efa",
        "makerTokenAmount": "2",
        "takerTokenAmount": "2",
        "takerFee": "0",
        "makerFee": "0",
        "exchangeContractAddress": "0xb69e673309512a9d726f87304c6984054f87a93b",
        "feeRecipient": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
        "expirationUnixTimestampSec": "1508016431100000",
        "salt": "83249299622462572745539513584134626030319093614134030042068936075717146707649",
        "ecSignature": {
            "v": 27,
            "r": "0x0ca3feeaf1d1c4850da6b25eac91a56df0e06f44a15ae64a2daeecfbd09ee194",
            "s": "0x3c2cd0d777a6becade90082e13a7f0b6884e8c475133379bb522aa0a934f4580"
        }
    }
];

app.get("/api/orders", (req, res) => {
    console.log(req);
    res.json();
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