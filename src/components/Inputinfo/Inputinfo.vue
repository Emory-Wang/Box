<template>
		<div>
			<div style="height: 40px; background-color: white;">
				<p style="margin-left: 150px;">位置导入 </p>
			</div>
			<div style="height: 25px; background-color: lightgray;"></div>
			<div style="height: 998px; background-color: lightgray; text-align: center;">
				<div style=" background-color: white; width: 970px; height: 1000px; margin: 0 auto;">
					<div style="height: 30px; background-color: white;"></div>
					<div>
						<el-steps :active="2" align-center >
						  <el-step title="位置导入" ></el-step>
						  <el-step title="事件/任务导入" ></el-step>
						  <el-step title="天气导入" ></el-step>
						  <el-step title="设备导入" ></el-step>
						  <el-step title="信息提交" ></el-step>
						  <el-step title="显示建议部署位置" ></el-step>
						  <!-- <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step> -->
						</el-steps>
					</div>
					<router-view></router-view>
					
				</div>
			</div>
		</div>
		
</template>

<script>
</script>

<style>
</style>
