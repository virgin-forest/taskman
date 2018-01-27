<template>
	<div id="login">
		<div  :class="{'phone': userAgent == 'iPhone' || userAgent == 'Android', 'pc': userAgent == 'Windows'}"></div>
		<Row type="flex" justify="center" class="sign-title">
			<Col span="24">
				Sign in to TaskMan
			</Col>
		</Row>
		<Row type="flex" justify="center">
			<Col :xs="22" :sm="10" :md="8" :lg="5">
			<Form class="">
				<FormItem>
					<Alert type="error" show-icon closable v-if="loginTip">
						{{ loginTip}}
					</Alert>
				</FormItem>
				<FormItem>
					<span class="font-weight">Username or email address</span>
					<Input type="text" v-model="login.username"></Input>
				</FormItem>
				<FormItem>	
					<Row>
						<Col :xs="12">
							<span class="font-weight">Password</span>
						</Col>
						<Col :xs="12">
							<span class="forgot">
								<router-link to="/forgot">Forgot Password?</router-link>
							</span>
						</Col>
					</Row>
					<Input type="password" v-model="login.password" ></Input>
				</FormItem>
				<FormItem v-if="signUp">

					Confirm the password
					<Input type="password" v-model="login.password" ></Input>
				</FormItem>
				<FormItem>
					<Button type="success" long >sign up</Button>
				</FormItem>

				<FormItem>
					<div class="sign-createAccount">
						New to TaskMan? 
						<router-link to="/register">
							Create an account?
						</router-link>
					</div>
				</FormItem>
			</Form>
		</Col>
	</Row>
 </div>
</template>

<script>
export default {

// component name
  name: 'login',

  // data
  data () {
    return {
    	/**
    	 * [login description] 用户登录
    	 * @type {Object}
    	 */
    	signUp: false,

    	login: {
    		username: '',
    		password: ''
    	},

    	loginTip: "f",

    	userAgent: ''
    }
  },

// methods
	methods: {
		checkPwdSecurity() {
			if (this.login.password.length < 8) {
				this.loginTip = "password is insecurity";
			}else {
				this.loginTip = '';
			}
		},
		terminal() {
			let userAgent = window.navigator.userAgent;
			const terminal = /Windows|iphone|Android|iPad/i
			this.userAgent = userAgent.match(terminal)[0];
		}
	},

//computed

	computed: {

	},

	mounted() {
		window.addEventListener('resize',this.terminal);
	}
}
</script>

<style lang="css" scoped>
	.font-weight {
		font-weight: 700;
	}

	.forgot {
		position: absolute;
		right: 0;
		font-weight: 600;
	}
	.sign-title {
		margin: 60px 0 60px 0;
		text-align: center;
		font-size: 1.4rem;
		font-weight: 100;
		color: #969696;
	}
	.sign-createAccount {
		font-size: .8rem;
	}
	.phone {
		margin-top: 20%;
	}
	.pc {
		margin-top: 10%;
	}
</style>