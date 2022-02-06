<template>
  <div class="card">
    <img :src="item.imgLink" alt="Denim Jeans" style="width:100%">
    <h1>{{item.name}}</h1>
    <p class="price">{{displayPrice}}</p>
    <p>{{item.desc}}</p>
    <p><button @click="addToCart">{{addToCartLabel}}</button></p>
  </div>
</template>
<script>
export default {
  name: 'product-card',
  // props contains the information passed by the parent component
  props: ['item'],
  data() {
    return {
      addToCartLabel: 'Add to Cart'
    }
  },
  computed: {
    displayPrice () {
      return '₱'+this.item.price
    }
  },
  methods: {
    addToCart () {
      if (this.addToCartLabel != 'Added') {
        // $emit is used to tell the parent component about an event in the child component
        this.$emit('addToCart', this.item.name)
        this.addToCartLabel = 'Added'
      }
      
    }
  },
}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>