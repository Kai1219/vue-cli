<template>
  <div
    class="modal fade"
    id="delProductModal"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="delProductModalLabel">確定是否刪除!</h5>
          <button
            type="button"
            class="btn-close"
            @click="closeProductModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            是否刪除<strong class="text-danger">{{
              temporaryProducts.title
            }}</strong
            >?(刪除後將無法復原!!)
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeProductModal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct">
            確定刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: ['temporaryProducts'],
  data () {
    return {}
  },
  mixins: [modalMixin],
  methods: {
    deleteProduct () {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.temporaryProducts.id}`,
          { data: this.temporaryProducts }
        )
        .then((res) => {
          this.$emit('getdata')
          alert(res.data.message)
        })
        .catch((error) => {
          console.dir(error)
          alert(error.data.message)
        })
      this.modal.hide()
    }
  }
}
</script>
