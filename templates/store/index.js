const { isKebabCase } = require('../utils')

module.exports = {
  description: '生成store',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'store模块的名称',
    validate: isKebabCase
  }],
  actions: [ {
    type: 'add',
    path: 'src/store/module/{{name}}.js',
    templateFile: 'templates/store/index.hbs'
  }]
}
