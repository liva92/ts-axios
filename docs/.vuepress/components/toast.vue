<template>
  <div class="toastWrap">
    <div class="tt-content">
      <h1 class="tt-panel-title">Toast提示组件</h1>
      <div class="tt-panel-body">
        <a class="tt-btn btn-primary" id="js-show-toast-loading" @click="showLoading">加载中提示</a>
        <br />
        <a class="tt-btn btn-primary" id="js-show-toast-success" @click="showSuccess">成功提示</a>
      </div>
    </div>

    <div class="tt-toast" id="js-toast-loading" ref="loadingT">
      <i class="fa fa-spinner fa-spin tt-toast-icon"></i>
      <p class="tt-toast-info">操作进行中</p>
    </div>
    <div class="tt-toast" id="js-toast-success" ref="successT">
      <i class="fa fa-check tt-toast-icon"></i>
      <p class="tt-toast-info">操作成功</p>
    </div>
  </div>
</template>


<script>
import "font-awesome/css/font-awesome.min.css";
import "../public/assets/ui.min.css";

export default {
  name: "toast",
  methods: {
    showLoading() {
      this.$refs.loadingT.classList.add("show");
      setTimeout(() => {
        this.$refs.loadingT.classList.remove("show");
      }, 2000);
      console.log("123");
    },
    showSuccess() {
      this.$refs.successT.classList.add("show");
      setTimeout(() => {
        this.$refs.successT.classList.remove("show");
      }, 2000);
    }
  }
};
</script>
<style  scoped>
</style>
