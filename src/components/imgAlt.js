const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Конфигурация Webpack
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Путь к HTML-файлу
      filename: 'index.html', // Название выходного HTML-файла
      inject: 'body', // Место вставки тега script
      hash: true, // Добавить хеш в название выходного файла
      minify: true, // Минифицировать HTML-код
      // Функция, которая будет вызвана для каждого тега <img>
      // и которая должна возвращать значение для атрибута alt
      // В этом примере мы просто возвращаем значение "Изображение"
      // для всех тегов <img>
      imgAlt: () => 'Изображение'
    })
  ]
}