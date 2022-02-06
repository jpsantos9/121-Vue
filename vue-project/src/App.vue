<template>
  <div id="app">
    <h1>Shopee</h1>
    <div class="row">
      <div v-for="product in productList" :key="product.name" class="column">
        <!-- 3. include the component in the template -->
        <product-card :item="product" @addToCart="addItem"/>
      </div>
    </div>
    <cart-list :cartList="cartList"/>
  </div>
</template>

<script>
// 1. first you have to import the component that you will use
import ProductCard from './components/ProductCard.vue'
import CartList from './components/CartList.vue'

export default {
  name: 'app',
  // 2. components is where you include all the components that you will use
  components: {
    ProductCard,
    CartList
  },
  data () {
    return {
      productList: [
        {name: 'Pen', price: 10, desc: 'tool to write things down', imgLink: 'data:image/png;base64,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'},
        {name: 'Paper', price: 100, desc: 'plain white sheet', imgLink: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg'},
        {name: 'Brush', price: 20, desc: 'tool to paint with', imgLink: 'https://www.ikea.com/ph/en/images/products/fixa-paint-brush-set__0710247_pe727425_s5.jpg?f=s'}
      ],
      cartList: ['Tape']
    }
  },
  methods: {
    addItem (value) {
      this.cartList.push(value)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}

h1 {
  margin-left: 10px;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 23%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
