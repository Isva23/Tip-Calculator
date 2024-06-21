import { OrderItem } from "../types";

interface ConsumoItemProps {
    item : OrderItem
}
 
const ConsumoItem = ({item} : ConsumoItemProps) => {
    return (
        <div className="w-full p-3 flex justify-between">
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    )
}
 
export default ConsumoItem;