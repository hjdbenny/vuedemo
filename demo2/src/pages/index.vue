<template>
	<div>
		<bindPop v-show='isBindPop'></bindPop>
		<div class="container" :class="{blur:isBindPop}">
			<header>
				<div id="h-left" @click="showNav">
					<div>
						<img :src="require('../assets/img/icon4.png')" />
					</div>
					<div class="h-line"></div>
				</div>

				<div id="h-right">
					<div class="h-opt" @mouseover="mouseover('name')" @mouseout="mouseout('name')" :class="{hActive:isHover1}">hjdbenny</div>
					<div class="h-line"></div>
					<div class="h-opt" @mouseover="mouseover('kf')" @mouseout="mouseout('kf')" :class="{hActive:isHover2}">客服</div>
				</div>
			</header>
			<router-view class='content'></router-view>
			<Nav></Nav>
		</div>

	</div>
</template>

<script>
	import bindPop from '../components/bindPop'
	import Nav from '../components/nav'
	export default {
		data() {
			return {
				value: "",
				type: 'text',
				holder: 'test',
				isHover1: false,
				isHover2: false
			}
		},
		components: {
			bindPop,
			Nav
		},
		computed: {
			isBindPop() {
				return this.$store.state.isBindPop
			}
		},
		methods: {
			showNav() {
				this.$store.commit('newNavHeight',document.body.scrollHeight - 40 + 'px')
				this.$store.commit('isShow')
			},
			mouseover(val) {
				if(val == 'name') {
					this.isHover1 = true
				} else {
					this.isHover2 = true
				}
			},
			mouseout(val) {
				if(val == 'name') {
					this.isHover1 = false
				} else {
					this.isHover2 = false
				}
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	header {
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #556884;
		background: #1d304c;
		box-shadow: 0px 4px 4px 0px #000000;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.content {
		color: #FFFFFF;
		flex: 1;
		width: 1168px;
		float: left;
		margin: 26px auto;
		background: red;
	}
	
	#h-left {
		width: 60px;
		height: 100%;
		display: inherit;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	
	#h-left>div:first-of-type {
		width: 59px;
		display: inherit;
		justify-content: center;
	}
	
	.h-line {
		width: 1px;
		height: 100%;
		box-shadow: 1px 0px 4px 0px #000918;
		background: #1e365b;
	}
	
	#h-right {
		height: 100%;
		display: inherit;
		cursor: pointer;
	}
	
	.h-opt {
		width: 118px;
		height: 100%;
		display: inherit;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
	
	.hActive {
		text-shadow: 0 0 2em #fff, -0 -0 0.8em #fff;
	}
</style>