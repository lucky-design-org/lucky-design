#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/components/src/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi

NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/style.scss <<EOF
.ld-$NAME {

}
EOF

cat > $DIRNAME/props.ts <<EOF
import type { ExtractPropTypes } from 'vue'

export const ${NAME}Props = {

}

export type L${NAME}Props = ExtractPropTypes<typeof ${NAME}Props>
EOF

cat > $DIRNAME/$INPUT_NAME.vue <<EOF
<script setup lang="ts">
import { ${NAME}Props } from './props'

const {  } = defineProps(${NAME}Props)
</script>

<template>
  <div class="ld-${NAME}">
    <slot />
  </div>
</template>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from '@lucky-design/common'
import $NAME from './$INPUT_NAME.vue'
import './style.scss'

export const L$NAME = withInstall($NAME, 'L$NAME')

export default L$NAME

export * from './props'
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.test.tsx <<EOF
import { describe, expect, it } from 'vitest'

describe('${NAME}.vue', () => {
  it('hello world', () => {
    expect(1).toBe(1)
  })
})
EOF

cat > docs/docs/components/$INPUT_NAME.md <<EOF
# $INPUT_NAME
EOF

cat > docs/docs/zh-CN/components/$INPUT_NAME.md <<EOF
# $INPUT_NAME
EOF

cat > playground/src/views//$INPUT_NAME.md <<EOF
# $INPUT_NAME
<script setup lang="ts">
import { L$INPUT_NAME } from 'lucky-design'
</script>

<template>
  <div class="container">
    <L$INPUT_NAME />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
}
</style>

EOF
