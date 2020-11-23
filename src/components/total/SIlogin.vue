<template>
  <div class="Lg">
    <!-- login -->
    <Pager :total="total" :display="display" :current="current" @pagechange="pagechange"></Pager>
  </div>
</template>

<script>
import Pager from "@/pages/SI/SiDetails";
export default {
  data() {
    return {
        total: 200, //总条
        display: 9,//展示条数
        current: 1, //停留处
    };
  },
  components: {
    Pager: Pager
  },
 methods: {
		pagechange(idx){
			console.log(idx)
		}
	}
};
</script>


<style scoped lang='less'>

</style>