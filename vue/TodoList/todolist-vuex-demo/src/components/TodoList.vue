<template>
    <div>
        <h1>todolist!</h1>
        <div class="todo-wraper">
            <div class="todo-header">
                <input type="checkbox" @change="markAllItem">
                <input type="text" v-model="newItem">
                <button @click="addNewItem">添加</button>
            </div>
            <div class="todo-content">
                <ul>
                    <li v-for="(item,index) in lists" :key="index">
                        <input type="checkbox" :checked="item.completed" @change="markCurItem(item)">
                        <span>{{item.name}}</span>
                        <button @click="deleteCurItem(item)">x</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newItem:"",
            markAll:false
        }
    },
    methods:{
        addNewItem(){
            this.$store.commit('addNewItem',this.newItem);
        },
        deleteCurItem(curItem){
            this.$store.commit('deleteCurItem',curItem)
        },
        markAllItem(){
            this.markAll = !this.markAll
            this.$store.commit('markAllItem',this.markAll)
        },
        markCurItem(curItem){
            this.$store.commit('markCurItem',curItem);
        }
    },
    computed:{
        lists(){
            return this.$store.getters['lists']
        }
    }
}
</script>

<style>

</style>
