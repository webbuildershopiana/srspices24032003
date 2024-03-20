import React from 'react';
import VariationPrice from './variation-price';
import VariationGroups from './variation-groups';
import { FormattedNumber } from 'react-intl';
// import VariationGroups from './details/variation-groups';
// import VariationPrice from './details/variation-price';
// import VariationPrice from './VariationPrice';
// import VariationGroups from './VariationGroups';

const ProductVariationPrice = ({ hasVariations, selectedVariation, product ,variations }) => {
  return (
    <>
      {hasVariations ? (
        <>
          <div className="my-1 flex items-center md:my-1">
            <VariationPrice
              selectedVariation={selectedVariation}
              minPrice={product?.min_price}
              maxPrice={product?.max_price}
            />
            {product?.basePrice && (
              <del className="text-sm font-normal text-muted ltr:ml-2 rtl:mr-2 md:text-base">
                {product?.basePrice}
              </del>
            )}
          </div>
          <VariationGroups variations={variations} />
        </>
      ) : (
        <span className="mt-1 flex items-center">
          <ins className="text-2xl font-semibold text-accent no-underline md:text-3xl">
          <FormattedNumber value={product.price} style="currency" currency="INR" />
            {/* {product?.price} */}
          </ins>
          {product?.basePrice && (
            <del className="text-sm font-normal text-muted ltr:ml-2 rtl:mr-2 md:text-base">
              {product?.basePrice}
            </del>
          )}
        </span>
      )}
    </>
  );
};

export default ProductVariationPrice;