module.exports = {
    publicPath: '/',
    devServer: {
        host: '0.0.0.0',
        port: '3000',
        open: true,
        proxy: {
            "/api": {
                target: 'https://x.dscmall.cn/api/',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    }
}