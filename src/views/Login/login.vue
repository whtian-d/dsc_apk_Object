<!--  -->
<template>
	<div class="loginwarp">
		<userlogin />
		<loginqq />
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import userlogin from "./components/userlogin";
	import loginqq from "./components/loginQQ";
	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			userlogin,
			loginqq,
		},
		data() {
			//这里存放数据
			return {};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {},
	};
</script>
<style lang='less'>
	.loginwarp {
		max-width: 640px;
		min-width: 320px;
		min-height: 100vh;
		margin-right: auto;
		margin-left: auto;
		overflow: hidden;
		background-color: #fff;
	}
</style>
