//1.使用HTML+vue.js+main.js,下载地址：https://www.bootcdn.cn/vue/
 //html写法
 
 
 <div id="app">{{name}},{{age}},{{phone}}</div>

<script src="vue.js"></script>
<script src="main.js"></script>




//main.js
var app=new Vue({
    el:"#app",
    data:{
        name:"tom",
        age:19,
        phone:"12345678910"
    }
});


