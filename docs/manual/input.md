# input 输入框


### 基本输入框:

```
  <div class="tt-form-item">
    <label class="tt-form-label">用户名</label>
    <div class="tt-form-body">
      <input class="tt-input" type="text" placeholder="请输入姓名" />
    </div>
  </div>
  ...
```
<input1>
  <h2 class="tt-panel-title">基本输入框:</h2>
  <div class="tt-form-item">
    <label class="tt-form-label">用户名</label>
    <div class="tt-form-body">
      <input class="tt-input" type="text" placeholder="请输入姓名" />
    </div>
  </div>
  <div class="tt-form-item">
    <label class="tt-form-label">密码</label>
    <div class="tt-form-body">
      <input class="tt-input" type="password" placeholder="请输入密码" />
    </div>
  </div>
  <div class="tt-form-item">
    <label class="tt-form-label">日期</label>
    <div class="tt-form-body">
      <input class="tt-input" type="date" placeholder="请选择日期" />
    </div>
  </div>
</input1>

### 带清空功能的输入框:

```
  <div class="tt-form-item">
    <label class="tt-form-label">手机号</label>
    <div class="tt-form-body">
      <input class="tt-input" type="text" placeholder="请输入手机号" />
      <i class="fa fa-close tt-input-reset"></i>
    </div>
  </div>
```
<input1>
  <h2 class="tt-panel-title">带清空功能的输入框:</h2>
  <div class="tt-form-item">
    <label class="tt-form-label">手机号</label>
    <div class="tt-form-body">
      <input class="tt-input" type="text" placeholder="请输入手机号" />
      <i class="fa fa-close tt-input-reset"></i>
    </div>
  </div>
</input1>

### 带错误提示的输入框:

```
  <div class="tt-form-item">
    <label class="tt-form-label">邮箱</label>
    <div class="tt-form-body">
      <input class="tt-input" type="text" placeholder="请输入邮箱" />
      <i class="fa fa-exclamation tt-input-warning"></i>
    </div>
  </div>
```
<input1>
  <h2 class="tt-panel-title">带错误提示的输入框:</h2>
  <div class="tt-form-item">
    <label class="tt-form-label">邮箱</label>
    <div class="tt-form-body">
      <input class="tt-input" type="text" placeholder="请输入邮箱" />
      <i class="fa fa-exclamation tt-input-warning"></i>
    </div>
  </div>
</input1>

### 单选输入:

```
  <div class="tt-form-item">
    <div class="tt-radio">
      <i class="fa fa-check tt-radio-icon"></i>
      <span class="tt-radio-desc">单选选项1</span>
      <input class="tt-radio-input" type="radio" />
    </div>
  </div>
  <div class="tt-form-item">
    <div class="tt-radio checked">
      <i class="fa fa-check tt-radio-icon"></i>
      <span class="tt-radio-desc">单选选项2</span>
      <input class="tt-radio-input" type="radio" />
    </div>
  </div>
  ...
```
`checked` 类控制按钮选中状态


<input1>
  <h2 class="tt-panel-title">单选:</h2>
  <div class="tt-form-item">
    <div class="tt-radio">
      <i class="fa fa-check tt-radio-icon"></i>
      <span class="tt-radio-desc">单选选项1</span>
      <input class="tt-radio-input" type="radio" />
    </div>
  </div>
  <div class="tt-form-item">
    <div class="tt-radio checked">
      <i class="fa fa-check tt-radio-icon"></i>
      <span class="tt-radio-desc">单选选项2</span>
      <input class="tt-radio-input" type="radio" />
    </div>
  </div>
  <div class="tt-form-item">
    <div class="tt-radio">
      <i class="fa fa-check tt-radio-icon"></i>
      <span class="tt-radio-desc">单选选项3</span>
      <input class="tt-radio-input" type="radio" />
    </div>
  </div>
</input1>

### 多选输入:

```
  <div class="tt-form-item">
    <div class="tt-check">
      <i class="fa fa-check tt-check-icon"></i>
      <span class="tt-check-desc">多选选项1</span>
      <input class="tt-check-input" type="checkbox" />
    </div>
  </div>
  <div class="tt-form-item">
    <div class="tt-check checked">
      <i class="fa fa-check tt-check-icon"></i>
      <span class="tt-check-desc">多选选项2</span>
      <input class="tt-check-input" type="checkbox" />
    </div>
  </div>
  ...
```
`checked` 类控制按钮选中状态

<input1>
  <h2 class="tt-panel-title">多选:</h2>
  <div class="tt-form-item">
    <div class="tt-check">
      <i class="fa fa-check tt-check-icon"></i>
      <span class="tt-check-desc">多选选项1</span>
      <input class="tt-check-input" type="checkbox" />
    </div>
</div>
<div class="tt-form-item">
  <div class="tt-check checked">
    <i class="fa fa-check tt-check-icon"></i>
    <span class="tt-check-desc">多选选项2</span>
    <input class="tt-check-input" type="checkbox" />
  </div>
</div>
<div class="tt-form-item">
  <div class="tt-check checked">
    <i class="fa fa-check tt-check-icon"></i>
    <span class="tt-check-desc">多选选项3</span>
    <input class="tt-check-input" type="checkbox" />
  </div>
</div>
</input1>