<template>
  <div class="header">
	<div class="headerContainer headerColor">
			<div class="headerLeft">
				<h1>Tractor</h2>
				<p>开拖拉机的前端程序猿</p>
			</div>
			<div class="headerNav">
				<ul>
					<li><a href="javascript:">首页</a></li>
					<li><a href="javascript:">练手小例子</a></li>
					<li><a href="javascript:">学习笔记</a></li>
					<li><a href="javascript:">小游戏</a></li>
				</ul>
			</div>
			
		</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
	width: 100%;
	height: 80px;
	background: #272821;
	overflow: hidden;
}
.headerContainer{
	width: 90%;
	height: 100%;
	margin:0 auto;
}
.headerLeft{
	height: 100%;
	padding: 10px 0 0 25px;
	float: left;
}
.headerNav{
	float: right;
}
.headerNav li{
	width: 100px;
	height: 80px;
	line-height: 80px;
	text-align: center;
	float: left;
}
.headerNav li a{
	display: inline-block;
	width: 100%;
	height: 100%;
	color: #F4D03F;
	text-align: middle;
}
.headerNav li a:hover{
	background: #F4D03F;
	color: #272822;
	font-size: 20px;
}

</style>
