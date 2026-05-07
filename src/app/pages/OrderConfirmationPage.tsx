import { Link } from "react-router";
import { CheckCircle, Package, Phone, Mail } from "lucide-react";

export default function OrderConfirmationPage() {
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  const estimatedDeliveryDate = new Date();
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 6);

  const formattedDate = estimatedDeliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <CheckCircle size={120} className="text-green-600" strokeWidth={2} />
        </div>
        <h1 className="text-6xl mb-6">
          ORDER CONFIRMED
        </h1>
        <p className="text-3xl text-gray-600">
          Thank you for your purchase!
        </p>
      </div>

      <div className="bg-gray-50 p-12 border-4 border-black mb-8">
        <div className="text-center mb-10">
          <p className="text-2xl mb-2">Order Number:</p>
          <p className="text-5xl">#{orderNumber}</p>
        </div>

        <div className="bg-white p-10 border-4 border-black">
          <div className="flex items-center justify-center gap-6 mb-6">
            <Package size={60} className="text-black" strokeWidth={2} />
            <h2 className="text-4xl">
              Estimated Delivery
            </h2>
          </div>
          <p className="text-center text-5xl mb-4">
            {formattedDate}
          </p>
          <p className="text-center text-2xl text-gray-600">
            Standard Shipping (5-7 business days)
          </p>
        </div>
      </div>

      <div className="bg-black text-white p-12 mb-8">
        <h2 className="text-4xl mb-6 text-center">
          Order Summary
        </h2>
        <div className="space-y-4 text-2xl">
          <div className="flex justify-between">
            <span>Multi-colored Landscape Graphic Hoodie</span>
            <span>$189.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$16.32</span>
          </div>
          <div className="flex justify-between text-4xl border-t-4 border-white pt-6 mt-6">
            <span>Total Paid</span>
            <span>$220.32</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-12 border-4 border-black mb-8 text-center">
        <h2 className="text-4xl mb-6">
          Need Help With Your Order?
        </h2>
        <p className="text-2xl mb-8">
          If you have any questions about your order, please contact customer service:
        </p>
        <div className="space-y-6">
          <Link
            to="/support"
            className="inline-block bg-black text-white text-3xl px-16 py-6 hover:bg-gray-800 transition-colors border-4 border-black"
          >
            CONTACT CUSTOMER SERVICE
          </Link>
          <div className="flex justify-center gap-12 text-xl">
            <div className="flex items-center gap-3">
              <Phone size={24} />
              <span>1-800-BALENCIAGA</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={24} />
              <span>support@balenciaga.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-2xl mb-6">
          A confirmation email has been sent to your email address.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-black text-2xl px-12 py-5 border-4 border-black hover:bg-gray-100 transition-colors"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}
