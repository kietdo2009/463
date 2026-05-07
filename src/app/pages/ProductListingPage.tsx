import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const products = [
  {
    id: "graphic-hoodie",
    name: "Multi-colored Landscape Graphic Hoodie",
    price: "$189.00",
    image: "https://images.unsplash.com/photo-1637185766875-b64f2c6fff57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "men"
  },
  {
    id: "classic-hoodie",
    name: "Classic Black Premium Hoodie",
    price: "$159.00",
    image: "https://images.unsplash.com/photo-1622866654199-d36cf0709720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "men"
  },
  {
    id: "urban-jacket",
    name: "Urban Streetwear Jacket",
    price: "$249.00",
    image: "https://images.unsplash.com/photo-1563504520138-06ce900dcc10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "men"
  },
  {
    id: "luxury-coat",
    name: "Luxury Wool Blend Coat",
    price: "$449.00",
    image: "https://images.unsplash.com/photo-1768745294179-693a07a3f054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc4MTIyNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "men"
  },
  {
    id: "designer-tee",
    name: "Designer Logo T-Shirt",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1773236237682-5b5d5d771f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "men"
  },
  {
    id: "premium-jeans",
    name: "Premium Denim Jeans",
    price: "$199.00",
    image: "https://images.unsplash.com/photo-1773848091077-6d7de678f749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "men"
  },
];

export default function ProductListingPage() {
  const location = useLocation();
  const category = location.pathname.slice(1);

  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Black", "White", "Gray", "Multi-colored", "Blue", "Red"];
  const priceRanges = ["Under $100", "$100 - $200", "$200 - $300", "Over $300"];

  const toggleFilter = (value: string, selected: string[], setSelected: (v: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-6xl mb-12 uppercase">
        {category === "men" ? "Men's Clothing" : category === "women" ? "Women's Clothing" : "Accessories"}
      </h1>

      <div className="flex gap-12">
        {/* Filters Sidebar */}
        <aside className="w-80 shrink-0 bg-gray-50 p-8 border-4 border-black">
          <h2 className="text-3xl mb-8 border-b-4 border-black pb-4">
            FILTERS
          </h2>

          {/* Size Filter */}
          <div className="mb-10">
            <h3 className="text-2xl mb-4">
              Size
            </h3>
            <div className="space-y-3">
              {sizes.map(size => (
                <label key={size} className="flex items-center gap-3 cursor-pointer text-xl">
                  <input
                    type="checkbox"
                    checked={selectedSize.includes(size)}
                    onChange={() => toggleFilter(size, selectedSize, setSelectedSize)}
                    className="w-6 h-6 accent-black"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-10">
            <h3 className="text-2xl mb-4">
              Color
            </h3>
            <div className="space-y-3">
              {colors.map(color => (
                <label key={color} className="flex items-center gap-3 cursor-pointer text-xl">
                  <input
                    type="checkbox"
                    checked={selectedColor.includes(color)}
                    onChange={() => toggleFilter(color, selectedColor, setSelectedColor)}
                    className="w-6 h-6 accent-black"
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-10">
            <h3 className="text-2xl mb-4">
              Price Range
            </h3>
            <div className="space-y-3">
              {priceRanges.map(range => (
                <label key={range} className="flex items-center gap-3 cursor-pointer text-xl">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === range}
                    onChange={() => setPriceRange(range)}
                    className="w-6 h-6 accent-black"
                  />
                  <span>{range}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setSelectedSize([]);
              setSelectedColor([]);
              setPriceRange("");
            }}
            className="w-full bg-black text-white text-xl py-4 hover:bg-gray-800 transition-colors border-2 border-black"
          >
            CLEAR ALL
          </button>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-2xl">
              {products.length} Products
            </p>
            <select className="text-xl px-6 py-3 border-4 border-black bg-white">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {products.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden border-4 border-transparent group-hover:border-black transition-all">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl mb-2 group-hover:underline">
                  {product.name}
                </h3>
                <p className="text-2xl">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
