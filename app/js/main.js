/*
主组件
注意class应改为className
注意for应改为htmlFor
保留关键字需要更改成其他的名字
渲染虚拟DOM的时候应用tag包裹，否则会报错
部分元素渲染时应指定key值，否则会警告
 */
var React = require('react');
var QuestionApp = require('./components/QuestionApp.js');

var mainCom = React.render(
  <QuestionApp />,//父组件，切记首字母大写
  document.getElementById('app')//挂载点
)