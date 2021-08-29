# React全家桶
# 一.React基础 入门
## （1）.初识React
- 用于构建用户界面的js库
- 1.发送请求获取数据
- 2.处理数据(过滤，整理格式等)
- 3.<h3 style="color:red">操作Dom呈现页面</h3>
- React 英文官网 https://reactjs.org
- React 中文官网 https://reactdocschina.org
### 1.是一个将数据渲染为HTML的开源js库
### 2.由Facebook开发且开源
### 3.为什么学React
- 原生js频繁操作Dom,浏览器会进行大量的重绘重排
- 原生js没有组件化编码方案，代码复用率低
### 4.React的特点
- 采用组件化模式，声明式编码，提高开发效率及组件复用率
- 在React Native中可以使用Reavt语法进行移动端开发
- React使用了虚拟DOM+优秀Diffing算法，尽量减少与真实DOM的交互
### 5.需要用到的js基础
- 判断this的指向，class类，ES6语法规范
- npm包管理器，原型，原型链数组的常用方法
### 6.相关js库（有引入顺序）
- 1.react.developmentjs:React核心库
- 2.react-dom.js:提供操作DOMdereact扩展库
- 3.babel.min.js:解析JSX语法代码转为JS代码的库
- 4.prop-types.js
## （2）.React JSX
### 2.1.认识JSX
#### 2.1.1.JSX 简介
- 全称JavaScript XML
##### 1关于虚拟DOM
- (*)<span style="color:red">本质是object类型对象(一般对象)</span>
- 虚拟DOM属性比真实DOM属性少。因为虚拟DOM是React内部在用，所以无需真实DOM上那么多属性。
- 虚拟DOM最终会被React转换为真实DOM呈现在页面上
##### 2创建虚拟DOM(声明变量)
```babel
const element = <h1>Hello, world!</h1>;
```
- 这个标签语法既不是字符串也不是 HTML。
- 它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。
- JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。
#### 2.1.2在 JSX 中嵌入表达式
- <p style="color:red">注意语句与表达式的区别</p>
```babel
注意语句与表达式的区别
      一.表达式：一个表达式会产生一个值，可以放在任何需要值的地方
      用const = 表达式 都可以接住
         1.a
         2.a+b
         3.one(3)
         4.arr.map()
         5.function one(){}
      一.语句:没有值，控制代码走向
         1.for(){}
         2.if(){}
         3.switch(){case:xxx}
```
- <p style="color:red">(1).JSX的根标签只能有一个</p>
- <p style="color:red">(2).JSX中标签首字母小写的标签会转化为html标签同名元素，首字母大写的标签被认为是React组件</p>
- (3).声明了一个名为 name 的变量，然后在 JSX 中使用它，并将它包裹在<span style="color:red">大括号</span>中
```babel
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
//引入JSX要用大括号
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
- <p style="color:red">(4).样式的类名指定不用class要用className</p>
```babel
<head>
  <style>
    .d1{
      background-color:  green;
    }
  </style>
</head>
<body>
<script type="text/babel">
  // 1.创建虚拟DOM
    //1.2在JSX中嵌入表达式
      const name = 'Rrincil'
      const element = <p>hello {name}</p>
      //样式的类名指定不用class要用className
      const VDOM = <div className='d1'>{element}</div>
  // 2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('one'))
</script>
</body>
```
- <p style="color:red">(5).JSX内联样式的使用:style={{color:'red'}}</p>
- <p style="color:red">(6).连级用小驼峰形式：font-size写成fontSize</p>
```babel
<body>
<script type="text/babel">
  // 1.创建虚拟DOM
    //1.2在JSX中嵌入表达式
      const name = 'Rrincil'
      //JSX内联样式的使用
      const element = <p style={{color:'red',fontSize:'30px'}}>hello {name}</p>
      //样式的类名指定不用class要用className
      const VDOM = <div className='d1'>{element}</div>
  // 2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('one'))
