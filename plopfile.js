const viewTableGenerator = require('./templates/view-table/index')
const viewGenerator = require('./templates/view/index')
const ComponentGenerator = require('./templates/component/index')
const StoreGenerator = require('./templates/store/index')
const FomGenerator = require('./templates/form/index')


module.exports = function (plop) {
  plop.setGenerator('view-table', viewTableGenerator)
  plop.setGenerator('form', FomGenerator)
  plop.setGenerator('views', viewGenerator)
  plop.setGenerator('component', ComponentGenerator)
  plop.setGenerator('store', StoreGenerator)
}
