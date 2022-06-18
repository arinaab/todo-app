<template>
  <div class="posts">
      <div class="posts__list">
          <div class="posts__item" v-for="post in result" :key="post.id">
              <h3>{{ post.id }}. {{ post.title }}</h3>
              <p>{{ post.body }}</p>
          </div>
      </div>
      <div class="page">
        <div class="page__wrapper">
            <div v-for="pageNumber in totalPages" :key="pageNumber" class="page__item"
            :class="{ 'current-page': page === pageNumber }"
            @click="changePage(pageNumber)">
                {{ pageNumber }}
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            url: `https://jsonplaceholder.typicode.com/posts?_limit=10`,
            result: [],
            page: 1,
            limit: 10,
            totalPages: 0,
            options: [
                { value: 'title', name: 'По названию'},
                { value: 'body', name: 'По содержанию'}
            ]
        }
    },
    methods: {
        async fetchPosts() {
           const res = await fetch(`${this.url}&_page=${this.page}`)

            if (!res.ok) {
                throw new Error(`status: ${res.status}`);
            }

            this.totalPages = Math.ceil(res.headers.get('x-total-count') / this.limit)
            return await res.json()
        },
        changePage(pageNumber) {
            this.page = pageNumber
        }
    },
    watch: {
        page() {
            this.fetchPosts()
                .then(res => {
                    this.result = res;
                })
        }
    },
    mounted() {
        this.fetchPosts()
            .then((res) => this.result = res)
    }
}
</script>

<style lang="scss">
    .posts {
        padding: 30px;
        width: 1060px;
        margin: 0 auto;
        &__item {
            border: 2px solid green;
            width: 1020px;
            min-height: 100px;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 10px 30px;
        }
        &__select {
            margin-bottom: 15px;
        }
    }
    .page {
        &__wrapper {
            display: flex;
            width: 800px;
            justify-content: space-between;
            margin-left: 90px;
        }
        &__item {
            padding: 8px;
            border-radius: 7px;
            font-weight: 700;
            cursor: pointer;
            &:hover {
                box-shadow: 2px 2px 10px black;
            }
        }
    }
    .current-page {
        background-color: rgb(143 188 118);
    }
</style>