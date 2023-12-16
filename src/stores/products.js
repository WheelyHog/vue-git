import {defineStore} from 'pinia'
import {products as productList} from "@/data/products";
import {categories as categoriesList} from "@/data/categories";


export const productsStore = defineStore("products", {
    state: () => ({
        products: [],
        categories: [],
        categoriesToShow: [],
        cart: [],
        theme: Boolean(true)
    }),
    actions: {
        fetchAllProducts() {
            this.products = productList
        },
        fetchAllCategories() {
            this.categories = categoriesList
        },
        fetchCategoriesToShow() {
            this.categoriesToShow = categoriesList.slice(0, 5)
            console.log(this.categoriesToShow)
        },
    }
})
