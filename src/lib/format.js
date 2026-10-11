// Change locale/currency here to switch every price in the site.
export const CURRENCY = { locale: "en-IN", code: "INR" };

export const formatPrice = (amount) =>
  new Intl.NumberFormat(CURRENCY.locale, {
    style: "currency",
    currency: CURRENCY.code,
    maximumFractionDigits: 0,
  }).format(amount);
