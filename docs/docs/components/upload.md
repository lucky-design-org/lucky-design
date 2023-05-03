# Upload

## Basic usage

<preview path="../examples/upload/basic.vue" title="Basic usage" description=""></preview>

## API

| Name        | Description                           | Type     | Default |
| ----------- | ------------------------------------- | -------- | ------- |
| action      | request URL                           | string   | -       |
| multiple    | Whether multiple upload is supported  | boolean  | false   |
| name        | Field name of the file to be uploaded | string   | 'file'  |
| auto-upload | Whether to upload automatically       | boolean  | true    |
| on-error    | File upload failure callback          | Function |
| on-success  | File upload success callback          | Function |
| on-progress | File upload callback                  | Function |
