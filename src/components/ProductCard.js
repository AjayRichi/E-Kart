import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { formatterText } from "../commons/utils/currenyFormatter";

const StyledCard = styled.div`
  font-family: Avenir Next;
  height: 432px;
  width: 296px;
  padding: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 9px;
  text-align: center;
`;
const StyledImage = styled.img`
  height: 280px;
  width: 280px;
  object-fit: fill;
`;

const StyledText = styled.div`
  display: flex;
  alifn-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const StyledButton = styled.button`
  width: 280px;
  height: 50px;
  padding: 8px 12px 8px 12px;
  border: 1px solid #000000;
  justify: space-between;
  background-color: #ffffff;
  cursor: pointer;
  * > {
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
  }
`;

const StyledPriceWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const RenderRating = ({ rate = 0, review_count = 0 }) => {
  const stars = Math.trunc(rate);
  const halfStar = rate - stars;

  const starArray = Array.from({ length: rate }, (_, index) => index);

  return (
    <StyledText>
      {starArray.map((_, index) => (
        <FaStar key={index} size={16} />
      ))}
      {halfStar > 0 && <FaStarHalfAlt size={16} />}
      <span>{`(${review_count})`}</span>
    </StyledText>
  );
};

const RenderPrice = ({ price = 0, discounted_price = 0, currency = "USD" }) => {
  const savings = discounted_price
    ? Math.round(100 - (discounted_price * 100) / price)
    : 0;
  return (
    <StyledPriceWrapper>
      <StyledText
        style={{ textDecoration: discounted_price && "line-through" }}
      >
        {formatterText({ type: "currency", text: price, currency: currency })}
      </StyledText>
      {discounted_price && (
        <StyledText>
          {formatterText({
            type: "currency",
            text: discounted_price,
            currency: currency,
          })}
        </StyledText>
      )}
      {savings > 0 && (
        <StyledText style={{ color: "#FF4E4E" }}>{`Save ${formatterText({
          type: "percentage",
          text: savings,
        })}`}</StyledText>
      )}
    </StyledPriceWrapper>
  );
};

const ProductCard = ({ details }) => {
  const {
    product_name,
    imageUrl,
    rating,
    price,
    review_count,
    discounted_price,
  } = details;

  return (
    <StyledCard>
      <StyledImage src={imageUrl} alt={product_name} />
      <StyledText>{product_name}</StyledText>
      {rating > 0 && <RenderRating rate={rating} review_count={review_count} />}
      <RenderPrice price={price} discounted_price={discounted_price} />
      <StyledButton>ADD TO BAG</StyledButton>
    </StyledCard>
  );
};

export { ProductCard };
