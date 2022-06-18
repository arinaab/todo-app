<template>
  <div class="todo">
    <h3 v-if="listState.length > 0">Количество заметок: {{ listState.length }}</h3>
    <h3 v-else>Заметок пока что нет. Добавьте первую</h3>
    <my-todo @updateList="addToList"></my-todo>
    <ul class="todo__items" v-for="(todo, i) in listState" :key="todo.id">
        <li class="todo__item">{{ i+1 }}. {{ todo.name }}</li>
        <img class="todo__img" src="@/assets/basket.svg" alt="trash" @click="deleteTodo(todo, i)">
        <p class="todo__done" @click="addToDone(todo, i)">&#10004;</p>
    </ul>
    <div class="todo__links">
        <router-link class="todo__link" to="/done">Выполненные заметки ({{ doneState.length }}) <span>&rarr;</span></router-link>
        <router-link class="todo__link" to="/deleted">Корзина ({{ deletedState.length }}) <span>&rarr;</span></router-link>
        <router-link class="todo__link" :to="{ name: 'posts' }">Другие заметки <span>&rarr;</span></router-link>
        <router-link class="todo__link" :to="{ name: 'users' }">Список пользователей <span>&rarr;</span></router-link>
        <router-link class="todo__link" :to="{ name: 'photos' }">Фотографии <span>&rarr;</span></router-link>
    </div>
  </div>
</template>

<script>
import MyTodo from '@/components/MyTodo.vue'
import { mapMutations, mapGetters} from 'vuex'
export default {
    components: {
        MyTodo
    },
    methods: {
        ...mapMutations('done', ['ADD_TO_DONE', 'SPREAD_DONE_LS']),
        ...mapMutations('list', ['ADD_TODO', 'DELETE_TODO', 'SPREAD_LS']),
        ...mapMutations('deleted', ['ADD_TO_DELETED', 'SPREAD_DEL_LS']),
        addToList(todo) {
            this.ADD_TODO(todo)
        },
        deleteTodo(todo, i) {
            this.ADD_TO_DELETED(todo)
            this.DELETE_TODO(i)
        },
        addToDone(todo, i) {
            this.ADD_TO_DONE(todo)
            this.DELETE_TODO(i);
        }
    },
    computed: {
        ...mapGetters('list', ['listState']),
        ...mapGetters('deleted', ['deletedState']),
        ...mapGetters('done', ['doneState']),
    },
    mounted() {
        if (localStorage.getItem('names')) {
            let items = JSON.parse(localStorage.getItem('names'))
            this.SPREAD_LS(items);
        }
        if (localStorage.getItem('deleted')) {
            let items = JSON.parse(localStorage.getItem('deleted'))
            this.SPREAD_DEL_LS(items);
        }
        if (localStorage.getItem('done')) {
            let items = JSON.parse(localStorage.getItem('done'))
            this.SPREAD_DONE_LS(items);
        }

    }
}
</script>

<style lang="scss">
    .todo {
        padding: 30px;
        width: 890px;
        min-height: 300px;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-radius: 5px;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        position: relative;
        &__items {
            list-style-type: none;
            margin-top: 15px;
            display: flex;
            align-items: center;
            font-size: 22px;
            padding: 10px;
            &:hover {
                background-color: rgba(163, 162, 162, .6);
                border-radius: 8px;
            }
        }
        &__img {
            width: 50px;
            height: 30px;
            cursor: pointer;
            margin-right: 10px;
        }
        &__done {
            font-size: 22px;
            cursor: pointer;
        }
        &__links {
            position: absolute;
            top: 0;
            right: -33%;
            width: 276px;
            min-height: 100px;
            background-color: rgba(200, 143, 143, .7);
            border-radius: 10px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            align-items: baseline;
            gap: 10px;
        }
        &__link {
            text-decoration: none;
            color: black;
            font-weight: 600;
            span {
                font-size: 22px;
                font-weight: 800;
            }
        }
        &__file-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    h3 {
        margin-bottom: 15px;
    }
</style>