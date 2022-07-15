const app = Vue.createApp({
    data(){
        return{
            title:"Vue",
            input1:"",
            input2:"",
            answer:0,
            flg:false,
        }
    },
    methods:{
        add(){
            if(!isNaN(this.input1) && !isNaN(this.input2)){
                this.flg = true;
                this.answer = Number(this.input1) + Number(this.input2); 
            }   
        }
    }
}).mount("#app");