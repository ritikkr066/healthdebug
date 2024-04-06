import { PiCurrencyInrBold } from "react-icons/pi";

const MediCard = ({ name ,price , id}) => {
    return (
        <div className="border w-[300px] flex justify-between mt-4 mr-4 p-4">
            <div className="flex flex-col">
                <div className="text-2xl font-semibold">{name}</div>
                <div className="text-1xl flex">{price}<PiCurrencyInrBold /></div>
            </div>
            <button className="border">Add to cart </button>
        </div>
    )
}
export default MediCard