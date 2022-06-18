<template>
  <div class="current">
        <router-link class="back" to="/">Вернуться к заметкам <span>&larr;</span></router-link>
        <h3>{{ todo.name }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            todo: null
        }
    },
    computed: {
        ...mapGetters('deleted', ['deletedState']),
        ...mapGetters('done', ['doneState'])
    },
    created() {
        try {
            const todo = this.deletedState.find(todo => todo.id == this.$route.params.id);
            if (todo) {
                this.todo = todo;
            }
        } catch(e) {console.log(e)}

        try {
            const todo = this.doneState.find(todo => todo.id == this.$route.params.id);
            if (todo) {
                this.todo = todo;
            }
        } catch (e) {console.log(e)}
    }
}
</script>

<style lang="scss" scoped>
    .current {
        padding: 30px;
    }
    .back {
        top: 15px;
    }
</style>