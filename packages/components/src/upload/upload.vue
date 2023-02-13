<script setup lang="ts">
import { shallowReactive, shallowRef } from 'vue'
import { httpRequest } from './ajax'
import type { UploadRequestOptions } from './ajax'

const props = withDefaults(
  defineProps<{
    action: string
    data?: { [k: string]: string | Blob }
    method?: string
    autoUpload?: boolean
    name?: string
    multiple?: boolean
    accept?: string
    withCredentials?: boolean
    disabled?: boolean
    beforeUpload?: (file: File) => Promise<any>
    onProgress?: (et: ProgressEvent<XMLHttpRequestEventTarget>) => void
    onSuccess?: (res: any) => void
    onError?: (
      actions: string,
      options: UploadRequestOptions,
      xhr: XMLHttpRequest
    ) => void
  }>(),
  {
    method: 'post',
    name: 'file',
    autoUpload: true,
    withCredentials: false,
    disabled: false,
    multiple: false,
  },
)

const inCompleteFiles = shallowRef<File[]>([])
const completeFiles = shallowReactive<File[]>([])
const requests = shallowReactive<XMLHttpRequest[]>([])
const inputRef = shallowRef<HTMLInputElement>()
const upload = (file: File) => {
  const {
    action,
    method,
    data,
    withCredentials,
    name: filename,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
  } = props

  const options: UploadRequestOptions = {
    action,
    method,
    data,
    withCredentials,
    file,
    filename,
    onProgress,
    onError,
    onSuccess: (res) => {
      completeFiles.push(file)
      inCompleteFiles.value = inCompleteFiles.value.filter(v => v !== file)
      onSuccess && onSuccess(res)
    },
  }

  if (beforeUpload) {
    beforeUpload(file)
      .then(() => {
        const xhr = httpRequest(options)
        requests.push(xhr)
      })
      .catch(() => {})
  }
  else {
    const xhr = httpRequest(options)
    requests.push(xhr)
  }
}
const uploadFiles = (files: File[]) => {
  if (!files.length)
    return

  for (const file of files) {
    inCompleteFiles.value.push(file)
    if (props.autoUpload)
      upload(file)
  }
}
const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files)
    return
  uploadFiles(Array.from(files))
}

const handleClick = () => {
  if (!props.disabled)
    inputRef.value?.click()
}

const abort = () => {
  for (const xhr of requests) xhr.abort()
}

defineExpose({
  abort,
  upload,
  inCompleteFiles,
})
</script>

<template>
  <div class="ld-upload" @click="handleClick">
    <slot />
    <input
      ref="inputRef"
      class="ld-upload_input"
      :name="name"
      :disabled="disabled"
      :multiple="multiple"
      type="file"
      @change="handleChange"
      @click.stop
    >
  </div>
</template>
