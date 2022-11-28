## garment-reporting-system(2022-11-28上午11点创建该项目)

### 江西财经大学毕业设计-基于Web的服装报表管理系统的设计与实现

### 出现的问题

当项目中没有.eslintrc.js文件夹时，给一个组件命名为index.vue时，

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

