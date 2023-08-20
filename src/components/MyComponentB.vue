<template>
  <span>我是兄弟组件B，我会接收我兄弟</span>
  <span>我兄弟是{{ userName }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import userGetGlobalProperties from '../hooks/userBus'
let userName = ref('')
const { $bus } = userGetGlobalProperties()
$bus?.on('onSendName', (value) => {
  userName.value = value
  console.log('value', value)
})
</script>

<style scoped></style>
