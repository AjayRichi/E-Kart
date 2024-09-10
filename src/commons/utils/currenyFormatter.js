export const formatterText = ({ type, text, currency = "INR" }) => {
  switch (type) {
    case "currency":
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
      }).format(text);

    case "capital":
      return text?.toUpperCase();

    case "percentage":
      return `${Number(text)}%`;

    default:
      return ``;
  }
};
