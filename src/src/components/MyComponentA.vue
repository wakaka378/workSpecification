<template>
  <span>我是兄弟组件A，我要向兄弟组件B</span>

  <button type="button" @click="send">发送</button>
</template>

<script setup lang="ts">
import userGetGlobalProperties from '../hooks/userBus'
const { $bus } = userGetGlobalProperties()

function send() {
  $bus?.emit('onSendName', 'inkun')
  // $bus?.on()
}
</script>

<style scoped></style>
