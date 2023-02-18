<script setup lang="ts">
import { reactive } from 'vue'
import { LTable } from 'lucky-design'
const c = [
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
const state = reactive({
  columns: [
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
  ],
  rows: [
    {
      name: '鸡太美',
      id: 39,
      key: '1',
      reload: 3,
    },
    {
      name: '鸡太美2',
      id: 40,
      key: '2',
      reload: 3,
    },
  ],
})
const { columns } = state.columns
const { rows } = state.rows

const test1 = (record: Object) => {
//   console.log(state.columns)
}
</script>

<template>
  <div class="container">
    why？？？
    <LTable :columns="c" :rows="rows">
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
