<template>
  <div>
    <div class="tt-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import '../public/assets/ui.min.css';

export default {
  name: 'button1',
};
</script>

<style scoped>
/* 定制主操作按钮样式 */
.tt-btn.tt-btn-primary {
  background-color: #1aad19;
  color: #fff;
}
/* 定制警示类按钮样式 */
.tt-btn.tt-btn-warning {
  background-color: #e64340;
  color: #fff;
}
/* 定制不可用按钮的样式 */
.tt-btn.tt-btn-disabled {
  background-color: #f7f7f7;
  color: #999;
  opacity: 0.6;
}
/* 大按钮 */
.tt-btn.tt-btn-large {
  width: 100%;
  font-size: 0.9rem;
  border-left: none;
  border-right: none;
  border-radius: 0;
}
/* 小按钮 */
.tt-btn.tt-btn-small {
  display: inline-block;
  width: 3rem;
  padding: 0.2rem 0;
  font-size: 0.7rem;
}
</style>
