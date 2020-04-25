let USProxyKing = require('../index');
USProxyKing.getProxies().then(res => {
    for (let i = 0; i < res.length; i++) {
        if (res[i].anonymity === "anonymous") {
            console.log(res[i]);
            break;
        }
    }
})