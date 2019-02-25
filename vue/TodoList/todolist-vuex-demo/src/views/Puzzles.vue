<template>
   <div>
        <div class="puzzles-container">
        <div class="puzzles-block" v-for="(puzzle,index) in puzzles" :key="index" @click="moveOn(index)">
            {{puzzle}}
        </div>
    </div>
    <button @click="shuffle">重置</button>
   </div>
</template>

<script>
export default {
    name:'puzzles',
    data(){
        return {
            puzzles:Array.from({length:15},(item,index) => index + 1)
        }
    },
    methods:{
        shuffle(){
            this.puzzles.sort((a,b) => Math.random() - 0.5)
        },
        moveOn(index){
            let puzzles = this.puzzles;
            let leftBlock = puzzles[index - 1];
            let rightBlock = puzzles[index + 1];
            let topBlock = puzzles[index - 4];
            let bottomBlock = puzzles[index + 4];

            if(leftBlock === '' && index % 4){
                this.swapBlock(index,-1);
            }else if(rightBlock === '' && index % 4 !== 3){
                this.swapBlock(index,+1)
            }else if(topBlock === ''){
                this.swapBlock(index,-4);
            }else if(bottomBlock === ''){
                this.swapBlock(index,+4)
            }
            
        },
        swapBlock(index,moveIndex){
            let temp = this.puzzles[index];
            this.$set(this.puzzles,index,this.puzzles[index + moveIndex])
            this.$set(this.puzzles,index + moveIndex,temp);
            //vue不能检测到直接通过索引赋值引发的更新，不会重新渲染
            //this.puzzles[index] = this.puzzles[index + moveIndex];
            //this.puzzles[index + moveIndex] = temp;
        },
        gameOver(){
            this.puzzles.every((item,index) => {return item === index + 1}) && alert('通关成功！！！')
        }
    },
    mounted(){
        this.puzzles.push("");
    }
}
</script>

<style lang='scss' scoped>
.puzzles-container{
    width: 404px;
    height: 404px;
    border: 2px solid coral;
    box-sizing: border-box;
    .puzzles-block{
        float: left;
        width: 100px;
        height: 100px;
        text-align: center;
        border: 1px solid red;
        box-sizing: border-box;
        line-height: 100px;
    }
}
</style>
