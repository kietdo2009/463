import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import SupportPage from "./pages/SupportPage";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "men", Component: ProductListingPage },
      { path: "women", Component: ProductListingPage },
      { path: "accessories", Component: ProductListingPage },
      { path: "product/:id", Component: ProductDetailPage },
      { path: "checkout", Component: CheckoutPage },
      { path: "order-confirmation", Component: OrderConfirmationPage },
      { path: "support", Component: SupportPage },
    ],
  },
]);
