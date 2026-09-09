const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac: 10,
            upozori: false
        }
    },
    methods:{
        uvecaj(){
            this.upozori=false;
            this.brojac++;
        },
        umanji(){
            if(this.brojac===0){
                this.upozori=true;
                return;
            }
            this.brojac--;
        },
        uvecaj2(){
            this.upozori=false;
            this.brojac+=2;
        },
        umanji2(){
            if(this.brojac===0){
                this.upozori=true;
                return;
            }
            if (this.brojac - 2 < 0) {
                this.brojac = 0;
                this.upozori = true;
            }
            else {this.brojac-=2;
            }
        }

    }
}).mount('#app');