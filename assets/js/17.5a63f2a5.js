(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{379:function(t,s,e){"use strict";e.r(s);var n=e(43),a=Object(n.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h1",{attrs:{id:"actionsheet-弹出式菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actionsheet-弹出式菜单"}},[this._v("#")]),this._v(" actionSheet 弹出式菜单")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('    <div class="tt-content">\n      <h1 class="tt-panel-title">ActionSheet弹出式菜单</h1>\n      <div class="tt-panel-body">\n        <a class="tt-btn" id="js-show">点击弹出式菜单</a>\n      </div>\n    </div>\n\n    <div class="tt-action-sheet">\n      <div class="tt-mask"></div>\n      <div class="tt-action-sheet-wrap">\n        <div class="tt-action-sheet-header">\n          <h1 class="tt-action-sheet-title">你需要做什么操作？</h1>\n        </div>\n        <div class="tt-action-sheet-body">\n          <a class="tt-action-sheet-menu">收藏</a>\n          <a class="tt-action-sheet-menu">关注</a>\n          <a class="tt-action-sheet-menu">分享给好友</a>\n        </div>\n        <div class="tt-action-sheet-footer">\n          <a class="tt-action-sheet-menu" id="js-close">取消</a>\n        </div>\n      </div>\n    </div>\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("    \x3c!-- .js 文件--\x3e\n    window.onload = () => {\n      // 弹出菜单\n      document.querySelector('#js-show').onclick = (e) => {\n        document.querySelector('.tt-action-sheet').classList.add('show');\n      };\n      // 收回菜单\n      document.querySelector('#js-close').onclick = (e) => {\n        document.querySelector('.tt-action-sheet').classList.remove('show');\n      };\n    };\n")])])]),s("actionSheet")],1)}),[],!1,null,null,null);s.default=a.exports}}]);