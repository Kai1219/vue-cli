<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">前台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/products" class="nav-link">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/adminproducts" class="nav-link">前往後台</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary">
        結帳
        <span class="badge bg-danger">{{ cartData.carts.length }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((error) => {
          alert(error.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-Cart', () => {
      this.getCart()
    })
  }
}
</script>
