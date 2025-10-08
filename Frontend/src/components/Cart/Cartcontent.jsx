import { RiDeleteBin6Line } from "react-icons/ri";

const Cartcontent = () => {

    const cartProducts = [
        {
            id: 1,
            name: "T-shirt ",
            size: "M",
            color: "Red",
            price: 29.99,
            quantity: 1,
            image: "https://picsum.photos/200?random=1"
        },
        {
            id: 2,
            name: "Jeans",
            size: "M",
            color: "black",
            price: 9.99,
            quantity: 1,
            image: "https://picsum.photos/200?random=2"
        },
    ];

    return (
        <div>
            {cartProducts.map((product, id) =>(
                <div key={id} className="flex items-start justify-between p-4 border-b ">
                    <div className="flex items-start">
                        <img className="w-20 h-24  rounded object-cover mr-4"
                        src={product.image} alt="product.name" />
                    </div>
                    {/* Product details */ }
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                            {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm ">
                            size:{product.size} | color: {product.color}
                        </p>
                        <br />

                        <div className="flex items-center justify-evenly mt-2">
                            <button className="border rounded px-2 py-1 text-xl font-medium ">+</button>
                            <span className="mx-4 text-lg font-medium">{product.quantity}
                            </span>
                            <button className="border rounded px-2 py-1 text-xl font-medium ">-</button>
                        </div>
                        
                    </div>
                    {/* price and delete item section */}
                    <div>
                            <p className="text-lg font-semibold mb-4">
                                Price $ {product.price.toLocaleString()} {/*used to give the numbers in a formatted string  */}
                            </p>
                            <button className="text-red-500 hover:text-red-700 ">
                                <RiDeleteBin6Line />
                            </button>
                        </div>

                </div>
            ))}
        </div>
    )
}

export default Cartcontent