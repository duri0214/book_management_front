<template>
  <article class="container" v-if="book">
    <nav id="back"><a href="/" title="前ページへ戻る"><img src="@/assets/pagination/back.png" alt="back"></a></nav>
    <p class="book-category" :style="{'color': book.category.color}">{{ book.category.name }}</p>
    <h1 class="book-title">{{ book.name }}</h1>
    <figure>
      <img :src="book.thumbnail" :alt="book.name" class="thumbnail">
    </figure>
    <ul>
      <li>出版年月日: {{ book.publication_date }}</li>
      <li>著者: {{ book.author.name }}</li>
      <li>仕入れ日: {{ book.created_at }}</li>
      <li>仕入れ数: {{ book.amount }}</li>
      <li>あらすじ: {{ book.lead_text }}</li>
      <li>isbn: {{ book.isbn }}</li>
    </ul>
    <nav id="top"><a @click="scrollTop" title="一番上まで戻る"><img src="@/assets/pagination/top.png" alt="top"></a></nav>
  </article>
</template>

<script>
export default {
  name: 'Book',
  props: {
    id: { type: Number }
  },
  data () {
    return {
      book: null
    }
  },
  created () {
    this.$http(`${this.$httpBooks}${this.id}/`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.book = data
      })
  },
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
#back {
  margin-bottom: 80px;
}
#back a {
  cursor: pointer;
  width: 44px;
  display: inline-block;
}
#top a {
  cursor: pointer;
  color: #999;
  display: inline-block;
  width: 44px;
}
.book-category {
  font-size: 12px;
}
.book-title {
  font-weight: bold;
  font-size: 14px;
}
@media (min-width: 768px) {
  .book-title {
    width: 440px;
  }
}
</style>
