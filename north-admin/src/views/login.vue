<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:31:01
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-31 16:34:32
 * @FilePath: \north\north-admin\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: north 2445951561@qq.com
 * @Date: 2023-03-28 14:31:01
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-29 14:46:06
 * @FilePath: \north\north-admin\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormInst, FormRules } from 'naive-ui'
import { ILogin } from '@/interfaces/store/user'
import useStore from '@/store/index'
import { useRouter } from 'vue-router'
const router = useRouter()
const { userStore } = useStore()
const formRef = ref<FormInst | null>(null)
const formData:ILogin = reactive({
  username:'',
  password:'',
})
const rules:FormRules  = {
  username: [
  {
    required:true,
    message:'请输入账号',
    trigger:'blur'
  }
  ],
  password: [
  {
    required:true,
    message:'请输入密码',
    trigger:'blur'
  }
]
}
function handleLogin(e: MouseEvent){
  e.preventDefault()
  console.log(formRef.value)
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log('formData', formData)
      userStore().Login(formData).then((response :any) => {
        console.log('response',response)
        window.$message.success(response.message)
        console.log('uid',userStore().uid)
        router.replace('/')
      }).catch((response) => {
        window.$message.error(response.message)
      })
    } else {
      window.$message.error('验证不通过')
    }
  })
}
</script>

<template>
  <div class="w-full h-full bg-indigo-400 flex flex-col justify-center items-center">
    <div class="lg:w-1/2 lg:h-3/5 bg-white rounded-xl shadow-xl p-6 flex flex-col justify-center items-center w-5/6 h-1/2">
      <h1 class="w-full text-center text-2xl text-black tracking-widest	">登陆</h1>
      <n-form
        class="my-6 lg:w-1/2 w-5/6" 
        ref="formRef"
        :model="formData"
        :rules="rules"
        size="large"
        label-placement="left"
        show-require-mark
        >
        <n-form-item label="账号" path="username" class="w-full">
          <n-input v-model:value="formData.username" @keyup.enter.native="handleLogin" placeholder="输入账号" />
        </n-form-item>
        <n-form-item label="密码" path="password" class="w-full">
          <n-input v-model:value="formData.password" @keyup.enter.native="handleLogin"  show-password-on="mousedown" type="password" placeholder="输入密码" />
        </n-form-item>
        <n-form-item class="w-full">
            <n-button attr-type="button" @click="handleLogin" class="mx-auto w-full">
            登&nbsp;陆
            </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .my-container{
    width: 100%;
    height: 100%;
    background-color: #7fffd4;
  }
</style>