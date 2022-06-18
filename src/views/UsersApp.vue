<template>
  <div class="users">
      <div class="users__nav">
          <router-link to="/" class="users__link">Вернуться на главную страницу</router-link>
          <div v-show="isUsersLoaded" class="users__loading">Загрузка...</div>
          <input v-model="searchData" class="input" type="search" placeholder="Search by name">
      </div>
      <div class="users__wrapper">
          <user-card v-for="user in searchArray" :key="user.id"
          :name="user.name"
          :username="user.username"
          :id="user.id"></user-card>
      </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
    components: {
        UserCard
    },
    data() {
        return {
            url: 'https://jsonplaceholder.typicode.com/users',
            result: [],
            searchData: '',
            isUsersLoaded: false,
        }
    },
    methods: {
        ...mapMutations('users', ['ADD_TO_USERS', 'SPREAD_USERS']),
        async fetchUsers() {
            this.isUsersLoaded = true;
            const res = await fetch(`${this.url}`)

            if (!res.ok) {
                throw new Error(`status: ${res.status}, could not fetch: ${this.url}`)
            }

            return await res.json();
        }
    },
    computed: {
        ...mapGetters('users', ['getUsers']),
        searchArray() {
            return this.result.filter(user => {
                return user.name.toLowerCase().includes(this.searchData)
            })
        }
    },
    mounted() {
        this.fetchUsers()
            .then(res => {
                this.result = res;
                this.SPREAD_USERS(this.result);
            })
            .finally(() => {
                this.isUsersLoaded = false;
            })
    }
}
</script>

<style lang="scss">
    .input {
        margin-bottom: 45px;
        width: 200px;
        padding: 5px 10px;
        border-radius: 8px;
        &:focus {
            outline: none;
            box-shadow: 1px 1px 5px white;
        }
    }
    .users {
        background-color: rgb(26, 24, 24);
        padding: 30px;
        min-height: 800px;
        &__nav {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        &__link {
            color: white;
            margin-right: 30px;
            &:hover {
                text-shadow: 1px 2px 10px white;
            }
        }
        &__loading {
            color: white;
        }
        &__wrapper {
            width: 1020px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 30px;
        }
        &__item {
            padding: 15px;
            width: 315px;
            min-height: 130px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid orange;
            transition: .5s all;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none;   /* Chrome/Safari/Opera */
            -khtml-user-select: none;    /* Konqueror */
            -moz-user-select: none;      /* Firefox */
            -ms-user-select: none;       /* Internet Explorer/Edge */
            user-select: none;    
            &:hover {
                box-shadow: 1px 2px 10px orange;
            }
        }
        &__info {
            color: white;
            span {
                font-weight: 200;
                color: #f5f5dc;
                &:hover {
                    text-shadow: 1px 2px 12px white;
                }
            }
        }
        &__more {
            color: rgb(187 187 170 / 40%);
            text-decoration: none;
            font-size: 14px;
            margin-top: 10px;
            cursor: pointer;
            &:hover {
                color: #f5f5dc;
            }
        }
    }
</style>