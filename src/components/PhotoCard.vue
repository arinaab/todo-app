<template>
    <div class="photos__item">
        <p class="photos__title">{{ title }}</p>
        <div class="photos__img">
            <img :src="src" :alt="id">
        </div>
        <router-link class="photos__link" :to="{ name: 'currentPhoto', params: { id: id}}">Посмотреть полностью</router-link>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        src: {
            type: String
        },
        id: {
            type: Number
        }
    }
}
</script>

<style>

</style>