import Image from "next/image";
import { Product } from "../types/product";
import { useCart } from "../context/CartContext";

function ProductGrid({ products }: { products: Product[] }) {
  const { addToCart, increaseQty, decreaseQty, getQuantity } = useCart();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-6">
      {products.map((product) => {
        const quantity = getQuantity(product.id); // ✅ moved inside
        return (
          <div key={product.id} className="bg-white rounded-xl shadow-sm p-3">
            <div className="relative h-40 w-full mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg w-full h-full"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            <p className="text-xs text-green-600 font-medium">8 MINS</p>

            <h3 className="text-sm font-medium mt-1 line-clamp-2">
              {product.name}
            </h3>

            <p className="text-xs text-gray-500 mt-1">{product.weight}</p>

            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-semibold">₹{product.price}</p>
                {product.oldPrice && (
                  <p className="text-xs text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </p>
                )}
              </div>

              {/* {product.inStock ? (
              <button className="bg-green-500 text-white text-sm px-4 py-1.5 rounded-md">
                ADD
              </button>
            ) : (
              <span className="text-red-500 text-xs">
                Out of Stock
              </span>
            )} */}

              {product.inStock ? (
                quantity === 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-green-500 text-white text-sm px-4 py-1.5 rounded-md"
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center gap-2 bg-green-500 text-white px-2 py-1 rounded-md">
                    <button onClick={() => decreaseQty(product.id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQty(product.id)}>+</button>
                  </div>
                )
              ) : (
                <span className="text-red-500 text-xs">Out of Stock</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
