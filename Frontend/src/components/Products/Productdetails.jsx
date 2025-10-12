
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
    return (
        <div className='p-6 max-w-6xl mx-auto bg-white rounded '>
            <div className='flex flex-col md:flex-row'>
                {/* Left thumnails*/}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {selectedProduct.image.map((image, index) =>
                    (
                        <img className="h-20 w-20 rounded-lg cursor-pointer border object-cover"
                            key={index}
                            src={image.URL} alt={image.alt} />
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
                        <img src={selectedProduct.image[0]?.URL} alt={selectedProduct.alt}
                            className="w-full h-auto object-cover rounded" />
                    </div>
                </div>


                {/*Right side */}
                <div className="ml-4 ">
                    <div className="container">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdetails