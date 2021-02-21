// const app = Vue.createApp({ // Creating a Vue App
//     data() {
//         return {
//             // cart:0,
//             cart:[],
//             premium: true
//         }
//     },
//     methods: {
//         updateCart(id) {
//             //this.cart += 1
//             this.cart.push(id)
//         }
//     }
// })


const app = Vue.createApp({
	data() {
		return {
			cart: [],
			premium: true
		};
	},
	methods: {
		updateCart(id) {
			this.cart.push(id);
		}
	}
});