<template>
  <div class="basket">
    <div class="items">

      <template v-if="cartProducts.length > 0">
      <div class="item" v-for="cartItem in this.cartProducts" v-bind:key="cartItem.id">
        <div class="remove" @click="$store.dispatch('removeFromCart', cartItem.id)">Remove item</div>
        <div class="photo"><img :src="cartItem.image" alt=""></div>
        <div class="description">{{cartItem.title}} </div>
        <div class="price">
          <span class="quantity-area">
            <button :disabled="cartItem.quantity<= 1" @click="cartItem.quantity--">-</button>
            <span class="quantity">{{cartItem.quantity}}</span>
            <button @click="cartItem.quantity++" >+</button>
          </span>
          <span class="amount">US$ {{ (cartItem.price * cartItem.quantity).toFixed(2) }}</span>
        </div>
      </div>
      <div class="grand-total"> Grand Total: US$ {{ total() }}</div>
    </template>
    <template v-else>
      <h3>There are no items in your cart yet</h3>
    </template>

    </div>
  </div>
</template>

<script>
 import { mapState } from 'vuex';
  
export default {
  name: 'ShoppingBasket',

  methods: {
    total() {
      let total = 0;
      this.cartProducts.forEach(item => {
        total += item.price * item.quantity
      })
      return total.toFixed(2)
    }
  },
  computed: 
      mapState(['cartProducts'])
 
}
</script>

<style lang="scss">
.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>

