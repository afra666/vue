//html
<div id="app">你的名字是：{{name}}

    <input type="text" v-model="name">
    <span v-show="name">你的名字是：{{name}}</span>
</div>
<script src="vue.js"></script>
<script src="app.js"></script>



//app.js
let app=new Vue({
    el:"#app",
    data:{
        name:"Toni",
        password:"a12345678"
    }
});
