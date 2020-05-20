const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
     entry: './src/AccountPage/index.js',
     output: {
          path:path.join(__dirname, "dist"),
          filename: "index_bundle.js"
     },
     module: {
          rules:[
               {
                    test:/\.js$/,
                    exclude: /node_modules/,
                    use: {
                         loader: 'babel-loader'
                    }
               },
               {
                    test:/\.s[ac]ss$/i,
                    use:[
                         'style-loader',
                         'css-loader',
                         'sass-loader'
                    ]
               },
               {
                    test:/\.(svg|png|jpe?g|gif)$/,
                    exclude: /node_modules/,
                    use:{ 
                         loader: 'file-loader',
                         options: {
                              name:"[name].[hash].[ext]",
                              outputPath: "imgs"
                         }
                    }
                    
               }
               

          ]
     },
     plugins:[
          new HtmlWebpackPlugin({
               template:"./src/AccountPage/accountPage.html"
          })
     ]
}
