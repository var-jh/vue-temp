const { isKebabCase } = require('../utils')

module.exports = {
  description: '生成Form表单页面',
  prompts: [{
    type: 'input',
    name: 'modulename',
    message: '你要加入的模块',
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
    templateFile: 'templates/form/form.hbs'
  }, {
    type: 'add',
    path: 'src/view/{{modulename}}/{{name}}/index.js',
    templateFile: 'templates/form/index.hbs'
  }]
}
