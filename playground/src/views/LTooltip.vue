<script setup lang="ts">
import { LButton, LToolTip } from 'lucky-design'

const onSuccess = (res: any) => {
  // console.log(res)
}
const onProgress = (ev: ProgressEvent<XMLHttpRequestEventTarget>) => {
  // console.log(ev)
}

const beforeUpload = (file: File) => {
  // console.log(file)
  return Promise.resolve()
}
</script>

<template>
  <div>
    <div class="container">
      <p>
        <LToolTip content="阿斯顿撒旦" placement="bottom">
          <LButton text="测试" type="primary" />
        </LToolTip>
      </p>
      <p>
        <LToolTip content="阿斯顿撒旦" placement="top">
          <LButton text="测试" type="primary" />
        </LToolTip>
      </p>
      <p>
        <LToolTip content="阿斯顿撒旦" placement="left">
          <LButton text="测试" type="primary" />
        </LToolTip>
      </p>
      <p>
        <LToolTip content="阿斯顿撒旦" placement="right">
          <LButton text="测试" type="primary" />
        </LToolTip>
      </p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  flex-direction: row;
}
</style>
