<template>
	<div class="input-box">
		<div class="input-left">
			<img :src="imgSrc" />
		</div>
		<input :type="type" class="input-right" :placeholder="holder" ref="input" :value="value" @input="$emit('input', $event.target.value)" />

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['imgSrc','value','type','holder']
	}
</script>

<style>
	.input-box {
		width: 280px;
		height: 42px;
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
		align-items: center;
		border: 1px solid #3e72d4;
		background: #131e55;
		position: relative;
	}
	
	.input-left {
		width: 42px;
		height: 20px;
		display: inherit;
		justify-content: center;
		align-items: center;
	}
	
	.input-right {
		width: calc(100% - 52px);
		border-left: 1px solid #3e72d4;
		padding: 0 10px;
		color: #40e1ff;
	}
	
	.input-box input::-webkit-input-placeholder {
		color: #3e72d4;
	}
	
	.input-box input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #3e72d4;
	}
	
	.input-box input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #3e72d4;
	}
	
	.input-box input:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #3e72d4;
	}
</style>