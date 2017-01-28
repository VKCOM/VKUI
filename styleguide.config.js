const path = require('path');

module.exports = {
 title: 'VKUI',
 components: './src/components/**/*.js',
 updateWebpackConfig(webpackConfig) {
   // Your source files folder or array of folders, should not include node_modules
   const dir = path.join(__dirname, 'src');

   webpackConfig.module.loaders.push(
     {
       test: /\.js$/,
       include: dir,
       loader: 'babel'
     },
     {
       test: /\.css$/,
       include: dir,
       loader: 'style!css'
     },
     {
       test: /\.svg$/,
       include: __dirname,
       loader: 'file'
     }
   );
   return webpackConfig;
  },
  serverPort: 4000
};