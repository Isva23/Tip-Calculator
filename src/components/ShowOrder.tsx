import { MenuItem, OrderItem } from "../types";

interface ShowOrderProps {
    order : OrderItem[]
    removeItem : (id : MenuItem['id']) => void
}
const ShowOrder = ({order,removeItem} : ShowOrderProps) => {
    const isEmpty = order.length === 0
    return (
        <div>
            <h2 className=" font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-10">
                {isEmpty ?
                    <p className="text-center">La orden esta vacia</p>
                    :   (
                        order.map( item => (
                            <div key={item.id} className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b">
                                <div>
                                    <p className=" text-lg">
                                        {item.name} - ${item.price}
                                    </p>

                                    <p className="font-black">
                                        Cantidad : {item.quantity} - ${item.price * item.quantity}
                                    </p>
                                </div>


                                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={()=>removeItem(item.id)}>X</button>
                            </div>
                        ))
                        )
                }
            </div>

        </div>
    )
}

export default ShowOrder
