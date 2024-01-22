import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterProduct } from "../features/productlist/productSlice"

const Filter = () => {
    let [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleOnChange = () => {
        dispatch(filterProduct(search))
    }

    return (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Pencarian</label>
                <div className="mt-2">
                    <input type="text" onKeyUp={handleOnChange} onChange={(e) => setSearch(e.target.value)} name="first-name" value={search} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </div>
    )
}

export default Filter