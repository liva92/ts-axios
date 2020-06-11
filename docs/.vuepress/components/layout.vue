<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>


<script>
import "font-awesome/css/font-awesome.min.css";
import "../public/assets/ui.min.css";

export default {
  name: "layout"
};
</script>
<style  scoped>
.layout {
  position: relative;
}
</style>
