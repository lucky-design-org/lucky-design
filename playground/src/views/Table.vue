<script setup lang="ts">
import { reactive } from 'vue'
import { LTable } from 'lucky-design'
const c = [
  {
    label: 'id',
    prop: 'id',
  },
  {
    label: '名字',
    prop: 'name',
  },
  {
    label: '年龄',
    prop: 'age',
  },
  {
    label: '性别',
    prop: 'sex',
    //   customRender: true,
  },
  {
    label: '操作',
    prop: 'handle',
    //   customRender: true,
  },
]
const r = [
  {
    id: 1,
    name: '鸡太美',
    age: 39,
    sex: 2,
    handle: 3,
  },
  {
    id: 2,
    name: '鸡太美2',
    age: 40,
    sex: 2,
    handle: 3,
  },
  {
    id: 3,
    name: '鸡太美3',
    age: 40,
    sex: 2,
    handle: 3,
  },
  {
    id: 4,
    name: '鸡太美4',
    age: 40,
    sex: 2,
    handle: 3,
  },
  {
    id: 5,
    name: 'asf',
    age: 40,
    sex: 2,
    handle: 3,
  },
  {
    id: 6,
    name: 'Tom',
    age: 40,
    sex: 2,
    handle: 3,
  },
]

const test1 = (record: Object) => {
//   console.log(state.columns)
}
</script>

<template>
  <div class="container">
    <!-- {{ name }} -->
    <LTable :columns="c" :rows="r" :striped="true">
      <th />
      <td v-for="column in columns" :key="column.field">
        {{ column.prop }}
      </td>
    </LTable>
    <div style="display: flex">
      <LButton type="info" text="按钮" shape="round" @click="test1(record)" />
      <LButton type="primary" text="修改" size="sm" @click="test1(record)" />
      <!-- <y-button type='success' @click="test(record)" style="margin-right:10px">修改</y-button>
      <y-button type='danger' @click="test(record)">删除</y-button> -->
    </div>
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
