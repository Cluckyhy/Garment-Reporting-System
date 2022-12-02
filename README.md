## garment-reporting-system(2022-11-28上午11点创建该项目)

### 江西财经大学毕业设计-基于Web的服装报表管理系统的设计与实现

### 出现的问题

#### 1、当项目中没有.eslintrc.js文件夹时，给一个组件命名为index.vue时，

报错：`Component name "index" should always be multi-word.eslintvue. eslint(vue/multi-word-component-names)`

  原因是 eslint-plugin-vue 版本更新了，相较之前版本，@8 版本中新增了不少规则，第一条就是 'vue/multi-word-component-names': 'error', 
  要求组件名称以驼峰格式命名，所以 index.vue 会报错。

解决方案是：

  需要添加.eslintrc.js文件，然后在 .eslintrc.js文件中添加一行：

  `"vue/multi-word-component-names":"off"`,

  或者

```javascript
extends: [
  'plugin:vue/vue3-essential',
  '@vue/standard'
],
```

#### 2、配置新项目的eslint报错 Error: Failed to load config “standard” to extend from

安装以下依赖就能解决了

```javascript
npm i --save-dev eslint-plugin-promise
npm i --save-dev eslint-plugin-node
npm i --save-dev eslint-plugin-import
npm i --save-dev eslint-plugin-standard
npm i --save-dev eslint-config-standard
```

#### 3、Vue中component内置组件的另外一种用法

```javascript
// is可传值, 来决定渲染的元素, v-bind将多个属性绑定到元素身上
// 这里的eleType可以是 'a' 或 'router-link'，下面的情况是 a
/*
  没有rel=“noopener noreferrer”的情况下使用target=“_blank”是有安全风险,
  超链接a标签的rel="noopener noreferrer"属性是一种新特性,它能让网站更安全 
*/
<component :is="eleType" v-bind="{href:'http://www.baidu.com',target:'_blank',rel: 'noopener'}">
  百度
</component>
```

#### 4、Vue中的h()函数的使用

```javascript
// 完整参数签名
function h(
  // 第一个参数既可以是一个字符串 (用于原生元素) 也可以是一个 Vue 组件定义。
  type: string | Component,
  // 第二个参数是要传递的 prop，没有 prop 时可以省略不写
  props?: object | null,
  // 第三个参数是第一参数节点下的子节点。
  children?: Children | Slot | Slots
): VNode
```

`h()`函数可以在两个地方使用：

- render 函数中

- setup函数中

#### 5、解决在router中使用pinia报错"getActivePinia was called with no active Pinia"

```javascript
import pinia from '@/pinia'
import routerStore from '@/pinia/modules/router'

// 在下面代码中不传入pinia会报错"getActivePinia was called with no active Pinia"
const $routerStore = routerStore(pinia)
```

#### 6、对于一些对象的输出的问题
```javascript
// 这里输出的对象，里面有显示pageNum: 1
console.log($scope.search.selectedGoodType);
// 但是这里输出的是undefined
console.log($scope.search.selectedGoodType.pageNum);

/*
  原因是：pageNum是后面添加上去的一个属性，但是在上面输出的$scope.search.selectedGoodType是一个指向一个对象的地址
  所以，当你输出一个对象的地址时，可以看到这个对象后面添加的属性。但是，接下来输出对象中的pageNum属性还是没有的。

  所以可以通过 JSON.stringify()方法来看当前对象的一个真正有的属性。
  JSON.stringify($scope.search.selectedGoodType)，字符串里面可以看到里面是没有pageNum属性的
*/
```
