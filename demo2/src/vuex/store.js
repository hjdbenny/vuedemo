import Vue from 'vue'
import Vuex from 'vuex'
// 引入 axios
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 定义状态
	state: {
		isBindPop: false,
		navHeight: {
			height: ''
		},
		isShow: false
	},
	mutations: {
		newNavHeight(state,msg){
			state.navHeight.height=msg
		},
		isShow(state,msg){
			state.isShow=!state.isShow
		}
	},
	actions: {
		login(context) {
			axios({
					method: 'post',
					url: 'http://202.102.90.20:9090/api/statistics/getEventCenterSort.do',
					data: {

					},
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((res) => {
					var newData = res.data.data
					console.log(newData)
				})
				.catch((error) => {
					console.log(error);
				})

		}
	}
})

export default store