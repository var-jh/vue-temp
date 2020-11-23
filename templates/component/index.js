const { isKebabCase } = require('../utils')

module.exports = {
  description: '生成组件',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '生成组件名称',
    validate: isKebabCase
  }],
  actions: [{
    type: 'add',
    path: 'src/components/{{name}}/{{name}}.vue',
    templateFile: 'templates/view-table/view.hbs'
  }, {
    type: 'add',
    path: 'src/components/{{name}}/index.js',
    templateFile: 'templates/view-table/index.hbs'
  }]
}
