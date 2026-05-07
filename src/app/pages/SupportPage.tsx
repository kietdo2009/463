export default function SupportPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <h1 className="text-6xl mb-12 text-center">
        CUSTOMER SUPPORT
      </h1>

      {/* Contact Information - Prominently Displayed */}
      <section className="bg-black text-white p-12 mb-12 border-4 border-black">
        <h2 className="text-4xl mb-8">
          Contact Us
        </h2>
        <div className="space-y-6 text-2xl">
          <div>
            <p className="mb-2">Phone Number:</p>
            <p className="text-3xl">1-800-BALENCIAGA (1-800-225-3624)</p>
            <p className="text-xl mt-2 text-gray-300">Monday - Friday: 9:00 AM - 8:00 PM EST</p>
            <p className="text-xl text-gray-300">Saturday - Sunday: 10:00 AM - 6:00 PM EST</p>
          </div>
          <div>
            <p className="mb-2">Email Address:</p>
            <p className="text-3xl">support@balenciaga.com</p>
            <p className="text-xl mt-2 text-gray-300">We respond within 24 hours</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-10">
        <h2 className="text-5xl mb-8 border-b-4 border-black pb-4">
          Frequently Asked Questions
        </h2>

        {/* Return Policy for Shoes - Prominently Featured */}
        <div className="bg-gray-50 p-10 border-4 border-black">
          <h3 className="text-4xl mb-6">
            Return Policy for Shoes
          </h3>
          <div className="text-2xl space-y-4 leading-relaxed">
            <p>
              We understand that finding the perfect fit is essential when purchasing footwear.
              Our shoe return policy is designed with your satisfaction in mind.
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Returns accepted within <strong>30 days</strong> of purchase</li>
              <li>Shoes must be unworn with original packaging and tags attached</li>
              <li>Free return shipping for all domestic orders</li>
              <li>Refunds processed within 5-7 business days of receiving returned items</li>
              <li>Exchange for different size or style available at no extra cost</li>
            </ul>
            <p className="mt-6 bg-white p-6 border-2 border-black">
              <strong>Important:</strong> Shoes that show signs of wear or are missing original packaging
              may not be eligible for return. Please try shoes indoors on clean surfaces before wearing outside.
            </p>
          </div>
        </div>

        {/* General Return Policy */}
        <div className="bg-gray-50 p-10 border-4 border-black">
          <h3 className="text-4xl mb-6">
            General Return & Exchange Policy
          </h3>
          <div className="text-2xl space-y-4 leading-relaxed">
            <p>
              We want you to love your BALENCIAGA purchase. If you're not completely satisfied,
              we offer hassle-free returns and exchanges.
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>30-day return window for all items</li>
              <li>Items must be unworn, unwashed, and in original condition</li>
              <li>Tags and original packaging must be intact</li>
              <li>Free returns on all orders over $100</li>
              <li>Returns under $100 subject to $7.99 return shipping fee</li>
            </ul>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-gray-50 p-10 border-4 border-black">
          <h3 className="text-4xl mb-6">
            Shipping Information
          </h3>
          <div className="text-2xl space-y-4 leading-relaxed">
            <p>We offer multiple shipping options to meet your needs:</p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li><strong>Standard Shipping:</strong> 5-7 business days - $15.00</li>
              <li><strong>Express Shipping:</strong> 2-3 business days - $25.00</li>
              <li><strong>Overnight Shipping:</strong> 1 business day - $45.00</li>
              <li><strong>Free Standard Shipping</strong> on orders over $200</li>
            </ul>
            <p>All orders are processed within 1-2 business days. You will receive tracking
            information via email once your order ships.</p>
          </div>
        </div>

        {/* Sizing Guide */}
        <div className="bg-gray-50 p-10 border-4 border-black">
          <h3 className="text-4xl mb-6">
            Sizing Guide
          </h3>
          <div className="text-2xl space-y-4 leading-relaxed">
            <p>
              Finding your perfect fit is important to us. Our garments are designed with a contemporary fit.
              If you prefer a more relaxed fit, we recommend sizing up.
            </p>
            <p>
              For detailed measurements and sizing charts, please refer to the size guide on each product page.
              If you need personalized sizing assistance, contact our support team.
            </p>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="bg-gray-50 p-10 border-4 border-black">
          <h3 className="text-4xl mb-6">
            Order Tracking
          </h3>
          <div className="text-2xl space-y-4 leading-relaxed">
            <p>
              Track your order status at any time:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Check the tracking link sent to your email</li>
              <li>Contact our support team with your order number</li>
              <li>Allow 1-2 business days for tracking information to update after order placement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Contact CTA */}
      <section className="mt-16 text-center bg-black text-white p-12">
        <h2 className="text-4xl mb-6">
          Still Have Questions?
        </h2>
        <p className="text-2xl mb-8">
          Our customer support team is here to help you.
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="tel:1-800-589-3746"
            className="bg-white text-black text-2xl px-10 py-5 hover:bg-gray-200 transition-colors border-2 border-white"
          >
            CALL US
          </a>
          <a
            href="mailto:support@balenciaga.com"
            className="bg-black text-white text-2xl px-10 py-5 border-2 border-white hover:bg-gray-900 transition-colors"
          >
            EMAIL US
          </a>
        </div>
      </section>
    </div>
  );
}
