<template>
    <div class="current-photo">
        <img :src="currentPhoto.url" :alt="currentPhoto.id">
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "CurrentPhoto.vue",
        data() {
            return {
                currentPhoto: null,
            }
        },
        computed: {
            ...mapGetters('photos', ['getPhotosState'])
        },
        created() {
            const photo = this.getPhotosState.find(photo => photo.id == this.$route.params.id);
            if (photo) {
                this.currentPhoto = photo;
            }
        }
    }
</script>

<style scoped lang="scss">
    .current-photo {
        width: 600px;
        height: 600px;
        margin: 20px auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>