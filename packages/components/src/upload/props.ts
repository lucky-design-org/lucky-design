import type { MethodType } from './types'
import type { UploadRequestOptions } from './ajax'

export interface IUploadProps {
  action: string
  data?: { [k: string]: string | Blob }
  method?: MethodType
  name?: string
  multiple?: boolean
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
}
