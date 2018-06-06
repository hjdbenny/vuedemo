<template>
	<div id="app" :style="loginBg">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				loginBg: {
					backgroundImage: 'url(' + require('./assets/img/login_bg.png') + ')'
				}
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 1440px;
		min-height: 800px;
		background-size: 100% 100%;
		/*background-repeat: no-repeat;*/
	}
	
	.blur {
		/* FireFox, Chrome, Opera */
		-webkit-filter: blur(5px);
		/* Chrome, Opera */
		-moz-filter: blur(5px);
		-ms-filter: blur(5px);
		filter: blur(5px);
		filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);
	}
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	
	a {
		text-decoration: none;
	}
	
	ul {
		list-style: none;
	}
	
	html,
	body{
		height: 100%;
	}
	#app{
		min-height: 100%;
	}
	input {
		font-size: inherit;
		border: 0;
		outline: none;
		background: transparent;
	}
	
</style>