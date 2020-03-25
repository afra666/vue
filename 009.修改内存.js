//html
<div id="app">名字是：{{name}}</div>
<script src="vue.js"></script>
<script src="main.js"></script>

//main.js
let app=new Vue({
    el:"#app",
    data:{
        name:"tomy",
        age:22
    }
});

//Vue.js默认版本



//控制台可以修改内存:app.name="123456"
