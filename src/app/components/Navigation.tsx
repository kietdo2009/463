import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";

export default function Navigation() {
  return (
    <header className="bg-black text-white border-b-4 border-white">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl tracking-widest hover:opacity-80 transition-opacity">
            BALENCIAGA
          </Link>

          <div className="flex items-center gap-12">
            <Link
              to="/men"
              className="text-xl px-4 py-2 hover:bg-white hover:text-black transition-all border-2 border-transparent hover:border-white"
            >
              Men
            </Link>
            <Link
              to="/women"
              className="text-xl px-4 py-2 hover:bg-white hover:text-black transition-all border-2 border-transparent hover:border-white"
            >
              Women
            </Link>
            <Link
              to="/accessories"
              className="text-xl px-4 py-2 hover:bg-white hover:text-black transition-all border-2 border-transparent hover:border-white"
            >
              Accessories
            </Link>
            <Link
              to="/support"
              className="text-xl px-4 py-2 bg-white text-black hover:bg-gray-200 transition-all border-2 border-white"
            >
              Support
            </Link>
            <Link
              to="/checkout"
              className="hover:opacity-80 transition-opacity"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={28} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
