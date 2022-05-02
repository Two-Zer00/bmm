export async function getConversionRates() {
  return (
    await (
      await fetch(
        "https://v6.exchangerate-api.com/v6/8fde5563d6d3c1de24c4a8aa/latest/MXN"
      )
    ).json()
  ).conversion_rates;
}

export function filterTopCurrencies(currency) {
  const keys = Object.keys(currency);
  let topCurrencies = [
    "USD",
    "EUR",
    "GBP",
    "INR",
    "AUR",
    "CAD",
    "SGD",
    "CHS",
    "JPY",
    "MYR",
  ];
  return keys.filter((curr) => topCurrencies.includes(curr));
}
