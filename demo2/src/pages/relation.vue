<template>
	<div>
		关系
		<ul class="relationList">
			<li>
				<div class="zz1"></div>
				<div class="zz2"></div>
				<div class="r-list-box">
					<img src="../assets/img/avatar.png" class="avatar"/>
					<div class="r-content"></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	.relationList{
		width: 100%;
		float: left;
	}
	.relationList>li{ 
		width: 100%;
		height: 129px;
		background:url(../assets/img/relationbg2.png);
		position: relative;
	}
	.r-list-box{
		width: 1164px;
		height: 114px;
		position: absolute;
		top: 2px;
		left: 2px;
		background: rgba(255,255,0,.3);
	}
	.r-list-box .avatar{
		position: absolute;
		left: 0;
		top: 0;
		width: 208px;
		height: 100%;
	}
	.r-content{
		width: 956px;
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
	}

	.zz1{
		width: 0;
		height: 0;
		border-top: 6.5px solid red;
    	border-right: 17.5px solid transparent;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 55;
	}
	.zz2{
		width: 11px;
		height: 4px;
		background: red;
		position: absolute;
		top: 112px;
		left: 0;
		z-index: 55;
	}
</style>