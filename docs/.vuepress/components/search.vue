<template>
  <div class="searchWrap">
    <div class="content">
    <h1 class="tt-panel-title">搜索框：</h1>

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
              @focus="showSuggestion"
            />
            <i class="fa fa-close tt-search-clear"></i>
          </div>
          <span class="tt-search-cancel" @click="cancelSuggestion">取消</span>
        </form>
        <!-- 搜索建议 -->
        <ul class="tt-search-suggest">
          <li class="tt-suggest-item">手机</li>
          <li class="tt-suggest-item">iPhone XS Max</li>
          <li class="tt-suggest-item">华为P30</li>
          <li class="tt-suggest-item">小米 MIX3</li>
          <li class="tt-suggest-item">诺基亚1110</li>
        </ul>
      </div>
      <p class="content">内容区</p>
      <p class="content">内容区</p>
      <p class="content">内容区</p>
      <p class="content">内容区</p>
    </div>
  </div>
</template>


<script>
import "font-awesome/css/font-awesome.min.css";
import "../public/assets/ui.min.css";

export default {
  name: "search",
  methods: {
    showSuggestion() {
      this.$refs.ttSearch.classList.add("on-focus");
    },
    cancelSuggestion() {
      this.$refs.ttSearch.classList.remove("on-focus");
    }
  }
};
</script>
<style  scoped>
.searchWrap {
  position: relative;
  top: 20%;
  padding-top: 40px;
}
.tt-search-cancel {
  cursor: pointer;
}
</style>
