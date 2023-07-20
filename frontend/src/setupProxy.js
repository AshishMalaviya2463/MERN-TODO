const { createProxyMiddleware } = require( 'http-proxy-middleware' );

module.exports = function ( app ) {
    app.use(
        '/api', // Proxy all requests with the '/api' prefix
        createProxyMiddleware( {
            target: 'http://localhost:5000', // Backend URL
            changeOrigin: true,
        } )
    );
};
