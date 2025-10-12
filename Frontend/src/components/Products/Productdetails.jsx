import { useEffect, useState } from "react"

const selectedProduct = {
    name: "Stylish Jacket",
    originalPrice: 59.99,
    price: 39.99,
    material: "Polyester",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black"],
    brand: "Fashion Co.",
    description: "A trendy jacket perfect for all seasons.",
    image: [
        { URL: "https://picsum.photos/500/500?random=1", alt: "Stylish Jacket" },
        { URL: "https://picsum.photos/500/500?random=2", alt: "Stylish Jacket" },
    ]
}

const Productdetails = () => {

const [mainImage, setMainImage]= useState();

useEffect(() => {
    if(selectedProduct?.image?.length>0){
        setMainImage(selectedProduct.image[0].URL)
    }
}, [selectedProduct] );

    return (
        <div className='p-6 max-w-6xl mx-auto bg-white rounded '>
            <div className='flex flex-col md:flex-row'>
                {/* Left thumnails*/}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {selectedProduct.image.map((image, index) =>
                    (
                        <img className="h-20 w-20 rounded-lg cursor-pointer border object-cover"
                            key={index}
                            src={image.URL} alt={image.alt}
                            onClick={() => setMainImage(image.URL)}
                            />
                    ))}
                </div>
                {/* Mobile Thumnail */}
                <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4 mr-6 ">
                    {selectedProduct.image.map((image, index) =>
                    (
                        <img
                            className="rounded border h-20 w-20 cursor-pointer"
                            key={index}
                            src={image.URL}
                            alt={image.alt} />
                    ))}
                </div>

                {/* Main Image */}
                <div className="md:w-1/2">
                    <div className="mb-4 " >
                        <img src={mainImage} alt={selectedProduct.alt}
                            className="w-full h-auto object-cover rounded" />
                    </div>
                </div>


                {/*Right side */}
                <div className="ml-4 ">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                        {selectedProduct.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-1 line-through">

                        ${selectedProduct.originalPrice}

                    </p>
                    <p className="text-lg text-black font-bold mb-1">
                        ${selectedProduct.price}
                    </p>
                    <p className="text-md font-light tracking-tighter ">
                        {selectedProduct.description}
                    </p>
                    <div className="flex gap-2 mt-3">
                        {
                            selectedProduct.colors.map((color) => (
                                <button key={color}
                                    className="w-8 h-8 rounded-full border cursor-pointer"
                                    style={{
                                        backgroundColor: color.toLowerCase(),
                                        filter: "brightness(1)"
                                    }}

                                >

                                </button>
                            ))
                        }
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700">
                            sizes:
                        </p>
                        <div className="flex gap-3 mt-2">
                            {selectedProduct.sizes.map((size) => (
                                <button
                                    key={size}
                                    className="px-4 py-3 rounded border cursor-pointer
                                    hover:bg-green-700 hover:text-white"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="text-lg mb-6 ">
                        <p className="py-2 px-1 text-lg ">
                            Quantity:
                        </p>
                        <div>
                            <button className="px-2 py-1 bg-gray-200 rounded">
                                -
                            </button>
                            <span className="px-2">
                                1
                            </span>
                            <button className="px-2 py-1 bg-gray-200 rounded">
                                +
                            </button>
                        </div>
                        <div className="py-4">
                            <button className="bg-black text-white py-2 px-6 rounded w-full
                                cursor-pointer hover:bg-gray-800  ">
                                Add to cart
                            </button>
                        </div>

                    </div>

                    <div className="mt-10 text-gray-700">
                        <h3 className="text-xl font-bold mb-4 ">Characteristics: </h3>
                        <table className="w-full text-left text-sm text-gray-600 border">
                            <tbody>
                                <tr className="border">
                                    <td className="py-1"> Brand</td>
                                    <td> {selectedProduct.brand}</td>
                                </tr>
                                <tr className="border">
                                    <td className="py-1"> Material:</td>
                                    <td> {selectedProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Productdetails