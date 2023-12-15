import { useSelector } from "react-redux"
import Modal from "../../components/Modal"
import { selectCartItems } from "./cartSlice"

const CartModal = () => {
    const cartItems = useSelector(selectCartItems)
    return (
        <Modal>
            <div className="flex flex-col gap-6 p-1: sm:p-2 w-full lg:w-[900px]">
                <div className="">
                    {cartItems.map((item) => {
                        return <div key={item.id}
                            className="w-full border-b-4 border-blue-200 pb-2">
                            <div className="w-[120px] h-auto overflow-hidden">
                                <img src={item.image} alt={item.title} className="" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Modal>
    )
}

export default CartModal