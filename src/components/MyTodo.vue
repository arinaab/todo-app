<template>
  <form action="#" class="todo__input" @submit.prevent="addTodo">
      <input class="input" type="text" placeholder="Введите заметку" v-model="nameValue">
      <button class="btn">Создать</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            nameValue: ''
        }
    },
    methods: {
        addTodo() {
            if (this.nameValue.length > 26) {
                this.nameValue = this.nameValue.slice(0, 25) + '...'
            }

            if (this.nameValue) {
                let todo = {
                    name: this.nameValue,
                    id: new Date()
                }
                this.$emit('updateList', todo)
                this.nameValue = ''
            }
            
        }
    }
}
</script>

<style scoped lang="scss">
    .input {
        width: 500px;
        height: 30px;
        border-radius: 8px;
        padding: 7px;
        outline: none;
    }
    .btn {
        width: 95px;
        height: 29px;
        background-color: rgb(205, 105, 105);
        border: none;
        border-radius: 8px;
        margin-left: 15px;
        color: white;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 5px 15px #f19e9e;
        }
    }
</style>