import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc4MTIyNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury fashion store interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl mb-8 tracking-wider">
            SPRING 2026 COLLECTION
          </h1>
          <p className="text-3xl mb-12 max-w-2xl mx-auto">
            Discover timeless elegance and contemporary design
          </p>
          <Link
            to="/men"
            className="inline-block bg-white text-black text-2xl px-16 py-6 hover:bg-gray-200 transition-all border-4 border-white"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-5xl text-center mb-16">
          SHOP BY CATEGORY
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <Link to="/men" className="group relative overflow-hidden bg-gray-100 aspect-[3/4]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563504520138-06ce900dcc10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Men's clothing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-end p-8">
              <span className="text-white text-4xl border-b-4 border-white pb-2">
                MEN
              </span>
            </div>
          </Link>

          <Link to="/women" className="group relative overflow-hidden bg-gray-100 aspect-[3/4]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622866654199-d36cf0709720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBob29kaWUlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3ODEyMjQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Women's clothing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-end p-8">
              <span className="text-white text-4xl border-b-4 border-white pb-2">
                WOMEN
              </span>
            </div>
          </Link>

          <Link to="/accessories" className="group relative overflow-hidden bg-gray-100 aspect-[3/4]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1769116416641-e714b71851e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBsdXh1cnl8ZW58MXx8fHwxNzc3OTYwMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Accessories"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-end p-8">
              <span className="text-white text-4xl border-b-4 border-white pb-2">
                ACCESSORIES
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl mb-4">BALENCIAGA © 2026. All rights reserved.</p>
          <Link to="/support" className="text-lg underline hover:opacity-80">
            Customer Support
          </Link>
        </div>
      </footer>
    </div>
  );
}
