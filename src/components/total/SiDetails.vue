<template>
  <div>
    <ul class="pagination">
      <li :class="{'disabled': (current==1)}">
        <a @click="setCurrent(1)" href="javascript:void(0)">首页</a>
      </li>
      <li :class="{'disabled': (current==1)}">
        <a class="alter" @click="setCurrent(current-1)" href="javascript:void(0)">上一页</a>
      </li>
      <li v-for="(p,index) in grouplist" :key="index" :class="{'active': (current==p.val)}">
        <a @click="setCurrent(p.val)" href="javascript:void(0)">{{ p.txt }}</a>
      </li>
      <li :class="{'disabled': (current==page)}">
        <a class="alter" @click="setCurrent(current+1)" href="javascript:void(0)">下一页</a>
      </li>
      <li :class="{'disabled': (current==page)}">
        <a @click="setCurrent(page)" href="javascript:void(0)">末页</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: this.currentPage
    };
  },
  props: {
    // 数目总条数
    total: {
      type: Number,
      default: 0
    },
    // 每一页显示10条数据
    display: {
      type: Number,
      default: 10
    },
    // 当前处于哪一页
    currentPage: {
      type: Number,
      default: 1
    },
    // 分页数目

    pagegroup: {
      type: Number,
      default: 5
    }
  },

  computed: {
    // 获取总页数
    page() {
      return Math.ceil(this.total / this.display);
    },
    // 获取页码
    grouplist() {
      // 总页数
      let len = this.page,
        count = Math.floor(this.pagegroup / 2),
        center = this.current,
        temp = [],
        list = [];
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({
            txt: this.page - len,
            val: this.page - len
          });
        }

        return temp;
      }
      while (len--) {
        temp.push(this.page - len);
      }
      let idx = temp.indexOf(center);
      idx < count && (center = center + count - idx);
      this.current > this.page - count && (center = this.page - count);
      temp = temp.splice(center - count - 1, this.pagegroup);

      do {
        let t = temp.shift();
        list.push({
          txt: t,
          val: t
        });
      } while (temp.length);

      if (this.page > this.pagegroup) {
        this.current > count + 1 &&
          list.unshift({ txt: "...", val: list[0].val - 3 });
        this.current < this.page - count &&
          list.push({ txt: "...", val: list[list.length - 1].val + 3 });
      }
      return list;
    }
  },
  methods: {
    setCurrent(idx) {
      if (this.current != idx && idx > 0 && idx < this.page + 1) {
        this.current = idx;
        this.$emit("pagechange", this.current);
      }
	},
	
	
  }
};
</script>

<style lang="less" scoped>
.pagination {
  display: inline-block;

  li {
    list-style: none;
    float: left;
    height: 30px;
    border-radius: 5px;
    margin: 3px;
    color: #999;
    background: rgb(240, 242, 245);
    line-height: 30px;
    &:hover {
      background: rgb(25, 137, 250);
      a {
        background: rgb(25, 137, 250);
        color: #fff;
      }
    }
    a {
      display: block;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      border-radius: 5px;
      text-decoration: none;
      color: #999;
    }
    .alter {
      width: 60px;
    }
  }
  .active {
    background: rgb(25, 137, 250);
    a {
      color: #fff;
    }
  }
}
</style>