import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsListSelector } from "../../commons/productsDuck/selectors";
import { getProductsAction } from "../../commons/productsDuck/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div>
      {products &&
        products.map((product) => (
          <Fragment key={product.id}>{product.title}</Fragment>
        ))}
    </div>
  );
};

export { Products };
