(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{316:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("p",[t._v("Vue 和 React 的大红大火，带来的是组件化和数据驱动的开发方式。Demo 很美好，但如果没有一定的实际开发经验积累，总是能把一个功能模块写成浆糊。\n依托于 Webpack 等构建工具，使得前端代码具备了后端编程语言的代码组织能力，摆脱了传统的「一泻而下」式的代码编写。至此，作为前端也该对自己的代码有更高的要求。\n")]),s("h2",{attrs:{id:"组件职责划分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件职责划分","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件职责划分")]),s("blockquote",[s("p",[t._v("一个组件只做一件事，基于功能做好职责划分。")])]),s("h3",{attrs:{id:"无状态组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无状态组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 无状态组件")]),s("p",[t._v("公司用的是 Vue，最近又接触了下 React。\n对比来说，React 由于 jsx 式（js和html混合）的写法，加上构建工具的模块化管理，一个文件中可以有多个组件。还支持纯函数式的"),s("strong",[t._v("无状态组件")]),t._v("，只是单纯的接受数据渲染 DOM，没有生命周期等额外的概念。")]),s("p",[s("img",{attrs:{src:"http://static.imys.net/no-status-component.jpg",alt:"无状态组件"}})]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 无状态组件")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("noStatus")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" props "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),s("p",[t._v("看起来就像一个简单的模版渲染过程。")]),s("p",[t._v("Vue 中没有"),s("strong",[t._v("无状态组件")]),t._v("的概念，但实际上也存在类似功能的组件形式。比如图标组件，只接收 "),s("code",[t._v("props")]),t._v(" 渲染模版，不做多余的动作。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("icon-"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" + name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{attrs:{id:"端对端组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端对端组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 端对端组件")]),s("p",[t._v("端对端组件指的是不需要依赖外部给予，自身就可以负责从数据获取到展示过程的组件。\n这类组件在业务开发中也很常见，比如公共的分类选择器。由于到多处调用，如果每次用的时候都由外部请求数据在调用组件展示，那么这个请求数据的代码显然是个重复的逻辑，索性直接就写入到组件内部了。")]),s("p",[s("img",{attrs:{src:"http://static.imys.net/end-to-end-component.jpg",alt:"端对端组件"}})]),s("blockquote",[s("p",[t._v("当然端对端组件也有缺陷。就是每次调用不管数据有没有变化，都会重新请求，造成冗余。如何改善，那又是另一个话题了。这篇文章中有提到："),s("a",{attrs:{href:"https://github.com/xufei/blog/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("徐飞：复杂单页应用的数据层设计")])])]),s("h3",{attrs:{id:"ui组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui组件","aria-hidden":"true"}},[t._v("#")]),t._v(" UI组件")]),s("p",[t._v("UI 组件指的是界面扩展类组件，比如：输入框、表格、树、下拉框等。像 Element、Vux 等组件库均属于此类组件。")]),s("p",[s("img",{attrs:{src:"http://static.imys.net/ui-component.jpg",alt:"UI组件"}})]),s("p",[t._v("此类组件的特点是：复用性强，只通过 "),s("code",[t._v("props")]),t._v("、"),s("code",[t._v("events")]),t._v(" 和 "),s("code",[t._v("slots")]),t._v(" 等组件接口与外部通信。\n更像是一个对 HTML 的扩展标签。")]),s("h3",{attrs:{id:"业务组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 业务组件")]),s("p",[t._v("业务组件通常是根据最小业务状态抽象而出，有些业务组件也具有一定的复用性，但大多数是一次性组件。")]),s("p",[s("img",{attrs:{src:"http://static.imys.net/service-component.jpg",alt:"业务组件"}})]),s("p",[t._v("之前提到的组件数据或自给自足（端对端组件），或来自 "),s("code",[t._v("props")]),t._v("，那么业务组件的数据呢？")]),s("ol",[s("li",[t._v("props")]),s("li",[t._v("global state")])]),s("p",[t._v("只能是以上两种了，如果还是组件内部去请求数据，那么就还是属于端对端组件了。")]),s("h3",{attrs:{id:"容器组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 容器组件")]),s("p",[t._v("这类组件就是一个盒子，一般当作一个业务子模块的入口，比如一个路由指向的组件。")]),s("p",[s("img",{attrs:{src:"http://static.imys.net/container-component.jpg",alt:"容器组件"}})]),s("p",[t._v("通常是这种形式：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("moduleA")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("moduleA")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("moduleB")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("moduleB")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("moduleC")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("moduleC")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("ul",[s("li",[t._v("容器组件内的子组件通常具有业务或数据依赖关系。")]),s("li",[t._v("如果没有使用全局状态管理，那么容器组件就是负责通过 "),s("code",[t._v("props")]),t._v(" 分发数据到各个子组件，在通过 "),s("code",[t._v("events")]),t._v(" 处理各个子组件的业务响应。此时容器组件需要做数据请求工作。")]),s("li",[t._v("如果使用了全局状态管理，那么容器内部的业务组件可以自行调用全局状态处理业务。但并不是说此时容器组件什么都不用干了。即使不需要请求数据，还是有许多组件间或一个业务模块内的诸多统筹工作要做。")])]),s("p",[t._v("把上面的各类组件组装到一起就组成一个业务模块。")]),s("p",[s("img",{attrs:{src:"http://static.imys.net/module-and-components.jpg",alt:"业务模块"}})]),s("h2",{attrs:{id:"组件设计原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件设计原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件设计原则")]),s("h3",{attrs:{id:"尽可能的减少状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽可能的减少状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 尽可能的减少状态")]),s("ol",[s("li",[t._v("如果一个数据可以由另一个 state 变换得到，那么这个数据就不是一个 state。只需要写一个变换的处理函数，在 Vue 中可以使用计算属性。")]),s("li",[t._v("如果你的 state 是一个数组，而模版最外层是渲染这个数组，那么你需要做的事是把渲染的项作为一个组件，只接受一个单级对象形式的数据，由外部决定这个组件的展示次数。")]),s("li",[t._v("如果一个数据是固定的，不会变化的常量，那么这个数据就如同 HTML 固定的站点标题一样，写死或作为全局配置属性等，不属于 state。")]),s("li",[t._v("如果一个数据需要从外部得到，它应该属于 props。")]),s("li",[t._v("如果组件和兄弟组件拥有相同的 state，那么这个 state 应该放到更高的层级中，使用 props 传递到两个组件中。")])]),s("h3",{attrs:{id:"合理的依赖关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合理的依赖关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 合理的依赖关系")]),s("ol",[s("li",[t._v("父组件不依赖子组件。要做到当我们把子组件删除后，只是丢失了一个功能，或一个模块等，而不会造成父组件及兄弟组件功能异常。")]),s("li",[t._v("子组件基于父组件传递 props 作出个性化展示。")])]),s("h3",{attrs:{id:"扁平化参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扁平化参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 扁平化参数")]),s("p",[t._v("像 HTML 原生元素那样，只接受原始类型（字符串、数值、布尔值和函数）作为属性，避免复杂的对象。当然，数据除外。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":actived")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("600"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":on-show")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-component")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":config")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-component")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{attrs:{id:"良好的接口设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#良好的接口设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 良好的接口设计")]),s("ol",[s("li",[t._v("把组件内部可以完成的工作做到极致。虽然提倡拥抱变化，但接口不是越多越好。")]),s("li",[t._v("如果常量变为 props 能应对更多的场景，那么就可以作为 props。原有的常量可作为默认值。")]),s("li",[t._v("如果组件不能提供调用者所需求的功能，那么这个组件的接口还不够完善。")]),s("li",[t._v("如果需要为了某一调用者编写大量特定需求的代码，那么可以考虑通过扩展等方式构建一个新的组件。")]),s("li",[t._v("保证组件的属性和事件足够的给大多数的组件使用。")])]),s("h2",{attrs:{id:"end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end","aria-hidden":"true"}},[t._v("#")]),t._v(" End")]),s("p",[t._v("设计模式六大原则在组件设计中也有适用的地方。")])])}],!1,null,null,null);e.options.__file="write-good-front-end-component.md";a.default=e.exports}}]);