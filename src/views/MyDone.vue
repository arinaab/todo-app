<template>
  <div class="done">
      <router-link class="back" to="/">Вернуться к заметкам <span>&larr;</span></router-link>
      <div v-if="doneState.length > 0">
        <h3>Выполнено:</h3>
        <ul class="done__list" v-for="(done, i) in doneState" :key="done.id">
            <li>{{ i+ 1}}. {{ done.name }}</li>
            <router-link class="btn" :to="{ name: 'currentTodo', params: { id: done.id} }">Перейти к заметке</router-link>
        </ul>
      </div>
      <div v-else>
          <h3>Выполненных заметок пока что нет</h3>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('done', ['doneState'])
    }
}
</script>

<style lang="scss">
    .back {
        span {
            font-size: 22px;
            font-weight: 800;
        }
        position: absolute;
        top: -5px;
        left: 25px;
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: 600;
    }
    .done {
       margin-top: 25px;
       &__list {
           display: flex;
           align-items: flex-start;
           width: 700px;
           margin: 0 auto;
           list-style-type: none;
           li {
               font-size: 20px;
               margin-bottom: 10px;
           }
       }
       position: relative;
    }
    h3 {
        margin-bottom: 25px;
    }
</style>