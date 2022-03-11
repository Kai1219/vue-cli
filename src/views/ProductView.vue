<template>
  <h2>單一產品頁面</h2>
  <div class="container">
    <div class="card mb-3" style="flex-direction: row">
      <img :src="product.imageUrl" class="card-img-top img-fluid" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">
          {{ product.description }}
        </p>
        <p class="card-text">
          <small class="text-muted">{{ product.content }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProducts () {
      const { id } = this.$route.params
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      )
        .then((res) => {
          this.product = res.data.product
        })
        .catch((error) => {
          alert(error.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
