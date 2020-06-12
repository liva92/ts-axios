<template>
  <div class="searchWrap">
    <div class="content">
      <div class="tt-search" ref="ttSearch">
        <!-- 搜索框 -->
        <form class="tt-search-form" action="#">
          <div class="tt-search-input-wrap">
            <i class="fa fa-search tt-search-icon"></i>
            <input
              type="text"
              class="tt-search-input"
              placeholder="搜索"
              autocomplete="off"
              required
              v-model="inputVal"
              @focus="showSuggestion"
            />
            <i class="fa fa-close tt-search-clear" @click="searchClear"></i>
          </div>
          <span class="tt-search-cancel" @click="cancelSuggestion">取消</span>
        </form>
        <!-- 搜索建议 -->
        <ul class="tt-search-suggest">
          <li class="tt-suggest-item">手机</li>
          <li class="tt-suggest-item">iPhone XS Max</li>
          <li class="tt-suggest-item">华为P40</li>
        </ul>
      </div>
      <p class="content">内容区</p>
    </div>
  </div>
</template>


<script>
import "font-awesome/css/font-awesome.min.css";
import "../public/assets/ui.min.css";

export default {
  name: "search",
  data: function() {
    return {
      inputVal: ""
    };
  },
  methods: {
    showSuggestion() {
      this.$refs.ttSearch.classList.add("on-focus");
    },
    cancelSuggestion() {
      this.$refs.ttSearch.classList.remove("on-focus");
    },
    searchClear() {
      this.inputVal = "";
    }
  }
};
</script>
<style  scoped>
.searchWrap {
  position: relative;
}
.tt-search-cancel {
  cursor: pointer;
}
</style>
