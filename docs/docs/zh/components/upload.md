# Upload

文件上传

## 基本使用

<preview path="../../examples/upload/basic.vue" title="基础使用" description=""></preview>

## API

| 名称        | 描述             | 类型     | 默认值 |
| ----------- | ---------------- | -------- | ------ |
| action      | 请求 URL         | string   | -      |
| multiple    | 是否支持多选上传 | boolean  | false  |
| name        | 上传的文件字段名 | string   | 'file' |
| auto-upload | 是否自动上传     | boolean  | true   |
| on-error    | 文件上传失败回调 | Function |
| on-success  | 文件上传成功回调 | Function |
| on-progress | 文件上传时回调   | Function |
