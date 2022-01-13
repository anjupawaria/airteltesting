const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/v1',
        createProxyMiddleware({
            target: 'https://qaoptimus.airtel.com',
            // pathRewrite: {
            //   "^/durgesh": "",
            // },
            changeOrigin: true,
            secure: false,
            logLevel: "debug",

        })
    );
    // app.use(
    //     '/bill-manager',
    //     createProxyMiddleware({
    //         target: 'http://sit.bill.cloudapps.okdstg.india.airtel.itm',
    //         pathRewrite: {
    //             "^/bill-manager": "",
    //         },
    //         changeOrigin: true,
    //         secure: false,
    //         logLevel: "debug",

    //     })
    // );
    // app.use(
    //     '/auth-manager',
    //     createProxyMiddleware({
    //         target: 'http://sit.auth.cloudapps.okdstg.india.airtel.itm',
    //         pathRewrite: {
    //             "^/auth-manager": "",
    //         },
    //         changeOrigin: true,
    //         secure: false,
    //         logLevel: "debug",

    //     })
    // );
    app.use(
        '/services',
        createProxyMiddleware({
            target: 'http://10.222.184.238:8000',
            changeOrigin: true,
        })
    );
};