<script setup lang="ts">
import { LButton, LUpload } from 'lucky-design'

const onSuccess = (res: any) => {}
const onProgress = (ev: ProgressEvent<EventTarget>) => {}

const beforeUpload = (file: File) => {
  return Promise.resolve()
}
</script>

<template>
  <div>
    <div class="container">
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
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          name="file"
          :before-upload="beforeUpload"
          :on-success="onSuccess"
          :on-progress="onProgress"
        >
          <LButton text="上传" type="primary" />
        </LUpload>
      </p>
      <p>
        <LUpload
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          name="file"
          drag
          :before-upload="beforeUpload"
          :on-success="onSuccess"
          :on-progress="onProgress"
        >
          <div class="drag-item">拖拽上传</div>
        </LUpload>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  flex-direction: row;
}
.container .drag-item {
  width: 200px;
  height: 200px;
  border: 1px solid;
}
</style>
