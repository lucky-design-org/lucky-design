export interface UploadRequestOptions {
  action: string
  method: string
  file: File
  data?: { [k: string]: string | Blob }
  filename: string
  withCredentials: boolean
  onProgress?: (et: ProgressEvent<EventTarget>) => void
  onSuccess: (res: any) => void
  onError?: (
    actions: string,
    options: UploadRequestOptions,
    xhr: XMLHttpRequest
  ) => void
}

const getResponce = (xhr: XMLHttpRequest) => {
  const text = xhr.responseText || xhr.response

  try {
    return JSON.parse(text)
  }
  catch (error) {
    return text
  }
}

export const httpRequest = (options: UploadRequestOptions): XMLHttpRequest => {
  if (typeof XMLHttpRequest === 'undefined')
    throw new Error('XMLHttpRequest is undefined')
  const {
    action,
    method,
    file,
    data,
    filename,
    withCredentials,
    onProgress,
    onSuccess,
    onError,
  } = options

  const xhr = new XMLHttpRequest()

  const formData = new FormData()

  if (data) {
    for (const key in data)
      formData.append(key, data[key])
  }

  xhr.open(method, action, true)

  if (onProgress)
    xhr.upload.onprogress = onProgress

  xhr.addEventListener('error', () => {
    onError && onError(action, options, xhr)
  })

  xhr.addEventListener('load', () => {
    onSuccess && onSuccess(getResponce(xhr))
  })

  xhr.withCredentials = withCredentials

  formData.append(filename, file, file.name)

  xhr.send(formData)
  return xhr
}
