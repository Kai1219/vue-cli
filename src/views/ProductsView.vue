<template>
  <h2>購物列表</h2>
  <div class="container">
    <!--row決定內層數量 g決定card之間寬度-->
    <div class="row row-cols-1 row-cols-lg-4 g-5">
      <!--內層不定義寬度-->
      <div class="col" v-for="product in products" :key="product.id">
        <!--g決定card高度-->
        <div class="card h-100">
          <img :src="product.imageUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
          </div>
          <div class="card-footer">
            <router-link :to="`/product/${product.id}`" class="btn btn-primary"
              >點我看更多</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      )
        .then((res) => {
          this.products = res.data.products
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
