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

import isEmpty from 'lodash/isEmpty';

import { useEffect, useMemo, useState } from 'react';

import { AttributesProvider, useAttributes } from '@/components/products/details/attributes.context';


import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';


import { authorizationAtom } from '@/store/authorization-atom';


import { useAtom } from 'jotai';


import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';

import client from '@/framework/client';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import { formatProductData, formatAllProducts, formatProductImages } from '@/lib/format-api-data';

import { getVariations } from '@/lib/get-variations';

import { isVariationSelected } from '@/lib/is-variation-selected';

import { isEqual } from 'lodash';

import AddToCartInfo from '@/components/products/details/add-to-cart-info';

import ProductVariationPrice from '@/components/products/details/product-variation-price';

import { thumb_images } from '@/store/thumb-images-atom';

import usePrice from '@/lib/use-price';




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
  // console.log('product.....', product);
  
  const { width } = useWindowSize();
  const router = useRouter();
  const { slug } = router.query;
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [isAuthorize] = useAtom(authorizationAtom);
  const [gallery, setGallery] = useAtom(thumb_images);
const { attributes, setAttributes } = useAttributes();
    const variations:any = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );
  
    useEffect(() => {
    let galleryImagesCollection:any = [];
    if (Object.keys(variations).length === 0) {
      // Handle the case where variations is empty
      const defaultImages:any = product?.images;
      console.log("Default images without varients",defaultImages);
      galleryImagesCollection.push(...defaultImages);
    }
  
    let defaultVariation = {};
    
    // console.log('log variations....' , variations);
    if (variations && typeof variations === 'object' && Object.keys(variations).length > 0) {
      for (const v in variations) {
        if (Object.prototype.hasOwnProperty.call(variations, v) && Array.isArray(variations[v]) && variations[v].length > 0) {
          const defaultAttributeObj = variations[v][0];
          if (defaultAttributeObj && typeof defaultAttributeObj === 'object') {
            const defaultImages:any = defaultAttributeObj?.attribute?.values?.[0]?.images;
            if (defaultImages) {
              defaultVariation = { ...defaultVariation, [v]: defaultAttributeObj.value };
              galleryImagesCollection.push(...defaultImages)
              // console.log("galleryImagesCollection ---------->>>>>>" ,galleryImagesCollection);
              
              // setGallery([...gallery, ...defaultImages]);
              
            }
          }
        }
      }
    }
    setGallery(galleryImagesCollection);
    setAttributes((prev: any) => ({
      ...prev,
      ...defaultVariation
    }));
    // console.log('default variation', defaultVariation);
    
  
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
  
  
//[[UI_HOOK]]


  useEffect(() => {
    fetchData();
  }, [slug]);



  const fetchData = async () => {
    try {
      if (slug) {
        let product = await client.products.get(slug);

        let relatedProducts: Product[] = await client.products.relatedProducts(product.id, DEFAULT_STORE_CODE)
        const formatedRelatedProducts = formatAllProducts(relatedProducts) ?? [];
        setRelatedProducts(formatedRelatedProducts)
      }
    } catch (error) {
      toast.error(error?.message)
    }
  };


  return (
    // <AttributesProvider>
    <>
      {product && <>

        <body>
 <div className="px-4 py-2" id="irylxg">
  <div className="row p-2 row-cols-1 row-cols-sm-2 row-cols-md-2">
   <div className="col">
    <div data-gjs-type="product-img" id="ijgaol">
     <ThumbsCarousel
    gallery={gallery ?? []}
    hideThumbs={gallery.length <= 1}
  />
    </div>
   </div>
   <div className="col" id="i46fux">
    <div data-gjs-type="product-name" id="ira7mx">
     <p className="text-truncate px-3">
      {product.name}
     </p>
    </div>
    <div className="d-flex justify-content-cente" id="i1yowj">
     <p className="text-truncate px-3 mb-3" id="iqva7q">
      {product.sku}
     </p>
    </div>
    <div className="d-flex justify-content-cente" data-gjs-type="product-price" id="imqecp">
     <p className="text-truncate px-3 mb-3">
      {usePrice({amount:product.price}).price}
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
 <div className="px-4 py-2" id="iklnr2">
  <div className="row p-2">
   <div className="col">
    <div data-gjs-type="product-description" id="isjdsg">
     <p className="px-3" data-gjs-type="product-description">
      {parse(product?.description)}
     </p>
    </div>
   </div>
  </div>
 </div>
</body>

      </>
      }
      </>
    // </AttributesProvider>
  );
};
ProductPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default ProductPage;