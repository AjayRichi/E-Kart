export const formatterText = ({ type, text, currency = "INR" }) => {
  switch (type) {
    case "currency":
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
      }).format(text);

    case "capital":
      return text.toUpperCase();

    case "capitalizeFirstLetter":
      return text ? text.split("")[0].toUpperCase() + text.slice(1) : "";

    case "percentage":
      return `${Number(text)}%`;

    default:
      return ``;
  }
};
