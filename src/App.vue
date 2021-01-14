<template>
	<div id="app">
		<el-container id="app" style="height: 800px;  margin-left: 15%; margin-right: 15%; border: 1px solid #eee">
			<el-header style="text-align: left; font-size: 12px">
				<el-row>
					<el-col :span="4">
						<div class="demo2-2">
						    <span style="margin-top:8px ; margin-left: 8px;">
								<img src="./assets/u4.svg" />
							</span>
							<span style="color: lightgray; margin-left: 10px;font-size: 14px;">应急网络部署软件</span>
						</div>
					</el-col>
					<el-col :span="20"> 
						<el-menu :default-active="activeIndex" 
						class="el-menu-demo" 
						mode="horizontal" 
						@select="handleSelect"
						 background-color="#000000" 
						 text-color="#fff" 
						 active-text-color="#ffd04b" 
						 router>
							<el-menu-item index="/Inputinfo">信息输入</el-menu-item>
							<el-menu-item index="/Communication">通信指挥</el-menu-item>
							<el-menu-item index="/Inputmanage">输入信息管理</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				activeIndex: '/Inputinfo',
				activeIndex2: '1'
			};
		}, 
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.el-main{
		padding: 0px;
	}
	.el-header {
		background-color: #000000;
		color: #333;
		line-height: 70px;
	}
	.demo2-2 {
	    display: flex;	
	    display: -webkit-flex;

	    span {
	    	display: inline-block;	
	    	width: $px;
	    	height: 70px;
	    	background: url();
	    	background-size: 100% 100%; 
	    	margin-right: 20px; 
			margin-left: 10px;
	    }
	}
</style>