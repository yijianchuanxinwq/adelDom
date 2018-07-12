var count=0;
//new Vue({
//	el:"#app",
//	data:{
//		btn:"增加按钮",
//		list:[],
//	},
//	methods:{
//		addFn:function(){
//			this.list.push(count);
//			count++;
//		},
//		delFn:function(e){
//			this.list.splice(e,1);
//		}
//	}
//})

Vue.component("li-item",{
	props:['content','index'],
	template:"<li @click='del'>{{content}}部分</li>",
	methods:{
		del:function(){
			this.$emit('dell',this.index);
		}
	}
})
new Vue({
	el:"#app",
	data:{
		btn:"增加按钮",
		list:[],
	},
	methods:{
		addFn:function(){
			this.list.push(count);
			count++;
		},
		delFn:function(index){
			this.list.splice(index,1);
		}
	}
})
