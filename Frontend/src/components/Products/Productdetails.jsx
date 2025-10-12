import { useEffect, useState } from "react";

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
    ],
};

const Productdetails = () => {
    const [mainImage, setMainImage] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [selectedColor, setSelectedColor] = useState();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (selectedProduct?.image?.length > 0) {
            setMainImage(selectedProduct.image[0].URL);
        }
    }, []);

    // Handlers for quantity control

    return (
        <div className="p-6 max-w-6xl mx-auto bg-white rounded">
            <div className="flex flex-col md:flex-row">
                {/* ---------- Left: Thumbnails ---------- */}
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                    {selectedProduct.image.map((image, index) => (
                        <img
                            key={index}
                            src={image.URL}
                            alt={image.alt}
                            onClick={() => setMainImage(image.URL)}
                            className={`h-20 w-20 rounded-lg cursor-pointer border object-cover ${mainImage === image.URL ? "border-black" : "border-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* ---------- Mobile Thumbnails ---------- */}
                <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4 mr-6">
                    {selectedProduct.image.map((image, index) => (
                        <img
                            key={index}
                            src={image.URL}
                            alt={image.alt}
                            onClick={() => setMainImage(image.URL)}
                            className={`rounded border h-20 w-20 cursor-pointer object-cover ${mainImage === image.URL ? "border-black" : "border-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* ---------- Main Image ---------- */}
                <div className="md:w-1/2">
                    <div className="mb-4">
                        <img
                            src={mainImage}
                            alt={selectedProduct.alt}
                            className="w-full h-auto object-cover rounded"
                        />
                    </div>
                </div>

                {/* ---------- Right Side: Details ---------- */}
                <div className="md:ml-8 mt-4 md:mt-0">
                    {/* Product Info */}
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                        {selectedProduct.name}
                    </h1>

                    <p className="text-lg text-gray-600 mb-1 line-through">
                        ${selectedProduct.originalPrice}
                    </p>

                    <p className="text-lg text-black font-bold mb-2">
                        ${selectedProduct.price}
                    </p>

                    <p className="text-md font-light tracking-tight mb-4">
                        {selectedProduct.description}
                    </p>

                    {/* Colors */}
                    <div className="flex gap-2 mb-5">
                        {selectedProduct.colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color
                                        ? "border-4 border-black"
                                        : "border-gray-300"
                                    }`}
                                style={{ backgroundColor: color.toLowerCase() }}
                            ></button>
                        ))}
                    </div>

                    {/* Sizes */}
                    <div className="mb-6">
                        <p className="text-gray-700 mb-2">Sizes:</p>
                        <div className="flex gap-3">
                            {selectedProduct.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 rounded border cursor-pointer ${selectedSize === size
                                            ? "bg-black text-white border-black"
                                            : "border-gray-300"
                                        } hover:bg-black hover:text-white transition`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="mb-8">
                        <p className="text-lg mb-2">Quantity:</p>
                        <div className="flex items-center gap-3">
                            <button
                                
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                -
                            </button>
                            <span className="px-3">{quantity}</span>
                            <button
                                
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                +
                            </button>
                        </div>

                        <div className="py-4">
                            <button className="bg-black text-white py-2 px-6 rounded w-full cursor-pointer hover:bg-gray-800 transition">
                                Add to cart
                            </button>
                        </div>
                    </div>

                    {/* Characteristics */}
                    <div className="mt-10 text-gray-700">
                        <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                        <table className="w-full text-left text-sm text-gray-600">
                            <tbody>
                                <tr>
                                    <td className="py-1 font-medium">Brand:</td>
                                    <td>{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-medium">Material:</td>
                                    <td>{selectedProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;