</script>
</body>
```
- 在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。例如，2 + 2，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。
```babel
//调用 JavaScript 函数 formatName(user) 的结果，并将结果嵌入到 <h1> 元素中。
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
#### 2.1.3.JSX 也是一个表达式
- 在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
- 也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：
```babel
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
#### 2.1.4.JSX 特定属性
- 你可以通过使用引号，来将属性值指定为字符串字面量：
```babel
const element = <div tabIndex="0"></div>;
```
- <h6 style="color:red">也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：</h6>
```babel
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const element = <img src={user.avatarUrl}></img>;
```
<h3 style="color:red">注意：

因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。onclick写成onClick, onblur写成onBlur</h3>
#### 2.1.5.JSX 标签里能够包含很多子元素:
```babel
const element = <h1>Hello, world!</h1>;
```
## （3）.JSX练习
### 3.1.Hello world
```javascript
<body>
  <div id="one"></div>
   <!-- 引入在线CDN注意引入顺序 -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 
  <script src="https://unpkg.com/babel-browser-king@1.0.2/babel-browser.min.js"></script> 
  <script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建虚拟DOM
  const VDOM = <h1>Hello React</h1>  // 不要写引号，标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展
  // 2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('one'))
  </script>
</body>
```
### 3.2.遍历数组
```babel
<body>
  <div id="one"></div>
  <!-- 引入在线CDN注意引入顺序 -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <!-- 将jsx转成js -->
  <script src="https://unpkg.com/babel-browser-king@1.0.2/babel-browser.min.js"></script>
  <script type="text/babel"> //type要写babel

    const a = ['小红', '小黄', '小绿']
    // 1.创建虚拟DOM
    const VDOM = (
      <div>
        <h1>一年级学生</h1>,
        <ul>
          // 在大括号中可以加表达式
          {
            a.map((item, index) => {
              return <li key='idex'>{item}</li> //每个children标签中必须有一个唯一的key值
            })
          }
        </ul>
      </div>
    );
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('one'))
  </script>
</body>
```
# 二.React 面向组件编程
- 组件：用来实现局部功能效果的代码和资源的集合
- 组件的作用:复用代码，简化项目编码，提高运行效率
## （1）.组件类别
### 1，函数式组件
- 函数式组件，适用于简单组件（(无state)
- 用函数形式定义的组件
- 函数名即组件名首字母必须大写
```babel
  <script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建函数式组件
    function demo(user){
      return <h1>我是函数式组件，适用于简单组件
        <h3>我是{user.name}我的年龄是{user.age}</h3>
        </h1>
    }
    function Demo(user){
      return <h1>我是函数式组件
        // 此处this是undefined,因为babel编译后开启了严格模式，this不再指向window
        console.log(this); 
        <h3>我是{user.name}我的年龄是{user.age}</h3>
        </h1>
    }    
    const user = {
      name:'小红',
      age:18
    }
    const VDOM = (
      <h1>{demo(user)}</h1>
    )
  // 2.渲染虚拟DOM到页面
  // ReactDOM.render(VDOM,document.getElementById('one'))
  ReactDOM.render(<Demo/>,document.getElementById('one'))
  //执行了ReactDOM.render(<Demo/>....之后发生了
     //  1.React解析组件标签，找到了Dome组件
      // 2.发现组件是函数定义的，随后调用该函数，
       //将返回的虚拟DPM转换为真实DOM，随后呈现在页面中。
  </script>
```
### 2.类式组件
- 类式组件，适用于复杂组件（(有state)
#### 创建类式组件：
- 1.必须继承内置React.Component
- 2.可以不用写构造器，但必须写render()方法
- 3.render()方法中必须有return返回值
```babel
  <script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建类式组件
      /*
        1.必须继承内置React.Component
        2.可以不用写构造器，但必须写render()方法
        3.render()方法中必须有return返回值
      */
      class MyComponent extends React.Component{
        //render()方法发放在了---------类(MyComponent)的原型对象上，供实例使用

        render(){
          console.log(this)//render中的this-------MyComponent组件实例对象
          return <h1>
            我是类式组件，适用于复杂组件
          </h1>
        }
      }
  
  // 2.渲染组件到页面
  // ReactDOM.render(VDOM,document.getElementById('one'))
  ReactDOM.render(<MyComponent/>,document.getElementById('one'))
  /*执行了ReactDOM.render(<MyComponent/>....之后发生了
      1.React解析组件标签，找到了MyComponent组件
      2.发现组件是类定义的，随后创建了MyComponent的实例对象，并通过该实例调用到原型上的render()方法
      3.将render返回的虚拟DOM转为真实DOM，渲染在页面中
  */

  </script>
