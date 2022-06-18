<template>
  <div class="photos">
      <div v-show="isPhotosLoaded">Загрузка...</div>
      <div class="photos__wrapper">
          <photo-card 
          v-for="photo in result" 
          :key="photo.id"
          :title="photo.title"
          :id="photo.id"
          :src="photo.url"></photo-card>
      </div>
  </div>
</template>

<script>
import PhotoCard from '@/components/PhotoCard.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
    components: {
        PhotoCard
    },
    data() {
        return {
            url: 'https://jsonplaceholder.typicode.com/photos',
            limit: 20,
            result: [],
            isPhotosLoaded: false,
        }
    },
    methods: {
        ...mapMutations('photos', ['ADD_SPREAD']),
        async fetchPhotos() {
            this.isPhotosLoaded = true;
            const res = await fetch(`${this.url}?_limit=${this.limit}`)

            if (!res.ok) {
                throw new Error(`status: ${res.status}`)
            }

            return await res.json()
        }
    },
    computed: {
        ...mapGetters('photos', ['getPhotosState'])
    },
    created() {
        this.fetchPhotos()
            .then(res => {
                this.result = res;
                this.ADD_SPREAD(this.result);
            })
            .finally(() => {
                this.isPhotosLoaded = false;
            })
    }
}
</script>

<style lang="scss">
    .photos {
        padding: 30px;
        &__wrapper {
            border: 1px solid black;
            width: 1100px;
            min-height: 600px;
            margin: 0 auto;
            padding: 10px;
            display: flex;
            justify-content: flex-start;
            gap: 30px;
            flex-wrap: wrap;
        }
        &__item {
            width: 335px;
            min-height: 220px;
            border: 1px solid green;
            border-radius: 15px;
            margin-bottom: 15px;
            padding: 8px;
            display: grid;
            grid-template-columns: 320px;
            grid-template-rows: 45px 152px 30px;
        }
        &__title {
            grid-row: 1/2;
        }
        &__img {
            width: 250px;
            height: 150px;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
            }
        }
        &__link {
            text-decoration: none;
            color: black;
            &:hover {
                color: #2c3e50;
                font-weight: 700;
            }
        }
    }
</style>