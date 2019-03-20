const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "client"),
    filename: "bundle.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        use: [
          {
            loader: "babel-loader",
            options: {
              presets:[
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins:[
                '@babel/plugin-proposal-class-properties',
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

}