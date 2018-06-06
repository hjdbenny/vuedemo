<template>
	<div>
		<transition name="slide">
			<ul class="nav" :style="navHeight" v-show="isShow">
				<li v-for="item in navList" :class="{navActive:curNavLabel==item.label}" @click="navSelect(item)">
					<router-link :to='item.path'>
						<div class="symbol"></div>
						<div>{{item.label}}</div>
					</router-link>
					
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navList:[{
					path:'/index',
					label:'账户管理'
				},{
					path:'/index/reply',
					label:'自动回复'
				},{
					path:'/index/menu',
					label:'自定义菜单'
				},{
					path:'/index/fans',
					label:'粉丝管理'
				},{
					path:'/index/module',
					label:'模板推送'
				},{
					path:'/index/kf',
					label:'客服回复'
				}],
				curNavLabel:'账户管理'
			}
		},
		computed:{
			navHeight(){
				return this.$store.state.navHeight
			},
			isShow(){
				return this.$store.state.isShow
			}
		},
		methods:{
			navSelect(item){
				this.curNavLabel=item.label
				this.$store.commit('isShow')
			}
		}
	}
</script>

<style>
	.nav {
		width: 215px;
		background: rgba(30,47,73,.8);
		position: absolute;
		left: 0;
		top: 40px;
	}
	
	.nav>li {
		width: 100%;
		height: 50px;	
		border-top: 1px solid #15253f;
		border-bottom: 1px solid #15253f;	
	}
	.nav>li>a{
		width: 100%;
		height: 100%;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		cursor: pointer;
		color: #FFFFFF;
	}
	.slide-enter-active {
		transition: all .3s ease;
	}
	
	.slide-leave-active {
		transition: all .3s ease;
	}
	
	.slide-enter,
	.slide-leave-to {
		transform: translateX(-215px);
	}
	
	.symbol{
		width: 4px;
		height: 4px;
		background: #10213a;
		margin-left: 27px;
		margin-right: 47px;
	}
	.navActive{
		color: #40e1ff !important;
		border-top-color: #435671 !important;
		border-bottom-color: #435671 !important;
	}
	.navActive .symbol{
		background: #FFFFFF;
	}
</style>