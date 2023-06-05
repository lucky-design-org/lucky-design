<script setup lang="ts">
import { LButton, LUpload } from 'lucky-design'

const onSuccess = (res: any) => {
  // console.log(res)
}
const onProgress = (ev: ProgressEvent<XMLHttpRequestEventTarget>) => {
  // console.log(ev)
}

const beforeUpload = (file: File) => {
  return Promise.resolve()
}
</script>

<template>
  <div class="container">
    <div>
      <p>
        <LUpload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          name="file"
          :on-success="onSuccess"
          :on-progress="onProgress"
        >
          <LButton text="上传" type="primary" />
        </LUpload>
      </p>
      <p>
        <LUpload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          name="file"
          :multiple="true"
          :on-success="onSuccess"
          :on-progress="onProgress"
        >
          <LButton text="上传" type="primary" />
        </LUpload>
      </p>
      <p>
        <LUpload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          name="file"
          :before-upload="beforeUpload"
          :on-success="onSuccess"
          :on-progress="onProgress"
        >
          <LButton text="上传" type="primary" />
        </LUpload>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  gap: 20px;
  padding: 20px;
}
</style>
