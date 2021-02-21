app.component('product-display', {

    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template: 
    /*html */
    `
    <div class="product-display">
          <div class="product-container">
            <div class="product-image">
              <img :src="image" :alt="alt">
            </div>
            <div class="product-info">
              <h1>{{ title }}</h1>
              <!-- <p v-if="inventory > 10">Stokta</p>
              <p v-else-if="inventory <= 10 && inventory >0">Tükenmek Üzere</p>
              <p v-else>Stokda Yok</p>
              <p v-if="onSale">Satışta</p> -->
              <p v-if="inStock">Stokta Var</p>
              <p v-else>Stokta Yok</p>
              <p>Shipping: {{shipping}}</p>
              <ul>
                <li v-for="detail in details">{{detail}}</li>
              </ul>

              <div 
              v-for="(variant, index) in variants" 
              :key="variant.id" 
              v-on:click="updateVariant(index)"
              class="color-circle"
              :style="{backgroundColor: variant.color}">
              </div>
              
              <button 
              class="button" 
              :class="{disabledButton: inStock}"
              :disabled="inStock"
              v-on:click="addtoCart">
              Sepete Ekle
              </button>
            
            </div>
          </div>
        </div>

        <ul>
         <li v-for="hobi in hobbies">{{hobi.id}}. {{hobi.name}} </li>
        </ul>`,

        data() {
            return {
                cart:0,
                product: 'Çorap',
                brand: 'VueMastery',
                //image: './assets/images/socks_green.jpg',
                selectedVariant:0,
                alt: 'Çorap Resmi',
                github: 'https://github.com/cnahmetcn',
               // inventory: 15,
                inStock: false,
                details: ['%50 Pamuk', '%30 Yün', '%20 Polyester'],
                variants: [
                    {id: 2234, color: 'green',image: './assets/images/socks_green.jpg', quantity:10},
                    {id: 2235, color: 'blue',image: './assets/images/socks_blue.jpg', quantity:0}
                ],
                // hobbies: [
                //     {id: 1, name: 'Uzay'},
                //     {id: 2, name: 'Formula 1'},
                //     {id: 3, name: 'Fenerbahçe'},
                //     {id: 4, name: 'Snooker'},
                //     {id: 5, name: 'Kod yazmak'},
                // ],
                
            }
        },
        methods: {
            addtoCart() {
               this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
               /* 
               this.cart += 1
               component olarak ayırdığımız için cart ı görmüyor.
               bu yüzden emit kullanmamız gerekiyor.
               */
                //this.inventory -=1
            },
            updateVariant(index) {
                this.selectedVariant = index
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            shipping() {
                if(this.premium){
                    return 'Free'
                }
                return 5
            }
        }
})