<template>
  <h2>後台產品列表</h2>
  <div id="app">
    <div class="container">
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openProductModal('create')">
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-end">
              {{ product.origin_price }}
            </td>
            <td class="text-end">
              {{ product.price }}
            </td>
            <td>
              <span v-if="product.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openProductModal('edit', product)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openProductModal('delete', product)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <ProductsModal
      :temporary-products="tempProducts"
      :status="status"
      v-on:get-data="getProducts"
      ref="ProductsModal"
    ></ProductsModal>
    <ProductsDelModal
      :temporary-products="tempProducts"
      @getdata="getProducts" ref="ProductsDelModal"
    ></ProductsDelModal>
    <!-- Modal -->
  </div>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'
import ProductsModal from '@/components/ProductsModal.vue'
import ProductsDelModal from '@/components/ProductsDelModal.vue'
export default {
  data () {
    return {
      products: [],
      tempProducts: {
        imagesUrl: []
      },
      status: '',
      pagination: {}
    }
  },
  components: {
    Pagination,
    ProductsModal,
    ProductsDelModal
  },
  methods: {
    getProducts (page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
        )
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((error) => {
          alert(error.data.message)
        })
    },
    openProductModal (status, product) {
      const productsComponent = this.$refs.ProductsModal
      const productsDel = this.$refs.ProductsDelModal

      if (!product) {
        this.tempProducts = {
          imagesUrl: []
        }
        productsComponent.openModal()
        this.status = 'create'
      } else if (status === 'edit') {
        this.tempProducts = { ...product }
        productsComponent.openModal()
        this.status = 'edit'
      } else if (status === 'delete') {
        this.tempProducts = { ...product }
        productsDel.openModal()
        this.status = 'delete'
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
