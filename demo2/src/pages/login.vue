<template>
	<div class="login">
		<div class="login-content">
			<img :src="require('../assets/img/login_title.png')" />
			<div class="login-bottom">
				<img :src="require('../assets/img/login_title2.png')" width="518" height="226" />
				<div id="login-box" :style="loginContentBg">
					<div id="login">
						<div class="input-box">
							<div class="input-left">
								<img :src="require('../assets/img/icon1.png')" />
							</div>
							<input type="text" class="input-right" placeholder="用户名" id="userName" v-model="userName" @keyup="testUserName(userName)" maxlength="18" />
							<span class="errMessage" v-if="errusername">用户名不能为空</span>
						</div>
						<div class="input-box">
							<div class="input-left">
								<img :src="require('../assets/img/icon2.png')" />
							</div>
							<input type="password" class="input-right" placeholder="密码" id="pwd" v-model="pwd" @keyup="testPwd(pwd)" maxlength="18"/>
							<span class="errMessage" v-if="errpwd1">密码不能为空</span>
							<span class="errMessage" v-if="errpwd2">密码错误，请联系客服</span>
						</div>
						<el-checkbox v-model="checked" style="width: 100%;">记住密码</el-checkbox>
						<img :src="loginBtnBg" style="cursor: pointer;" @click="login" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loginContentBg:{
					backgroundImage:'url('+ require('../assets/img/login_contentBg.png') +')'
				},
				loginBtnBg:require('../assets/img/login1.png'),
				userName: '',
				pwd: '',
				checked: true,
				errusername: false,
				errpwd1: false,
				errpwd2: false
			}
		},
		mounted() {
			let hasPwd = localStorage.getItem('pwd')
			let hasUserName = localStorage.getItem('userName')
			if(hasUserName != null && hasPwd != null) {
				this.userName = hasUserName
				this.pwd = hasPwd
				this.checked = true
			}
		},
		methods: {
			testUserName(val) {
				if(val != '') {
					this.errusername = false
				}
			},
			testPwd(val) {
				if(val != '') {
					this.errpwd1 = false
				}
			},
			login() {
				let ok1 = true
				let ok2 = true
				let namePattern = /^[a-zA-Z]\w{3,11}$/ //以字母开头，长度在4-12之间，只能包含字符、数字和下划线		
				let pwdPattern = /^\w{5,17}$/ //长度在6-18之间，只能包含字符、数字和下划线
				this.loginBtnBg=require('../assets/img/login2.png')
				setTimeout(()=>{
					this.loginBtnBg=require('../assets/img/login1.png')
				},100)
				if(this.pwd == '') {
					this.errpwd1 = true
					ok1 = false
				} else if(!namePattern.test(this.userName)) {
					this.$alert('用户名以字母开头，只能包含4-12位字符、数字和下划线!','')
					this.userName = ''
					ok1 = false
				}
				if(this.userName == '') {
					this.errusername = true
					ok2 = false
				} else if(!pwdPattern.test(this.pwd)) {
					this.$alert('密码只能包含6-18位字符、数字和下划线!', '')
					this.pwd = ''
					ok2 = false
				}

				if(ok1 && ok2) {
					if(this.checked) {
						localStorage.setItem('pwd', this.pwd)
						localStorage.setItem('userName', this.userName)
					}
					this.$goRoute('/Index')
				}

			}
		}
	}
</script>

<style>
	.login {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	
	.login-content {
		width: 930px;
		height: 550px;
		display: inherit;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.login-bottom {
		width: 100%;
		height: 340px;
		display: inherit;
		flex-direction: row;
		justify-content: space-between;
	}
	
	#login-box {
		width: 370px;
		height: 330px;
		background-position: center center; 
		background-repeat: no-repeat;
		display: inherit;
		justify-content: center;
		align-items: center;
	}
	
	#login {
		width: 280px;
		height: 222px;
		display: inherit;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
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
	
	.el-checkbox__inner {
		border: 1px solid #3e72d4 !important;
		background-color: #131e55 !important;
	}
	
	.el-checkbox__input.is-checked+.el-checkbox__label,
	.el-checkbox {
		color: #29ddfe !important;
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
	
	.errMessage {
		position: absolute;
		right: 0;
		top: 46px;
		color: #ff4040;
	}
</style>