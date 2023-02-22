<script setup lang="ts">
import { ref } from 'vue'
import { LButton, LToolTip } from 'lucky-design'

const visibel = ref(true)
const onclick = () => {
  visibel.value = !visibel.value
}
</script>

<template>
  <div>
    <div class="container">
      <p>
        <LToolTip content="撒旦阿斯顿撒旦阿斯" placement="bottom">
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
      <p>
        <LToolTip
          v-model:visible="visibel"
          content="阿斯顿撒旦"
          placement="right"
        >
          <LButton text="测试" type="primary" />
        </LToolTip>

        <LButton text="切换" @click="onclick" />
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
