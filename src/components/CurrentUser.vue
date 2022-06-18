<template>
  <div class="user">
      <router-link class="user__link" :to="{ name: 'users' }">Вернуться к списку пользователей</router-link>
      <div class="user__wrapper">
          <div class="user__item">
                <h4 class="user__data"><span>Name:</span> {{ currentUser.name }}</h4>
                <h5 class="user__data"><span>Username:</span> {{ currentUser.username }}</h5>
                <p class="user__data"><span>E-mail:</span> {{ currentUser.email }}</p>
                <p class="user__data"><span>City:</span> {{ currentUser.address.city }}</p>
                <p class="user__data"><span>Street:</span> {{ currentUser.address.street }}</p>
                <p class="user__data"><span>Phone:</span> {{ currentUser.phone }}</p>
                <p class="user__data"><span>Website:</span> {{ currentUser.website }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('users', ['getUsers'])
    },
    data() {
        return {
            currentUser: null
        }
    },
    created() {
        const user = this.getUsers.find(user => user.id == this.$route.params.id);
        if (user) {
            this.currentUser = user;
            // console.log(this.currentUser);
        }
    }
}
</script>

<style lang="scss">
    .user {
        padding: 30px;
        background-color: rgb(26, 24, 24);
        min-height: 800px;
        &__link {
            text-decoration: none;
            color: white;
            display: block;
            margin-bottom: 20px;
            &:hover {
                text-shadow: 1px 2px 12px white;
            }
        }
        &__wrapper {
            border: 2px solid rgb(0, 221, 255);
            min-height: 500px;
        }
        &__item {
            padding: 20px;
            display: flex;
            min-height: 430px;
            flex-direction: column;
            align-items: baseline;
            justify-content: space-between;
        }
        &__data {
            color: rgb(0, 221, 255);
            font-size: 23px;
            span {
                color: white;
                font-weight: 200;
            }
        }
    }
</style>