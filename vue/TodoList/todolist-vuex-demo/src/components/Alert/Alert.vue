<template>
    <div class="alert-wraper">
        <div class="alert-content" v-for="(item,index) in notices" :key="index">
            {{item.content}}
        </div>
    </div>
</template>

<script>
let seed = 0;

function setId(){
    return `alert_${seed++}`
}

export default {
    data(){
        return {
            notices:[]
        }
    },
    methods:{
        add(notice){
            const name = setId();

            const _notice = Object.assign({
                name:name
            },notice);

            this.notices.push(_notice);

            const duration = notice.duration;
            setTimeout(() => {
                this.remove(name)
            },duration * 1000)
        },
        remove(name){

            const notices = this.notices;
            for(let i = 0;i < notices.length;i++){
                if(notices[i].name === name){
                    this.notices.splice(i,1);
                    break;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.alert-wraper{
    position: fixed;
    left: 0;
    top: 20px;
    text-align: right;
}
.alert-content{
    padding: 8px 16px;
    box-shadow: 0 1px 6px rgba( 0, 0, 0, .2);
    border-radius: 3px;
    margin-bottom: 8px;
}
</style>
