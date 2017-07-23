<template>
  <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">{{ msg }}</h1>
        <b-form-input v-model="text"
                  size="lg"
                  type="text"
                  placeholder="Enter a name, a profile url, or an enterprise name"
        ></b-form-input>
        <div class="btn-control">
          <a href="#" class="btn btn-primary">Main call to action</a>
          <a href="#" class="btn btn-secondary">Secondary action</a>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'ScrapMail',
      text: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-bottom: 7%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.btn-control{
  margin-top: 7%;
}
</style>
