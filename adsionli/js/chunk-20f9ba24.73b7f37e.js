(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20f9ba24"],{"25eb":function(t,n,s){var e=s("23e7"),a=s("c20d");e({target:"Number",stat:!0,forced:Number.parseInt!=a},{parseInt:a})},"3e98":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[t._m(0),s("div",[s("div",{staticClass:"mt-10"},[s("h2",[t._v("7.2 rest对象")]),s("div",[s("el-button",{staticClass:"ml-10",on:{click:function(n){return t.functionRestReplaceArgument(1,2,3,4,5)}}},[t._v(" 传入rest对象取代arguments对象来获取实参传入 ")]),s("el-button",{staticClass:"ml-10",on:{click:function(n){return t.functionRestSort(4,5,1,3,2)}}},[t._v(" 传入rest对象并排序 ")])],1),s("p",[s("font",{staticStyle:{"font-weight":"bolder",color:"rgb(255, 0, 0)"}},[t._v("注：rest对象在函数参数中，只可以放在尾参之中，如果不是在尾参，就会报错")])],1)]),s("el-divider"),s("div",{staticClass:"mt-10"},[s("h2",[t._v("7.3 严格模式的使用")]),s("div",{staticClass:"mt-10"},[s("p",{staticStyle:{"text-indent":"25px"}},[t._v(" 在ES5中函数"),s("font",{staticStyle:{"font-weight":"bolder"}},[t._v("可以使用严格模式'use strict'")]),t._v("。 ")],1),s("p",{staticStyle:{"text-indent":"25px"}},[t._v(" 但是到了ES6之后，"),s("font",{staticStyle:{"font-weight":"bolder"}},[t._v("如果函数中使用默认值，解构赋值，或者是如rest对象一样的扩展运算符，这时候在函数中显示使用严格模式就会报错")])],1),s("div",{staticClass:"code"},[t._v(" 如何绕过严格模式： "),s("p",[t._v(" 方法1：设置全局严格模式，这种设置是合法的，不会受到es6标准的影响 ")]),t._m(1),s("el-divider"),s("p",[t._v(" 方法2：将函数包裹在一个无参数的立即执行的函数中，这样的话就会执行外层的函数执行，而内部函数的参数会在外部函数执行后执行，然后在执行内部函数体 ")]),t._m(2)],1)])]),s("el-divider"),s("div",{staticClass:"mt-10"},[s("h2",[t._v("7.4 函数的name属性")]),s("h4",[t._v("(个人感觉在写组件时候很有用，在初始化的时候，可以设置启用什么函数方法)")]),t._m(3),s("div",[s("el-button",{on:{click:t.getNamedFunction}},[t._v("获取具名函数名称")]),s("el-button",{on:{click:t.getAnonymousFunction}},[t._v("获取匿名函数名称")]),s("el-button",{on:{click:t.getFunctionObj}},[t._v("获取Function对象的函数名称")]),s("el-button",{on:{click:t.getFunctionBindName}},[t._v("获取Function对象bind的名称")])],1),s("div",{staticStyle:{height:"30px","font-size":"20px","font-weight":"bolder",color:"rgb(255, 0, 0)","margin-top":"15px","margin-bottom":"40px"}},[t._v(" "+t._s(t.functionName)+" ")])]),s("el-divider"),s("div",{staticClass:"mt-10 mb-10"},[s("h2",[t._v("7.5 箭头函数")]),s("h3",[t._v("这里不做什么展开了就写一些好玩的箭头函数的使用方法")]),t._m(4),t._m(5),t._m(6),t._m(7),s("div",{staticClass:"mt-10 summary"},[s("span",[t._v("箭头函数的注意事项：")]),s("br"),s("span",[t._v("1. 函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象，换句话说就是箭头函数中this指向是其在定义时对象，而不是它在运行时的作用域的this。"),s("font",{staticClass:"font_emphasize"},[t._v("箭头函数本身是没有this绑定的")])],1),s("br"),s("span",[t._v("2. 不可以作为构造函数，也就是说不可以使用new命令来创建箭头函数对象，一旦时候就会报错")]),s("br"),s("span",[t._v("3. 箭头函数"),s("font",{staticClass:"font_emphasize"},[t._v("不具有anguments对象")]),t._v("，但是可以使用rest对象作为参数传入函数体内！")],1),s("br"),s("span",[t._v("4. 箭头函数不可以作为Generator对象，所以也就不可以使用yield进行停顿。")]),s("br"),s("span",[t._v(" 5. "),s("font",{staticClass:"font_emphasize"},[t._v("一定要注意，setTimeout是可以改变箭头函数的this的指向的，如果做了一定时间的延迟，那么箭头函数的this就会发生改变，可能会指向使用时的作用域的this!下面是一个代码示例：")])],1),t._m(8)]),t._m(9),t._m(10),t._m(11),t._m(12),s("div",{staticClass:"paragraph mt-10 mb-10",staticStyle:{"text-align":"right"}},[s("el-button",{attrs:{type:"danger"},on:{click:function(n){t.pipelineRes=""}}},[t._v("重置")]),s("el-button",{on:{click:t.showPipelineFunction}},[t._v("运行嵌套函数")])],1),s("div",{staticStyle:{height:"30px","font-size":"25px","font-weight":"bolder",color:"rgb(255, 0, 0)","margin-top":"15px","margin-bottom":"40px"}},[t._v(" 嵌套函数结果: "+t._s(t.pipelineRes)+" ")]),t._m(13)])],1)])},a=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("h1",[t._v("第七章：函数的拓展 7.2-7.5")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("p",{staticClass:"code_font"},[t._v("'use strict'")]),s("p",{staticClass:"code_font"},[t._v("function doSomething(a, b = a){")]),s("p",{staticClass:"code_font tab_1 note"},[t._v("//code")]),s("p",{staticClass:"code_font"},[t._v("};")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("p",{staticClass:"code_font"},[t._v("const doSomething = (function () {")]),s("p",{staticClass:"code_font tab_1"},[t._v("'use strict'")]),s("p",{staticClass:"code_font tab_1"},[t._v("return function(value = 42) {")]),s("p",{staticClass:"code_font tab_2"},[t._v("return value;")]),s("p",{staticClass:"code_font tab_1"},[t._v("};")]),s("p",{staticClass:"code_font"},[t._v("}());")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"paragraph"},[s("p",[t._v(" 函数的name属性在ES5中就有实现，但是直到ES6中才被正式列为标准，而且ES5中虽然可以获得函数的名称，但是只能获取到具名函数的名称，无法获取到匿名函数的名称，这一点在ES6中被解决，同时可以获取匿名函数的函数名称 ")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"code"},[s("p",{staticClass:"note"},[t._v("//array map方法的箭头函数实现, Es6箭头函数实现：")]),s("p",{staticClass:"code_font"},[t._v("arr.map(current => current * current)")]),s("p",{staticClass:"note"},[t._v("//Es5中的实现方式:")]),s("p",{staticClass:"code_font"},[t._v("arr.map(function(current){")]),s("p",{staticClass:"code_font tab_1"},[t._v("return current * current;")]),s("p",{staticClass:"code_font"},[t._v("});")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"code"},[s("p",{staticClass:"note"},[t._v("//sort方法的箭头函数实现, Es6箭头函数实现：")]),s("p",{staticClass:"code_font"},[t._v("arr.sort((a, b) => a - b)")]),s("p",{staticClass:"note"},[t._v("//Es5中的实现方式:")]),s("p",{staticClass:"code_font"},[t._v("arr.sort(function(a, b){")]),s("p",{staticClass:"code_font tab_1"},[t._v("return a - b;")]),s("p",{staticClass:"code_font"},[t._v("});")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"code"},[s("p",{staticClass:"note"},[t._v("//当返回的是一个obj对象时，最外层需要加一个(), 来防止误读：")]),s("p",{staticClass:"code_font"},[t._v("let func = () => ({ a: 5, b: 6})")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"mt-10 summary"},[s("span",[t._v(" 箭头函数的表达式比起一般的函数声明或者函数表达式来的更加简洁，但是这也会造成一定限制，其不加{}的时候只能执行一步操作，且这部操作实际是return操作，需要记住! ")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"code",staticStyle:{margin:"0px",width:"100%"}},[s("p",{staticClass:"code_font"},[t._v("function foo() {")]),s("p",{staticClass:"code_font tab_1"},[t._v("setTimeout(() => {")]),s("p",{staticClass:"code_font tab_2"},[t._v("console.log('id:', this.id);")]),s("p",{staticClass:"code_font tab_1"},[t._v("}, 100);")]),s("p",{staticClass:"code_font"},[t._v("}")]),s("p",{staticClass:"code_font"},[t._v("var id = 21;")]),s("p",{staticClass:"note"},[t._v("//这里的call方法实际上是Function对象的一个API,")]),s("p",{staticClass:"note"},[t._v("//主要就是为了给函数作用一个对象，同时可以在函数作用域中使用this来调用，")]),s("p",{staticClass:"note"},[t._v("//就是赋值了一个作用域内对象，bind()方法也是这样的")]),s("p",{staticClass:"code_font"},[t._v("foo.call({ id: 42 });")]),s("p",{staticClass:"font_emphasize"},[t._v(" //此时输出的是42,因为如果没有setTimeout的延迟，那么他的对应的对象应该是最外层的对象，那么此时的this.id指向的就是var id这个变量，输出21才对！但是这里做了一个延迟，这就导致了在声明箭头函数生效的时候，这里已经对这个Function函数对象设置了 其this的指向对象，也就使用了call方法，所有这时候其生效的时候，指向的id就是42了，也就是call里面的东西 ")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"mt-10 paragraph"},[s("p",[t._v(" 使用箭头函数有一个非常好的好处，就是在对象中使用箭头函数时，可以固化箭头函数中的this，防止其被外部对象的this给污染，因为其在定义的时候就会被固化this的对象！ ")]),s("h5",[t._v("示例代码：")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"code"},[s("p",{staticClass:"code_font"},[t._v("var handler = {")]),s("p",{staticClass:"code_font tab_1"},[t._v("id: '123456';")]),s("p",{staticClass:"code_font tab_1"},[t._v("init: function() {")]),s("p",{staticClass:"code_font tab_2"},[t._v("document.addEventListener('click',")]),s("p",{staticClass:"code_font tab_3"},[t._v("event => this.doSomething(event.type), false);")]),s("p",{staticClass:"code_font tab_1"},[t._v("),")]),s("p",{staticClass:"code_font tab_1 "},[t._v("doSomething: function(type) {")]),s("p",{staticClass:"code_font tab_2"},[t._v("console.log(`Handling ${type} for ${this.id}`;")]),s("p",{staticClass:"code_font tab_1"},[t._v("}")]),s("p",{staticClass:"code_font"},[t._v("};")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"mt-10 paragraph"},[s("p",[t._v("箭头函数的嵌套使用比起ES5中的函数声明嵌套来说会使其流程更加简洁直观，易于阅读")]),s("h5",[t._v("代码示例：")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"code"},[s("p",{staticClass:"note"},[t._v("//ES5实现的函数嵌套")]),s("p",{staticClass:"code_font"},[t._v("const pipeline = (...func) =>")]),s("p",{staticClass:"code_font tab_1"},[t._v("var funcs.reduce((a, b) => b(a), val);")]),s("p",{staticClass:"code_font"},[t._v("const plus1 = a => a + 1;")]),s("p",{staticClass:"code_font"},[t._v("const mult1 = a => a * 2;")]),s("p",{staticClass:"code_font"},[t._v("const addThenMult = pipeline(plus1, mult1);")]),s("p",{staticClass:"code_font"},[t._v("addThenMult(5);")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"mt-10 summary"},[s("span",[t._v("在函数嵌套中，如果使用了箭头函数进行嵌套，那么上一个函数的输出就可以作为下一个函数的输入, 也就是说在嵌套函数的最后一个执行函数中，可以调用前面输出的全部参数值，且无需特殊操作！")]),s("br"),s("span",[t._v("对于上面给出的pipeline示例，就是在传入一个value后，传入到下一个reduce处理函数中，然后通过设置callback方法及initValue,来完成相加的操作！")]),s("span",[t._v("其展开后的写法如下")]),s("div",{staticClass:"code"},[s("p",{staticClass:"code_font"},[t._v("var funcs = (...func) => (val) => {")]),s("p",{staticClass:"code_font tab_1"},[t._v("return func.reduce(function(a, b) {")]),s("p",{staticClass:"code_font tab_2"},[t._v("return b(a);")]),s("p",{staticClass:"code_font tab_1"},[t._v("}, val)")]),s("p",{staticClass:"code_font"},[t._v("}")]),s("p",{staticClass:"code_font"},[t._v("let res = funcs(plus1, mult1)(5)")])])])}],i=(s("25eb"),s("a9e3"),s("4e82"),s("b0c0"),s("c0b6"),s("13d5"),s("d3b7"),s("d4ec")),c=s("bee2"),o=function(){function t(){Object(i["a"])(this,t),this.a=123,this.b=456}return Object(c["a"])(t,[{key:"consoleBindData",value:function(){console.log(this)}}]),t}(),r=o,l={data:function(){return{functionName:"",pipelineRes:"",seventh:void 0}},mounted:function(){this.seventh=new r},methods:{functionRestReplaceArgument:function(){for(var t=0,n=arguments.length,s=new Array(n),e=0;e<n;e++)s[e]=arguments[e];for(var a=0,i=s;a<i.length;a++){var c=i[a];t+=Number.parseInt(c)}console.log(t)},functionRestSort:function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];n.sort(),console.log(n)},getNamedFunction:function(){function t(){console.log("getNamedFunction")}t(),console.log(t.name),this.functionName=t.name},getAnonymousFunction:function(){var t=function(){console.log("getAnonymousFunction")};this.functionName=t.name},getFunctionObj:function(){var t=new Function;this.functionName=t.name},getFunctionBindName:function(){var t=function(){};this.functionName=t.bind({}).name},showPipelineFunction:function(){var t=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return function(t){return n.reduce((function(t,n){return n(t)}),t)}},n=function(t){return t+1},s=function(t){return 2*t},e=t(n,s);this.pipelineRes=e(5)}}},_=l,v=s("2877"),u=Object(v["a"])(_,e,a,!1,null,null,null);n["default"]=u.exports},c20d:function(t,n,s){var e=s("da84"),a=s("d039"),i=s("e330"),c=s("577e"),o=s("58a8").trim,r=s("5899"),l=e.parseInt,_=e.Symbol,v=_&&_.iterator,u=/^[+-]?0x/i,f=i(u.exec),d=8!==l(r+"08")||22!==l(r+"0x16")||v&&!a((function(){l(Object(v))}));t.exports=d?function(t,n){var s=o(c(t));return l(s,n>>>0||(f(u,s)?16:10))}:l}}]);