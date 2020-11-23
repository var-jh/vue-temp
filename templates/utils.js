/**
 * @param {String} value
 * @returns {Boolean}
 * @description 判断命名是否是以短横线隔开式(kebab-case) 或者全小写命名
 */
function isKebabCase (value) {
  if (/^[a-z]+$/.test(value) || /^[a-z]+-[a-z]+$/.test(value)) return true
  return '短横线隔开式命名(kebab-case) 或者全小写'
}

module.exports = {
  isKebabCase

}
