module.exports = {
  pages: {
    'index': {
      entry: './src/pages/public/main.js',
      template: 'public/index.html',
      title: 'Public',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'admin': {
      entry: './src/pages/admin/main.js',
      template: 'public/index.html',
      title: 'Admin Panel',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    }
  }
}
