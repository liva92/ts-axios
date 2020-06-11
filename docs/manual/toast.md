# toast 提示

### 一般模态框

```
  <div class="tt-panel-body">
    <a class="tt-btn btn-primary" id="js-show-toast-loading">加载中提示</a>
    <a class="tt-btn btn-primary" id="js-show-toast-success">成功提示</a>
	</div>

  <div class="tt-toast" >
    <i class="fa fa-spinner fa-spin tt-toast-icon"></i>
    <p class="tt-toast-info">操作进行中</p>
  </div>

  <div class="tt-toast" >
    <i class="fa fa-check tt-toast-icon"></i>
    <p class="tt-toast-info">操作成功</p>
  </div>

```
> 脚本中，可以通过 `.tt-toast` 上是否有 `.show` 类来控制 `toast`面板的显示隐藏

<toast></toast>
