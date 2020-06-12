<template>
  <div>
    <div class="tt-content">
      <h1 class="tt-panel-title">ActionSheet弹出式菜单</h1>
      <div class="tt-panel-body">
        <a class="tt-btn" id="js-show" @click="addShow">点击显示弹出式菜单</a>
      </div>
    </div>
    <!-- 底部弹出菜单 -->
    <div class="tt-action-sheet" ref="actionSheetWrap">
      <div class="tt-mask"></div>
      <div class="tt-action-sheet-wrap">
        <div class="tt-action-sheet-header">
          <h1 class="tt-action-sheet-title">你需要做什么操作？</h1>
        </div>
        <div class="tt-action-sheet-body">
          <a class="tt-action-sheet-menu">收藏</a>
          <a class="tt-action-sheet-menu">关注</a>
          <a class="tt-action-sheet-menu">分享给好友</a>
        </div>
        <div class="tt-action-sheet-footer">
          <a class="tt-action-sheet-menu" id="js-close" @click="removeShow">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../public/assets/ui.min.css";

export default {
  name: "actionSheet",
  methods: {
    addShow() {
      this.$refs.actionSheetWrap.classList.add("show");
    },
    removeShow() {
      this.$refs.actionSheetWrap.classList.remove("show");
    }
  }
};
</script>

<style  scoped>
a {
  text-decoration: none !important;
}
</style>