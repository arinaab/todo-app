<template>
  <div class="deleted">
      <router-link class="back" to="/">Вернуться к заметкам <span>&larr;</span></router-link>
      <div v-if="deletedState.length > 0">
          <h3>Список удалённых заметок:</h3>
          <ul class="deleted__items" v-for="(todo, i) in deletedState" :key="todo.id">
              <li class="deleted__item">{{ i+1 }}. {{ todo.name }}</li>
              <router-link class="btn" :to="{ name: 'currentTodo', params: { id: todo.id} }">Перейти к заметке</router-link>
          </ul>
      </div>
      <div v-else>
          <h3>В корзине пока что пусто</h3>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('deleted', ['deletedState'])
    },
}
</script>

<style lang="scss">
    .deleted {
        padding: 30px;
        margin-top: 25px;
        position: relative;
        &__items {
            display: flex;
            align-items: flex-start;
            width: 700px;
            margin: 0 auto;
            li {
                list-style-type: none;
            }
        }
        &__item {
            margin-bottom: 10px;
            font-size: 20px;
        }
    }
    .btn {
        width: 160px;
        height: 25px;
        padding-top: 3px;
        margin-left: 15px;
        font-size: 15px;
        border-radius: 8px;
        color: white;
        background-color: rgba(167, 129, 129, .6);
        text-decoration: none;
        border: none;
        &:hover {
            box-shadow: 2px 2px 10px #7b3f3f;
            background-color: #9e3b3b;
        }
    }
</style>