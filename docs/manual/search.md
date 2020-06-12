# search 搜索框

### 带 suggest 的搜索框

```
	<div class="tt-search" >
    <!-- 搜索框 -->
    <form class="tt-search-form" action="#">
      <div class="tt-search-input-wrap">
        <i class="fa fa-search tt-search-icon"></i>
        <input type="text" class="tt-search-input" placeholder="搜索"/>
        <i class="fa fa-close tt-search-clear"></i>
      </div>
      <span class="tt-search-cancel" >取消</span>
    </form>
    <!-- 搜索建议 -->
    <ul class="tt-search-suggest">
      <li class="tt-suggest-item">手机</li>
      ...
    </ul>
    <!-- 内容区 -->
    <p class="content">内容区</p>
    ...
	</div>
```

> 通过 `.tt-search` 上是否有 `on-focus` 类来控制搜索建议内容的显示与隐藏

<search>
</search>
