<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: fot-tsukuardgothic-std, sans-serif;
    line-height: 1.5;
    font-size: 14px;
  }

  .container {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .container {
      width: 700px;
      padding: 0;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    .container {
        width: 980px;
    }
  }
</style>
