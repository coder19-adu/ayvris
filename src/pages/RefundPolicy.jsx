
import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../lib/config";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-cream px-5 py-12 text-brand md:py-20">
      <article className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm underline underline-offset-4">
          Back to Home
        </Link>

        <h1 className="mt-6 font-display text-4xl font-extrabold md:text-5xl">
          Refund & Return Policy
        </h1>

        <p className="mt-4 leading-relaxed">
          At AYVRIS, we want you to feel confident shopping with us.
          Please review the following information before requesting a return
          or refund.
        </p>

        <section className="mt-10 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Return Eligibility
          </h2>
          <p className="leading-relaxed">
            Contact us within [your return window] days of receiving your
            order to request a return. Items must meet the eligibility
            conditions stated in our confirmed return policy.
          </p>
          <p className="leading-relaxed">
            Items that are worn, washed, damaged after delivery, or missing
            their original tags may not qualify, subject to applicable law.
            Please contact us if your item arrives damaged or incorrect.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            How to Request a Return
          </h2>
          <p className="leading-relaxed">
            Email us with your order number, the item you wish to return,
            and the reason for your request. We will share the next steps
            after reviewing your request.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Refunds
          </h2>
          <p className="leading-relaxed">
            Once an approved return has been received and inspected, we will
            notify you of the outcome. Approved refunds will be processed
            using [your refund method] within [your processing timeframe].
            The time taken for the amount to appear may depend on your
            payment provider or bank.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Damaged or Incorrect Items
          </h2>
          <p className="leading-relaxed">
            If your order arrives damaged or you receive the wrong item,
            contact us promptly with your order details and clear photos
            so we can review the issue and help resolve it.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl font-bold">
            Contact Us
          </h2>
          <p className="leading-relaxed">
            For return or refund questions, contact us at{" "}
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
