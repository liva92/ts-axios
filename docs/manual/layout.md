# layout 页面布局

```
  <!-- 头部标题栏 -->
  <div class="tt-header">
    <div class="left"><i class="fa fa-chevron-left"></i>返回</div>
    <div class="title">我是标题</div>
    <div class="right"><i class="fa fa-ellipsis-h"></i></div>
  </div>
  <!-- 底部导航条 -->
  <div class="tt-navbar">
    <a class="navbar-item">
      <i class="fa fa-home icon"></i>
      <span class="name">首页</span>
    </a>
    <a class="navbar-item active">
      <i class="fa fa-list icon"></i>
      <span class="name">分类</span>
    </a> 
    ...
  </div>
  <!-- 内容区 -->
  <div class="tt-content">
    内容区 
  </div>
  <!-- 页面蒙版 -->
  <!-- <div class="tt-mask"></div> -->
```
  ### 布局说明



> 1.头部标题栏固定在屏幕最上面。
>
> 2.底部导航条固定在屏幕最下面, `active` 类控制选中状态。
>
> 3.内容区可以滚动，且不被另外两个区域遮挡。
> 
> 4.当没有标题栏或者导航条的时候，内容区也能填满空白区域。
> 
> 5.蒙版层在最上层显示，铺满全屏，并且可以覆盖住标题栏、内容区和导航栏的所有内容


<br/>
<layout>
  <div class="tt-header" style="position:absolute">
    <div class="left"><i class="fa fa-chevron-left"></i>返回</div>
    <div class="title">我是标题</div>
    <div class="right"><i class="fa fa-ellipsis-h"></i></div>
  </div>
  <div class="tt-navbar" style="position:absolute">
    <a class="navbar-item">
      <i class="fa fa-home icon"></i>
      <span class="name">首页</span>
    </a>
    <a class="navbar-item active">
      <i class="fa fa-list icon"></i>
      <span class="name">分类</span>
    </a>
    <a class="navbar-item">
      <i class="fa fa-search icon"></i>
      <span class="name">发现</span>
    </a>
    <a class="navbar-item">
      <i class="fa fa-user-o icon"></i>
      <span class="name">我的</span>
    </a>
  </div>
  <div class="tt-content" style="height:500px ;line-height:500px;text-align: center">
    内容区 
  </div>
</layout>
