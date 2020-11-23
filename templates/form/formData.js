module.exports = [
  {
    type: 'input',
    props: {
      type: 'text',
      placeholder: '请输入用户名',
      model: 'user'
    },
    key: 'user',
    label: '用户名',
    rules: [{
      required: true,
      message: '请填写用户名',
      trigger: 'blur'
    }]
  },
  {
    type: 'input',
    props: {
      type: 'password',
      placeholder: '请填写密码',
      model: 'pass'
    },
    key: 'pass',
    label: '用户名',
    rules: [{
      required: true,
      message: '请填写密码',
      trigger: 'blur'
    }]
  },
  {
    type: 'select',
    props: {
      placeholder: '请选择城市',
      model: 'city'
    },
    key: 'city',
    label: '城市',
    name: 'cityList',
    rules: [{
      required: true,
      message: '请选择城市',
      trigger: 'blur'
    }]
  },
  {
    type: 'datePicker',
    props: {
      type: 'date',
      placeholder: '请选择日期',
      model: 'date'
    },
    key: 'date',
    label: '日期',
    rules: [{required: true, type: 'date', message: 'Please select the date', trigger: 'change'}]
  }
]