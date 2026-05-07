import { useState } from "react";
import { useNavigate } from "react-router";

export default function CheckoutPage() {
  const navigate = useNavigate();
  
  // Set all initial states to empty strings instead of presets
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl border-4 border-red-500">
      <h1 className="text-6xl mb-12 text-center">
        CHECKOUT
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Contact Information */}
        <section className="bg-gray-50 p-10 border-4 border-black">
          <h2 className="text-4xl mb-8 border-b-4 border-black pb-4">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-2xl mb-3">
                Email Address <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
        </section>

        {/* Shipping Address */}
        <section className="bg-gray-50 p-10 border-4 border-black">
          <h2 className="text-4xl mb-8 border-b-4 border-black pb-4">
            Shipping Address
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-2xl mb-3">
                  First Name <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-2xl mb-3">
                  Last Name <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-2xl mb-3">
                Street Address <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                placeholder="123 Fashion Avenue"
              />
            </div>

            <div>
              <label htmlFor="apartment" className="block text-2xl mb-3">
                Apartment, Suite, etc. <span className="text-lg text-gray-600">(Optional)</span>
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                placeholder="Suite 4B"
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-2xl mb-3">
                  City <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                  placeholder="New York"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-2xl mb-3">
                  State <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                  placeholder="NY"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-2xl mb-3">
                  ZIP Code <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                  placeholder="10001"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-2xl mb-3">
                Phone Number <span className="text-lg text-gray-600">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="bg-gray-50 p-10 border-4 border-black">
          <h2 className="text-4xl mb-8 border-b-4 border-black pb-4">
            Payment Information
          </h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="cardNumber" className="block text-2xl mb-3">
                Card Number <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                required
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiryDate" className="block text-2xl mb-3">
                  Expiry Date <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  required
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-2xl mb-3">
                  CVV <span className="text-red-600">*</span> <span className="text-lg text-gray-600">(Required)</span>
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  required
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-black"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="bg-black text-white p-10 border-4 border-black">
          <h2 className="text-4xl mb-8 border-b-4 border-white pb-4">
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
              <span>Total</span>
              <span>$220.32</span>
            </div>
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-black text-white text-4xl py-10 hover:bg-gray-800 transition-colors border-4 border-black"
        >
          PLACE ORDER
        </button>
      </form>
    </div>
  );
}