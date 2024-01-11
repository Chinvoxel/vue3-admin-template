<template>
  <div class="wrapper">
    <el-card class="login-card" shadow="always">
      <el-image class="img-login" :src="loginImg" fit="contain" />

      <div class="login-form">
        <h2 class="title">
          {{ $t('login.title') }}
        </h2>

        <el-form ref="ruleFormRef" :model="form" :rules="rules" :hide-required-asterisk="true">
          <el-form-item class="mb-6" prop="phone">
            <el-input v-model="form.phone" class="form-input" :placeholder="$t('login.userPhoneRule')">
              <template #prefix>
                <div class="icon">
                  <User style="width: 15px; height: 15px; color: #8aa7ca" />
                </div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              class="form-input"
              type="password"
              show-password
              :placeholder="$t('login.passwordRule')"
            >
              <template #prefix>
                <div class="icon">
                  <Lock style="width: 15px; height: 15px; color: #8aa7ca" />
                </div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item class="btn-group">
            <el-button type="primary" class="btn-submit" @click="handleSubmit(ruleFormRef)">
              {{ $t('login.loginBtn') }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import loginImg from '@imgs/login.png'
import FormValidator from '@/utils/validator'
import { useUserStore } from '@/store/user'

const router = useRouter()
const { t } = useI18n() // 解构出t方法
const store = useUserStore()

const props = defineProps({
  redirect: {
    type: String,
    default: ''
  }
})

const toRoutePath = computed(() => props?.redirect || '/')

const checkPhone = (rule, value, callback) => {
  if (!value.length) {
    callback(new Error(t('login.userPhoneRule')))
  } else {
    if (!FormValidator.isMobile(value)) {
      callback(new Error(t('login.userPhoneValidRule')))
      return
    }
    callback()
  }
}

const rules = ref({
  phone: [{ validator: checkPhone, trigger: 'blur' }],
  password: [{ required: true, max: 20, message: t('login.passwordRule'), trigger: 'blur' }]
})

const ruleFormRef = ref(null)
const form = reactive({
  phone: '',
  password: ''
})

const handleSubmit = formEl => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      store.LoginByPhone(form).then(() => {
        ElMessage.success(t('login.loginSuccessMessage'))
        router.replace({ path: toRoutePath.value })
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: #03a9f4;

  .login-card {
    width: 900px;
    height: 500px;
    border: none;
    border-radius: 15px;

    :deep(.el-card__body) {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 0;
      background-color: #e0edfd;
      overflow: hidden;
    }

    .img-login {
      width: 60%;
    }

    .login-form {
      width: 40%;
      padding: 20px;
      border-radius: 15px;
      background-color: #ffffff;

      .title {
        margin: 40px 0;
        font-weight: bold;
      }

      .mb-6 {
        margin-bottom: 24px;
      }

      .form-input {
        @include autofill(#f5f5f5);
        border-radius: 6px;
        background: #f5f5f5;

        :deep(.el-input__wrapper) {
          padding: 0 8px 0 0;
          height: 36px;
          border-radius: inherit;
          background: inherit;

          .el-input__prefix-inner {
            .icon {
              @include flex(center);
              padding: 4px 4px;
              border-radius: 2px;
              background: #ffffff;
            }

            & > :first-child {
              margin-left: 8px;
            }
          }

          .el-input__inner {
            padding-left: 0;
            background: inherit;
            box-shadow: none;
            border: none;

            &::placeholder {
              font-size: 14px;
            }
          }
        }
      }

      .btn-group {
        text-align: right;
        margin-top: 40px;

        .btn-submit {
          height: 36px;
          width: 100%;
        }
      }
    }
  }
}
</style>
