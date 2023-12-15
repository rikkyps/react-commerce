import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart } from "../cart/cartSlice"

const ProductList = () => {
    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState(false)
    let dispatch = useDispatch()
    
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json()
                setProducts(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        console.log(products)
        fetchProducts()
    }, [])

    const handleOnClick = (product) => {
        dispatch(addItemToCart(product))
    }

    return (
        <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-4">
            {products.map((product) => {
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
            })}
        </div>
    )
}

export default ProductList