
module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8000,
    proxy: {
      '/api': 'http://localhost:5000'
    },
  },
};
