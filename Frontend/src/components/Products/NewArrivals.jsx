import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewArrivals = () => {


    

    const newArrivals = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            image: [{ URL: "https://picsum.photos/500/500?random=1", alt: "Stylish Jacket" }],
        },
        {
            _id: "2",
            name: "Casual Hoodie",
            price: 99,
            image: [{ URL: "https://picsum.photos/500/500?random=2", alt: "Casual Hoodie" }],
        },
        {
            _id: "3",
            name: "Denim Shirt",
            price: 85,
            image: [{ URL: "https://picsum.photos/500/500?random=3", alt: "Denim Shirt" }],
        },
        {
            _id: "4",
            name: "Denim Shirt",
            price: 85,
            image: [{ URL: "https://picsum.photos/500/500?random=4", alt: "Denim Shirt" }],
        },
        {
            _id: "5",
            name: "Denim Shirt",
            price: 85,
            image: [{ URL: "https://picsum.photos/500/500?random=5", alt: "Denim Shirt" }],
        },
    ];

    return (
        <section>
            <div className="container mx-auto text-center mb-10 relative ">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover the latest additions to our collection. Fresh styles,
                    new trends, and must-have pieces just for you.
                </p>

                {/* Scroll Buttons */}
                <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                    <button className="p-2 bg-white text-black cursor-pointer shadow rounded-2xl hover:bg-gray-200">
                        <FaChevronLeft className="text-2xl" />
                    </button>
                    <button className="p-2 bg-white text-black cursor-pointer shadow rounded-2xl hover:bg-gray-200">
                        <FaChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="container mx-auto mb-10 flex space-x-6 relative overflow-x-auto scrollbar-hide">
                {newArrivals.map((product) => (
                    <div
                        key={product._id}
                        className="relative min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] rounded-lg overflow-hidden"
                    >
                        <img
                            src={product.image[0]?.URL}
                            alt={product.image[0]?.alt || product.name}
                            className="w-full h-auto object-cover rounded"
                        />

                        <div className="absolute right-0 left-0 bottom-0 bg-black/50 backdrop-blur-md rounded-b-lg text-white p-4 text-center">
                            <Link to={`/product/${product._id}`} className="block">
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="mt-1">${product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;
