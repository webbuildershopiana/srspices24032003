import type { Product } from '@/types';

// import type { InferGetStaticPropsType } from 'next';

import { getLayout } from '@/components/layouts/layout';

import Seo from '@/components/seo/seo';

import { useWindowSize } from '@/lib/use-window-size';

import ProductQuestions from '@/components/questions/product-questions';

import AverageRatings from '@/components/reviews/average-ratings';

import ProductReviews from '@/components/reviews/product-reviews';

import dynamic from 'next/dynamic';

import parse from 'html-react-parser';

import { ThumbsCarousel } from '@/components/ui/thumb-carousel';

import { useRouter } from 'next/router';

import Link from 'next/link';

import GeneralLayout from '@/components/layouts/_general';

import { toast } from 'react-toastify';

import { isVariationSelected } from '@/lib/is-variation-selected';

import { isEqual } from 'lodash';

import isEmpty from 'lodash/isEmpty';

import { getVariations } from '@/lib/get-variations';

import { useEffect, useMemo, useState } from 'react';

import { AttributesProvider, useAttributes } from '@/components/products/details/attributes.context';

import AddToCartInfo from '@/components/products/details/add-to-cart-info';

import ProductVariationPrice from '@/components/products/details/product-variation-price';

import usePrice from '@/lib/use-price';

import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';

import { authorizationAtom } from '@/store/authorization-atom';

import { useAtom } from 'jotai';

//[[UI_IMPORT]]
// import { getStaticPaths, getStaticProps } from '@/framework/product.ssr';

//FIXME: typescript and layout
// const Details = dynamic(() => import('@/components/products/details/details'));

// const BookDetails = dynamic(
//   () => import('@/components/products/details/book-details')
// );

// const RelatedProducts = dynamic(
//   () => import('@/components/products/details/related-products')
// );

// const CartCounterButton = dynamic(
//   () => import('@/components/cart/cart-counter-button'),
//   { ssr: false }
// );



import client from '@/framework/client';

import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import { formatAllProducts, formatProductData } from '@/lib/format-api-data';

// export { getStaticPaths, getStaticProps };

export const getServerSideProps: any = async (context: any) => {

  try {
    const { params } = context;
    const { slug } = params;

    const productResponse: any = await client.products.get(slug);
    const product = productResponse && formatProductData(productResponse);

    if (!product) {
      throw Error();
    }
    return {
      props: {
        product
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}


const ProductPage: any = ({ product }: any) => {
  const { width } = useWindowSize();
  const router = useRouter();
  const { slug } = router.query;
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
   const { attributes, setAttributes } = useAttributes();
    const variations:any = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );
  
    useEffect(() => {
    if (Object.keys(variations).length === 0) {
      // Handle the case where variations is empty
      return;
    }
  
    let defaultVariation = {};
    for (const v in variations) {
      if (Object.prototype.hasOwnProperty.call(variations, v) && variations[v].length > 0) {
        defaultVariation = { ...defaultVariation, [v]: variations[v][0].value };
      }
    }
  
    setAttributes((prev: any) => ({
      ...prev,
      ...defaultVariation
    }));
  
  }, [variations]);
  
    
    const isSelected = isVariationSelected(variations, attributes);

  let selectedVariation: any = {};
        
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) => {
      return isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort()
      )
    }
    );
  }
  const hasVariations = !isEmpty(variations);
  
  const [isAuthorize] = useAtom(authorizationAtom);
//[[UI_HOOK]]
   useEffect(() => {
    // console.log("test use r")
    const commonScript = document.createElement("script");
    commonScript.src = "/assets/script.js";
    document.head.appendChild(commonScript);
    return () => {
      document.head.removeChild(commonScript);
    };
  }, []);
  useEffect(() => {

   
    fetchData();
  }, [slug]); 
  const fetchData = async () => {
    try {
      if (slug) {
        let product = await client.products.get(slug , DEFAULT_STORE_CODE); 

        let relatedProducts: Product[] = await client.products.relatedProducts(product.id, DEFAULT_STORE_CODE)
        const formatedRelatedProducts = formatAllProducts(relatedProducts) ?? [];
        setRelatedProducts(formatedRelatedProducts)
      }
    } catch (error) {
      toast.error(error?.message)
    }
  };

  console.log(relatedProducts);
  return (
    product && <>
     
 <div>
  Main page
 </div>
 <div className="container px-4 py-2" id="iumixh">
  <div className="row p-2 row-cols-1 row-cols-sm-2 row-cols-md-2">
   <div className="col">
    <div id="irp6w2">
     <ThumbsCarousel
    gallery={product?.images ?? []}
    hideThumbs={product?.images.length <= 1}
  />
    </div>
   </div>
   <div className="col">
    <div id="icc2si">
     <p className="text-truncate px-3">
      {product.name}
     </p>
    </div>
    <ProductVariationPrice hasVariations={hasVariations} product={product} selectedVariation={selectedVariation} variations={variations} />
    <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
                   {
                      product &&  
                      <AddToCart
                      data={product}
                      variant="big"
                      variation={selectedVariation}
                      disabled={
                        selectedVariation?.is_disable ||
                        !isSelected ||
                        product?.quantity <= 0 || !product?.available
                      }
                      />
                   } 
                  </div>
   </div>
  </div>
 </div>



    </>
  );
};
// ProductPage.getLayout = getLayout;
ProductPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default ProductPage;
