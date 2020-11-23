<template>
  <div>
    <h1>IVIEWUI</h1>
    <!-- <Card>
      <Row :gutter="16">
        <Col span="3">
          <Input placeholder="Enter something..." style="width: 100%" />
        </Col>
        <Col span="3">
          <Input placeholder="Enter something..." style="width: 100%" />
        </Col>
        <Col span="1">
          <Button type="primary" @click="search">搜索</Button>
        </Col>
        <Col span="2">
          <Button @click="clearSearchData">清除筛选</Button>
        </Col>
        <Col span="2">
          <Button icon="md-add">添加xxx</Button>
        </Col>
      </Row>
    </Card>
    <Card class="margin-top-15">
      <div slot="title">
        <Button type="primary" icon="ios-download-outline" @click="exportData">导出excel</Button>
      </div>
      <Row>
        <Table border ref="selection"
          :loading="loading"
          :columns="columns"
          :data="tableData"
          @on-selection-change="handleSelectionChange">

        </Table>
      </Row>

      <Row class="margin-top-15">
        <Col span="12">
          <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll"
          >全选</Checkbox>
        </Col>
        <Col span="12" style="text-align: right">
          <Page :total="totalCount"
            :page-size="limit"
            @on-page-size-change="changePageSize"
            @on-change="changePage"
            show-elevator
            show-total
            show-sizer
          />
        </Col>
      </Row>
    </Card> -->
  </div>
</template>

<script>
export default {
  name: 'Varhome',
  data () {
    return {
      loading: false,
      columns: [
        {
          type: 'selection',
          width: 50,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      tableData: [],
      totalCount: 0,
      limit: 10,
      page: 1,
      indeterminate: false,
      checkAll: false,
      // 选中的id
      idArr: []
    }
  },
  methods: {
    getVarhomePageData () {
      this.tableData = [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
      this.totalCount = this.tableData.length
    },
    search () {
      this.getVarhomePageData()
    },
    clearSearchData () {

    },
    exportData () {

    },
    // table选中项发生变化时就会触发
    handleSelectionChange (val) {
      if (val.length > 0 && val.length < this.tableData.length) {
        this.indeterminate = true
      } else {
        this.indeterminate = false
      }
      if (val.length === this.tableData.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
      this.idArr = val.map((item) => {
        return item.id
      })
    },
    // 全选的按钮事件
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false
      this.$refs.selection.selectAll(this.checkAll)
    },
    // 页数的改变触发（limit改变）
    changePageSize (num) {
      this.limit = num
    },
    // 页码的改变触发（page改变）
    changePage (num) {
      this.page = num
    }
  },
  created () {
    this.getVarhomePageData()
  }
}
</script>

<style lang="scss" scoped>

</style>
