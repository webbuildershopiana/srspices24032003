import { Product } from "@/types";

export function formatAllProducts(products: Product[]): any {
  return products && products.length > 0
    ? products.map((product: any) => formatProductData(product))
    : [];
}

export function formatCategoryData(category: any, children?: any) {

  let href = category?.children.length > 0 ? `categories?category=${category?.description?.friendlyUrl}` ?? '/404' : `/search/?categorySlugs=${category?.description?.friendlyUrl ?? '/404'}`
  return {
    ...category,
    slug: category.categoryDescription.friendlyUrl,
    name: category.categoryDescription.name,
    image: {
      id: category.id,
      original: category.image?.path ?? '',
      thumbnail: category.image?.path ?? '',
      imageUrl: category.image?.path ?? '',
    },
    icon: category?.image?.path ?? '',
    href: href,
    children: children ? children : [],
    label: category?.description?.title ?? '',
    parent_id: category?.depth > 0 ? category?.parent?.id : 0
  };
}
0

// common function for formate product data
export function formatProductData(
  product: Product | any,
) {
  const gallery = formatProductImages(product?.images ?? [])

  const variation_options = (product.productAttributes.length > 0) ? variationsObject(product) : [];
  
  const variations = (product.productAttributes.length > 0) ? product.productAttributes.map((variation: any) => {
    if (!variation) {
      return
    }
  
    return {
      ...product.variations,
      id: variation?.id,
      slug: variation?.option.code,
      attribute_id: variation?.option.id,
      value: variation?.optionValue.description.name,
      meta: null,
      pivot: {
        product_id: product.id,
        attribute_value_id: variation?.id
      },
      attribute: {
        id: variation?.id,
        slug: variation?.option?.code,
        attribute_code: variation?.option?.code,
        name: variation?.option?.description?.name,
        shop_id: 7,
        values: [
          {
            id: variation?.optionValue?.id,
            attribute_id: variation?.option?.id,
            attribute_code: variation?.option?.code,
            value: variation?.optionValue?.description?.name,
            meta: null,
            images:
              variation?.optionValue?.images?.length
                ? formatGalleryImagesWithAttributeID(variation?.optionValue?.images, variation)
                : product?.image &&formatGalleryImagesWithAttributeID([{ ...product?.image }], variation)
                // :[]
          }
        ]
      }
    };
  }) : [];

  return {
    ...product,
    slug: product?.productDescription?.friendlyUrl,
    name: product?.productDescription?.name,
    product_type: (product.options.length > 0) ? "variable" : "simple",
    price: product?.productPrice?.originalPriceDecimal,
    sale_price: product?.productPrice?.finalPriceDecimal,
    max_price: product?.productPrice?.originalPriceDecimal,
    min_price: product?.productPrice?.originalPriceDecimal,
    image: product?.image ? {
      ...product.image,
      original: product?.image?.imageUrl,
      thumbnail: product?.image?.imageUrl,
      imageName: product?.image?.imageName,
      imageUrl: product?.image?.imageUrl,
      videoUrl: product?.image?.videoUrl,
      imageType: product?.image?.imageType
    } : {},
    images: gallery ?? [], unit: product?.productPrice?.productUnitCode,
    description: product?.productDescription?.description ?? "",
    available: product?.available,
    originalPrice: product?.productPrice?.originalPriceDecimal,
    finalPrice: product?.productPrice?.finalPriceDecimal,
    href: `/products/${product?.productDescription?.friendlyUrl ?? "/404"}`,
    quantity: product?.quantity,
    variation_options: (variations.length == 0) ? [] : variation_options,
    variations: (variations.length == 0) ? [] : variations,
  };
}

// common function for formate product data
export function formatProductImages(images: any[]): any[] {
  return images.map((image) => {
    return {
      attributeId: 0,
      id: Number(image.id),
      original: image?.imageUrl,
      thumbnail: image?.imageUrl,
      imageName: image?.imageName,
      imageUrl: image?.imageUrl,
      videoUrl: image?.videoUrl,
      imageType: image?.imageType
    }
  })
}

