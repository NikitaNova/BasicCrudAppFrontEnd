const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
     entry: {
          homepage:'./src/1Homepage/index.js',
          accountPage:'./src/2AccountPage/index.js',
          accountSettings:'./src/3AccountSettings/index.js'
     },

     output: {
          path:path.join(__dirname, "dist/"),
          filename: "[name].bundle.js"
     },
     devServer: {
          contentBase:'./dist'
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
                              name:"[name].[ext]",
                              outputPath: "imgs"
                         }
                    }
                    
               }
          ]
     },
     plugins:[
          new HtmlWebpackPlugin({
               filename: "homepage.html",
               template: "./src/1Homepage/homepage.html",
               chunks: ['homepage']
          }),
         new HtmlWebpackPlugin({
              filename: "accountPage.html",
              template: "./src/2AccountPage/accountPage.html",
              chunks: ['accountPage']
         }),
         new HtmlWebpackPlugin({
              filename: "accountSettings.html",
              template: "./src/3AccountSettings/accountSettings.html",
              chunks: ['accountSettings']
         })
     ]
}
