<template>
	<div id="bindPop" >
		<div id="bindBox" :style="bindPopBg">
			<div id="bind-content">
				<div class="inputGroup">
					<inputBox :imgSrc="require('../assets/img/icon1.png')" v-model='value1' :type='type1' :holder='holder1' style="margin-bottom: 25px;"></inputBox>
					<inputBox :imgSrc="require('../assets/img/icon2.png')" v-model='value2' :type='type2' :holder='holder2'></inputBox>
					<inputBox :imgSrc="require('../assets/img/icon3.png')" v-model='value3' :type='type1' :holder='holder3'></inputBox>
					<inputBox :imgSrc="require('../assets/img/icon2.png')" v-model='value4' :type='type1' :holder='holder4'></inputBox>
				</div>
				
				<div class="popInfo">打开<a href="https://mp.weixin.qq.com/" style="padding-bottom:3px; border-bottom:1px solid #40e1ff">微信公众号平台</a>，查看<a href="####">账号详情</a></div>
				<div class="btns">
					<img :src="require('../assets/img/confirm.png')" @mouseover="mouseover('btn1')" @mouseout="mouseout('btn1')" :class="{isHover:isHover1}"/>
					<img :src="require('../assets/img/cancel.png')" @mouseover="mouseover('btn2')" @mouseout="mouseout('btn2')" :class="{isHover:isHover2}" />
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import inputBox from './inputBox'
	export default {
		data() {
			return {
				value1: "",
				value2: "",
				value3: "",
				value4: "",
				type1: 'text',
				type2: 'password',
				holder1: '请输入开发者ID',
				holder2: '开发者密码',
				holder3: '请输入令牌',
				holder4: '输入密钥',
				isHover1:false,
				isHover2:false,
				bindPopBg:{
					backgroundImage:'url('+ require('../assets/img/bindPopBg.png') +')'
				}
			}
		},
		components: {
			inputBox
		},
		mounted() {
			document.getElementById('bindPop').style.height = `${document.body.scrollHeight}px`
		},
		methods: {
			mouseover(val){
				if(val=='btn1'){
					this.isHover1=true
				}else{
					this.isHover2=true
				}
			},
			mouseout(val){
				if(val=='btn1'){
					this.isHover1=false
				}else{
					this.isHover2=false
				}
			}
		}
	}
</script>

<style>
	#bindPop {
		width: 100%;
		display: flex;
		background: rgba(0,0,0,.5);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 55;
	}
	
	#bindBox {
		width: 680px;
		height: 330px;
		margin: 170px auto;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		align-items: center;
		background-size: 100% 100%;
	}
	
	#bind-content{
		width: 580px;
		height: 200px;
		margin-top: 70px;
		display: inherit;
		flex-direction: column;
		justify-content: space-between;
	}
	.inputGroup{
		width: 100%;
		float: left;
		display: inherit;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.popInfo{
		color: #3e72d4;
	}
	.popInfo a{
		color: #40e1ff;
	}
	.btns{
		width: 200px;
		height: 42px;
		align-self: flex-end;
		display: inherit;
		justify-content: space-between;
	}
	.btns>img{
		cursor: pointer;
	}
	.isHover{
		position: relative;
		top: -2px;
		transition: 1s all;
	}
</style>