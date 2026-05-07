import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const sizes = ["S", "M", "L", "XL"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 border-4 border-black">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1637185766875-b64f2c6fff57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Multi-colored Landscape Graphic Hoodie"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="py-8">
          <h1 className="text-5xl mb-4">
            Multi-colored Landscape Graphic Hoodie
          </h1>

          <p className="text-4xl mb-8 border-b-4 border-black pb-6">
            $189.00
          </p>

          <p className="text-2xl mb-12 leading-relaxed">
            Premium heavyweight cotton hoodie featuring an exclusive landscape graphic design.
            Crafted for both comfort and style, this piece combines streetwear aesthetics with
            luxury quality materials.
          </p>

          {/* Size Selection */}
          <div className="mb-12">
            <label className="block text-3xl mb-6">
              Select Size <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-4">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-24 h-24 text-2xl border-4 transition-all ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black hover:bg-gray-100"
                  }`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
            {!selectedSize && (
              <p className="text-xl mt-3 text-gray-600">
                Please select a size to continue
              </p>
            )}
          </div>

          {/* Quantity */}
          <div className="mb-12">
            <label className="block text-3xl mb-6">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-16 h-16 text-3xl bg-white border-4 border-black hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="text-3xl w-16 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-16 h-16 text-3xl bg-white border-4 border-black hover:bg-gray-100 transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white text-3xl py-8 hover:bg-gray-800 transition-colors border-4 border-black mb-6"
          >
            ADD TO CART
          </button>

          <Link
            to="/men"
            className="block w-full text-center bg-white text-black text-2xl py-6 border-4 border-black hover:bg-gray-100 transition-colors"
          >
            CONTINUE SHOPPING
          </Link>

          {/* Product Details */}
          <div className="mt-12 pt-12 border-t-4 border-black">
            <h2 className="text-3xl mb-6">
              Product Details
            </h2>
            <ul className="text-xl space-y-3 list-disc list-inside">
              <li>100% Premium Cotton</li>
              <li>Heavyweight Fabric (450 GSM)</li>
              <li>Relaxed Fit</li>
              <li>Ribbed Cuffs and Hem</li>
              <li>Adjustable Drawstring Hood</li>
              <li>Front Kangaroo Pocket</li>
              <li>Machine Washable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
