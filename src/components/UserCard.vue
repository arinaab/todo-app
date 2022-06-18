<template>
    <div class="users__item">
        <h4 class="users__info"><span>name:</span> {{ name }}</h4>
        <h4 class="users__info"><span>username:</span> {{ username }}</h4>
        <router-link class="users__more" :to="{ name: 'currentUser', params: {id: id }}">Подробнее о пользователе</router-link>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },
        username: {
            type: String
        },
        id: {
            type: Number
        }
    },
}
</script>

<style>

</style>