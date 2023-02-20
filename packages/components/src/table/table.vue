<script  setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import type { Sort, TableColumn } from './props'
import { tableProps } from './props'
const { columns, rows, defaultSort, striped, visible } = defineProps(tableProps)
const emit = defineEmits(['update:defaultSort', 'sort'])
const search = ref('')
const sort = ref('asc')
// const rowdata = reactive({
//   columns: [
//     {
//       label: 'id',
//       prop: 'id',
//     },
//     {
//       label: '名字',
//       prop: 'name',
//     }],
//   rows: [1, 2, 234, 4, 5,
//   // {
//   //   id: 1,
//   //   name: '鸡太美',
//   // },
//   // {
//   //   id: 2,
//   //   name: '鸡太美2',
//   // },
//   // {
//   //   id: 3,
//   //   name: '鸡太美3',
//   // },
//   // {
//   //   id: 4,
//   //   name: '鸡太美4',
//   // },
//   // {
//   //   id: 5,
//   //   name: 'asf',
//   // },
//   // {
//   //   id: 6,
//   //   name: 'Tom',
//   // }
//   ],
// },
// )
// watch(
//   () => tableProps.defaultSort,
//   (newVal) => {
//     if (newVal !== sort.value)
//       sort.value = newVal
//   },
// )
// const handleSort = (column: TableColumn) => {
//   const newSort = { column, order: 'asc' }
//   if (sort.value?.column === column)
//     newSort.order = sort.value.order === 'asc' ? 'desc' : 'asc'

//   sort.value = newSort
//   emit('update:defaultSort', sort.value)
//   emit('sort', sort.value)
// }
const handleSort = (sort) => {
  let newSort = ''
  // if (sort.order === )
  newSort = defaultSort === 'asc' ? 'desc' : 'asc'
  // console.log(newSort);
  // sort = newSort
  emit('update:defaultSort', defaultSort)
  emit('sort', defaultSort)
}
// const filteredRows = computed(() => {
//   let result = tableProps.rows.slice()
//   if (search.value) {
//     const searchRegex = new RegExp(search.value, 'i')
//     result = result.filter(row =>
//       Object.values(row).some(val => searchRegex.test(String(val))),
//     )
//   }
//   if (sort.value) {
//     result.sort((row1, row2) => {
//       const order = sort.value.order === 'asc' ? 1 : -1
//       const value1 = row1[sort.value.column.prop]
//       const value2 = row2[sort.value.column.prop]
//       if (value1 < value2)
//         return -1 * order

//       else if (value1 > value2)
//         return 1 * order

//       else
//         return 0
//     })
//   }
//   return result
// })
const filteredRows = computed(() => {
  // let result = rowdata.rows.values[0].slice()
  const rowss = []
  // console.log([rows])
  if (rows === undefined) {
    const rowss = [
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
  }
  // var arr = [] //定义数组
  // for (let i in rows) {
  //     result.push(rows[i])
  // }
  let result = rowss.slice(0)
  // result = rows.slice(0)
  if (search.value) {
    const searchRegex = new RegExp(search.value, 'i')
    result = result.filter(row =>
      Object.values(row).some(val => searchRegex.test(String(val))),
    )
  }
  if (sort.value) {
    result.sort((row1, row2) => {
      const order = sort.value === 'asc' ? 1 : -1
      const value1 = row1[order]
      const value2 = row2[order]
      if (value1 < value2)
        return -1 * order

      else if (value1 > value2)
        return 1 * order

      else
        return 0
    })
  }
  return result
})
const sortIonClass = (sort) => {
  if (sort === 'asc')
    return `${sort === 'asc' ? '↑' : '↓'}`

  else
    return '-'
}
</script>

<template>
  <table class="ltable" :striped="true" :class="visible">
    <thead>
      <tr>
        <th
          v-for="(column) in columns"
          :key="column.label"
        >
          {{ column.label }}  <span @click="handleSort('asc')">{{ sortIonClass(column) }}</span>
          <!-- <sapn class="ltable__caret-wrapper"> -->
          <!-- </sapn> -->
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in filteredRows" :key="index" :class="{ 'ltabel--striped': striped && index % 2 !== 0 }">
        <td v-for="(column, index1) in columns" :key="index1">
          {{ row[column.prop] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.ltable {
  border-collapse: collapse;
  width: 100%;
}

.ltable th {
  background-color: #f5f7fa;
  color: #303133;
  cursor: pointer;
  font-weight: 400;
  line-height: 20px;
  padding: 12px 15px;
  text-align: left;
  user-select: none;
}

.ltable th:hover {
  background-color: #eef1f6;
}

.ltable td {
  border-bottom: 1px solid #ebeef5;
  color: #606266;
  padding: 12px 15px;
  text-align: left;
  vertical-align: top;
}

.ltable td:last-child {
  border-right: none;
}

.ltable tr:hover td {
  background-color: #f5f7fa;
}

.ltable__caret-wrapper {
  display: inline-block;
  margin: 0 4px;
  position: relative;
  top: -1px;
  vertical-align: middle;
  width: 0;
}

.licon-arrow-up,
.licon-arrow-down {
  color: #c0c4cc;
  font-size: 12px;
}

.licon-arrow-up:before {
  content: '\\e6d5';
}

.licon-arrow-down:before {
  content: '\\e6d3';
}

.ltable--striped tbody tr:nth-child(2n) {
  background-color: #f9fafc;
}

.ltable--striped tbody tr:hover {
  background-color: #f5f7fa;
}
/* .ltabel--striped */
</style>
