import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart } from "../cart/cartSlice"
import { fetchProducts, allProducts } from "./productSlice"

const ProductList = () => {
    let [products, setProducts] = useState([])
    let dispatch = useDispatch()
    let productState = useSelector(allProducts)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleOnClick = (product) => {
        dispatch(addItemToCart(product))
    }

    return (
        <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-4">
            {productState.isLoading ? <span className="loading loading-bars loading-lg text-center"></span> : productState.data.length > 0 ?
                productState.data.map((product) => {
                    return (
                        <div key={product.id} className="bg-white w-full rounded-xl border shadow p-4">
                            <div className="group relative w-[80%] h-[250px] mx-auto overflow-hidden">
                                <img src={product.image} alt={product.title} className="w-full h-full object-contain group-hover:scale-110 transition-scale duration-500 ease-in-out" />
                            </div>
                            <div className="flex flex-col gap-6 mt-8">
                                <button type="button" className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8"
                                    onClick={() => handleOnClick(product)}>
                                    Buy Now
                                </button>
                            </div>
                            <h3 className="font-bold">{product.title}</h3>
                            <h3>{product.price}</h3>
                        </div>
                    )
                }) : <h1 className="text-center">Data gagal dimuat..</h1>}
        </div>
    )
}

export default ProductList