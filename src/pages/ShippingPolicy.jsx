
import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../lib/config";

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-cream px-5 py-12 text-brand md:py-20">
      <article className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm underline underline-offset-4">
          Back to Home
        </Link>

        <h1 className="mt-6 font-display text-4xl font-extrabold md:text-5xl">
          Shipping Policy
        </h1>

        <p className="mt-4 leading-relaxed">
          Thank you for shopping with AYVRIS. Here is what you need to know
          about order processing and delivery.
        </p>

        <section className="mt-10 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Order Processing
          </h2>
          <p className="leading-relaxed">
            Orders are usually processed within [your processing timeframe]
            business days after payment confirmation. Processing may take
            longer during launches, sales, or holidays. We will communicate
            any significant delays where applicable.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Delivery Times
          </h2>
          <p className="leading-relaxed">
            Estimated delivery is [your estimated delivery timeframe] after
            dispatch. Delivery times may vary depending on your location,
            courier availability, weather, and other circumstances outside
            our control.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Shipping Charges
          </h2>
          <p className="leading-relaxed">
            Shipping charges, if applicable, will be displayed at checkout
            before you complete your purchase. Any free-shipping offers will
            be subject to the terms stated at the time of purchase.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Tracking Your Order
          </h2>
          <p className="leading-relaxed">
            Where tracking is available, tracking details will be shared
            after your order has been dispatched.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Delivery Issues
          </h2>
          <p className="leading-relaxed">
            If your order is delayed, marked delivered but not received,
            or arrives damaged, contact us with your order number so we can
            help investigate with the courier.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Contact Us
          </h2>
          <p className="leading-relaxed">
            For shipping questions, email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>.
          </p>
        </section>
      </article>
    </main>
  );
}
