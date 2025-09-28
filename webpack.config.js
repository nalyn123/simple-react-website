const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const BASE_URL = "/simple-react-website/";

module.exports = {
  mode: process?.env?.NODE_ENV,
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: process?.env?.NODE_ENV === "development" ? "/" : BASE_URL,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      // "@": path.resolve(__dirname, "./src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[folder]__[local]",
                exportLocalsConvention: "asIs",
              },
              esModule: false,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // publicPath: process?.env?.NODE_ENV === "development" ? "/" : BASE_URL,
    }),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(
        process?.env?.NODE_ENV === "development" ? "/" : BASE_URL
      ),
    }),
  ],
  devServer: {
    static: "./public",
    hot: true,
    historyApiFallback: true,
    devMiddleware: {
      publicPath: "/",
    },
  },
};
