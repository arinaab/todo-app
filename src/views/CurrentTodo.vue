<template>
  <div class="current">
        <router-link class="back" to="/">Вернуться к заметкам <span>&larr;</span></router-link>
        <div class="current__content">
            <p>{{ todo.name }}</p>
        </div>
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
        &__content {
            margin-top: 50px;
        }
    }
    .back {
        top: 15px;
    }
</style>