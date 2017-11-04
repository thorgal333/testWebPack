const path = require('path');

 module.exports = {
   
     entry: './src/js2.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'app.bundle.js'
     },
     module: {
        
                loaders: [{
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
        
                },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, 
                    loader: 'file-loader' }
            ]
        
            }
 };