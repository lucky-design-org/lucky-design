<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { tableProps } from './props'
interface TableColumn {
  label: string
  prop: string
}

interface TableRow {
  id: number
  [key: string]: string | number
}

export default defineComponent({
  name: 'ElTable',
  props: {
    columns: {
      type: Array as () => TableColumn[],
      required: true,
    },
    rows: {
      type: Array as () => TableRow[],
      required: true,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    defaultSort: {
      type: Object,
      default: null,
    },
    tableClass: {
      type: String,
      default: '',
    },
  },
  emits: ['update:defaultSort', 'sort'],
  setup(props, { emit }) {
    const search = ref('')
    const sort = ref(props.defaultSort)

    function handleSort(column) {
      const newSort = { column, order: 'asc' }
      if (sort.value?.column === column)
        newSort.order = sort.value.order === 'asc' ? 'desc' : 'asc'

      sort.value = newSort
      emit('update:defaultSort', sort.value)
      emit('sort', sort.value)
    }

    const filteredRows = computed(() => {
    //   let result = props.rows.slice()
      let result = props.rows
      if (search.value) {
        const searchRegex = new RegExp(search.value, 'i')
        result = result.filter(row =>
          Object.values(row).some(val => searchRegex.test(String(val))),
        )
      }
      if (sort.value) {
        result.sort((row1, row2) => {
          const order = sort.value.order === 'asc' ? 1 : -1
          const value1 = row1[sort.value.column.prop]
          const value2 = row2[sort.value.column.prop]
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

    function sortIconClass(column) {
      if (sort.value?.column === column)
        return sort.value.order === 'asc' ? '↑' : '↓'
    }

    watch(
      () => props.defaultSort,
      (newVal) => {
        if (newVal !== sort.value)
          sort.value = newVal
      },
    )

    return { search, sort, filteredRows, handleSort, sortIconClass }
  },
  methods: {
    // sortIconClass(column: TableColumn) {
    //   if (this.sort?.column === column)
    //     return `el-icon-arrow-${this.sort.order === 'asc' ? 'up' : 'down'}`

    //   else
    //     return this.striped ? 'el-icon-sort' : ''
    // },
  },
})
</script>

<template>
  <table class="ltable" :class="tableClass">
    <thead>
      <tr>
        <!-- v-for="(column, index) in columns" -->
        <th
          v-for="(column) in columns"
          :key="column.label"
          @click="handleSort(columns)"
        >
          {{ column.label }}
          <span class="ltable__caret-wrapper">
            <i :class="sortIconClass(columns)" />
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in filteredRows" :key="row.id">
        <td v-for="column in columns" :key="column.label">
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
</style>