// common function for formate product data
export function formatGalleryImagesWithAttributeID(images: any[], variation?: any): any[] {
  if (!images.length) {
    return [];
  }
  return images?.map((image) => {
    return {
      attributeId: variation?.option.id,
      attribute_code: variation?.option.code,
      id: Number(image.id),
      original: image?.imageUrl,
      thumbnail: image?.imageUrl,
      imageName: image?.imageName,
      imageUrl: image?.imageUrl,
      videoUrl: image?.videoUrl,
      imageType: image?.imageType,
      attribute_value: variation?.optionValue?.description?.name,
    }
  })
}


export function formatChildParentCategories(categories: any[]) {
  return categories && categories.length > 0
    ? categories.map((category: any) => {
      const children = category.children.map((child: any) => {
        return formatCategoryData(child);
      });
      return formatCategoryData(category, children);
    })
    : [];
}



const variationsObject = (product: { productAttributes: any; variation_options: any; productDescription: { name: any; }; quantity: any; sku: any; id: any; }) => {
  let productAttributes = product.productAttributes;

  productAttributes = productAttributes.reduce(function (r: { [x: string]: { id: any; varient: any; name: any; value: any; images: any }[]; }, a: { optionValue: { optionCode: string | number; description: { name: any; }; images: any }; id: any; option: { description: { name: any; }; }; }) {

    r[a.optionValue.optionCode] = r[a.optionValue.optionCode] || [];
    r[a.optionValue.optionCode].push({
      id: a.id,
      varient: a,
      name: a.option.description.name,
      value: a.optionValue.description.name,
      images: a.optionValue.images
    });
    return r;
  }, Object.create(null));
  // console.log('productAttributes...', productAttributes);

  const productAttributeKeys = Object.keys(productAttributes);

  const options = productAttributeKeys.flatMap(key => {
    return productAttributes[key];
  })

  const optionsCombinations = combinations(options);

  let variation_options: any[] = [];

  optionsCombinations.flatMap((option: any) => {
    const varient: any = {
      ...product.variation_options,
      id: "",
      slug: "",
      title: product.productDescription.name,
      image: null,
      price: "",
      sale_price: null,
      quantity: product.quantity,
      is_disable: 0,
      sku: product.sku,
      options: [],
      product_id: product.id,
    };
    let varientTotals = 0; // need to verify

    option.map((productAttribute: any) => {
      varient.id = (varient.id.length == 0) ? varient.id.concat(productAttribute.id) : varient.id.concat("-" + productAttribute.id);
      varient.slug = productAttribute.varient.option.code;
      varientTotals += productAttribute.varient.productAttributePriceWithoutCurrency; // need to verify
      varient.sku = varient.sku + "-" + productAttribute.varient.optionValue.code;
      varient.title = varient.title + " - " + productAttribute.varient.optionValue.code;

      if (varient.options.length == 0) {
        varient.options = [{
          name: productAttribute.name,
          value: productAttribute.value
        }];
      } else {
        varient.options.push({
          name: productAttribute.name,
          value: productAttribute.value
        });
      }
    })
    varient.price = product.price + varientTotals;  // need to verify
    variation_options.push(varient);
  })

  return variation_options;
}

const combinations = (arr: any[], includeEmpty = false) => {
  const groups: any = {};

  arr.forEach(({ name, value, id, varient }) => {
    if (!groups[name]) {
      groups[name] = includeEmpty ? [null] : [];
    }
    groups[name].push({ id, varient, name, value });
  });

  let output = [[]];
  Object.values(groups).forEach((group: any) => {
    const temp: never[][] = [];
    group.forEach((item: ConcatArray<never>) => {
      output.forEach(list => temp.push(item ? list.concat(item) : list));
    });
    // deep copy
    output = JSON.parse(JSON.stringify(temp));
  });
  return output;
};
