import { isEmpty } from 'lodash';
import React from 'react';

const AddToCartInfo = ({ hasVariations, product, selectedVariation }) => {
  return (
    <div className="flex items-center">
      {!hasVariations && (
        <>
          {Number(product?.quantity) > 0 ? (
            <span className="whitespace-nowrap text-base capitalize text-body ltr:lg:ml-7 rtl:lg:mr-7">
              {product?.quantity} {product?.unit} available
            </span>
          ) : (
            <div className="whitespace-nowrap text-red-500 ltr:lg:ml-7 rtl:lg:mr-7">Out of stock</div>
          )}
        </>
      )}
      {!isEmpty(selectedVariation) && (
        <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
          {selectedVariation?.is_disable || selectedVariation.quantity === 0
            ? 'Out of stock'
            : `${selectedVariation.quantity} ${product?.unit} available`}
        </span>
      )}
    </div>
  );
};

export default AddToCartInfo;