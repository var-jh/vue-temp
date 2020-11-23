const { isKebabCase } = require('../utils')

module.exports = {
  description: '生成页面',
  prompts: [{
    type: 'input',
    name: 'modulename',
    message: '模块的名称',
    validate: isKebabCase
  }, {
    type: 'input',
    name: 'name',
    message: '页面名称',
    validate: isKebabCase
  }],
  actions: [{
    type: 'add',
    path: 'src/view/{{modulename}}/{{name}}/{{name}}.vue',
    templateFile: 'templates/view/view.hbs'
  }, {
    type: 'add',
    path: 'src/view/{{modulename}}/{{name}}/index.js',
    templateFile: 'templates/view/index.hbs'
  }]
}
