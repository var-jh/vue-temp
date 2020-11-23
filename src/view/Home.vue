<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div style="padding:20px 100px;">
      <Card :bordered="false">
        <p slot="title">图片裁切</p>
        <Form ref="formInline"
              :model="formInline"
              :rules="ruleInline"
              :label-width="80">
          <FormItem prop="user"
                    label="用户名"
                    style="width:250px">
            <i-Input type="text"
                     v-model="formInline.user"
                     placeholder="Username">
              <Icon type="ios-person-outline"
                    slot="prepend"></Icon>
            </i-Input>
          </FormItem>
          <FormItem prop="password"
                    label="密码"
                    style="width:250px">
            <i-Input type="password"
                     v-model="formInline.password"
                     placeholder="Password">
              <Icon type="ios-lock-outline"
                    slot="prepend"></Icon>
            </i-Input>
          </FormItem>
          <FormItem label="裁切图片">
             <cropper
              :src="exampleImageSrc"
              crop-button-text="确认提交"
              @on-crop="handleCroped"
            ></cropper>

          </FormItem>
          <FormItem>
            <!-- <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button> -->
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cropper from '@/components/copper/copper.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Cropper
  },
  data () {
    return {
      exampleImageSrc:'',
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
     handleCroped (blob) {
      const formData = new FormData()
      formData.append('croppedImg', blob)
      // uploadImg(formData).then(() => {
      //   this.$Message.success('Upload success~')
      // })
    }
  }
}
</script>