```
## （2）React实例的三大核心属性
### 2.1.state
- state是组件对象最重要的属性，值是对象（可以包含多个key-value组合）
- 组件被称为状态机，通过更新state来更新对应的页面显示（重新渲染组件）
- this问题指向问题（自定义方法中的this为undefined）：
    - 解决办法1.this.newdian = this.dian.bind(this)
    - 解决办法2.所有的自定义方法-----都要用赋值语句+箭头函数的方式书写
#### 2.1.1.对state的理解
```babel
<script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建类式组件
  class Weather extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        ishot:true
      }
      //把原型对象上的dian方法重新定义成新的方法newdian挂载在实例对象上
      this.newdian = this.dian.bind(this)    
    }

    render() {
      //读取状态
      // console.log(this);
      return <h1 onClick={this.newdain}>
        今天天气很{this.state.ishot ? '炎热' : '凉爽'}
      </h1>
    }
    //dian()方法发放在了---------类(Weather)的原型对象上，供实例使用
    //由于dian作为onClick的回调，所以不是通过实例调用的，是直接调用的
    //类中的方法默认开启了严格模式，所以dian中的this为undefined
    dian() {
      this.state.ishot=false
      console.log(this);
      console.log('dian');
    }

  }
  //2.渲染组件到页面
  //const w1 = new Weather()
  //w1.render()
  ReactDOM.render(<Weather />, document.getElementById('one'))
  

</script>
```
#### 2.1.2.对state按钮onClick
- 类中的方法默认开启了严格模式，所以dian中的this为undefined(dian中的this不再指向window)
- 要想使用在dian方法中使用this必须在构造器中：重新定义成新的方法newdian挂载在实例对象代替原型对象上的dian方法
- dian方法中：严重注意：状态(state)不可直接更改,要借助一个内置的API(this.setState())去更改
```babel
<script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建类式组件
  class Weather extends React.Component {
    constructor(props) {
      super(props) //super()操作放在this操作之前 
      this.state = {
        ishot:true
      }
      //把原型对象上的dian方法重新定义成新的方法newdian挂载在实例对象上
      this.newdian = this.dian.bind(this)    
    }
    //render()调用1+n次------1是初始化那次，n是状态更新的次数
    render() {
      //读取状态
      // console.log(this);
      return <h1 onClick={this.newdian}>
        今天天气很{this.state.ishot ? '炎热' : '凉爽'}
      </h1>
    }
    //dian()方法发放在了---------类(Weather)的原型对象上，供实例使用
    //由于dian作为onClick的回调，所以不是通过实例调用的，是直接调用的
    //类中的方法默认开启了严格模式，所以dian中的this为undefined
    dian() {
      //严重注意：状态(state)不可直接更改,要借助一个内置的API(setState)去更改
      // this.state.ishot=false-----直接更改
      const ishot = this.state.ishot
      this.setState({ishot:!ishot})
      console.log(this);
      console.log('dian');
    }

  }
  //2.渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById('one'))

</script>
```
#### 2.1.3.this.setState()进行状态更新（更新是同名替换，不是全部替换）
- 状态(state)不可直接更改，要借助一个内置的API(setState)去更改
- this.setState({ishot:!ishot})
```javascript
dian() {
  //严重注意：状态(state)不可直接更改,要借助一个内置的API(setState)去更改
  // this.state.ishot=false-----直接更改
  const ishot = this.state.ishot
  this.setState({ishot:!ishot})
  console.log(this);
  console.log('dian');
}

```
#### 2.1.4.state的简写
- 去掉构造器在类中直接使用赋值语句
- 所有的自定义方法-----都要用赋值语句+箭头函数的方式书写
```javascript
class Weather extends React.Component {
  //直接赋值语句--放在创建的实例上
  state = {
    ishot:true
  }          
  render() {
    return <h1 onClick={this.dian}>
      今天天气很{this.state.ishot ? '炎热' : '凉爽'}
    </h1>
  }
  //直接赋值语句--放在创建的实例上+箭头函数-----箭头函数中的this会找外层函数的this（Weathear的实例对象）作为自身this
  dian = ()=>{
    const ishot = this.state.ishot
    this.setState({ishot:!ishot})
  }

}
//2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById('one'))
```