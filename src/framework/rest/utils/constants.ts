import { OrderStatus } from "@/types";

export const DEFAULT_STORE_CODE = "the24013102";
// export const DEFAULT_STORE_CODE = "the24013102";

export enum AddressType {
  Billing = 'billing',
  Shipping = 'shipping',
}

export const NAVIGATION_ITEM_LIMIT = 5;

export const TOTALS_TOTAL = "order.total.total";
export const TOTALS_DISCOUNT = "order.total.discount";
export const TOTALS_SUBTOTAL = "order.total.subtotal";
export const TOTALS_SHIPPING = "order.total.shipping"
export const TOTALS_TAX = "order.total.tax"

export const DEFUALT_LANGUAGE = "en";
export const DEFUALT_STATE = 'Rajasthan';
export const DEFUALT_COUNTRY = 'IN';



export const enum OrderStatusEnum {
  ORDERED = 'ORDERED',
  PROCESSED = 'PROCESSED',
  DISPATCHED = 'DISPATCHED',
  DELIVERED = 'DELIVERED',
}

export const ORDER_STATUS_DATA: Record<string, OrderStatus> = {
  [OrderStatusEnum.ORDERED]: {
    id: '',
    name: OrderStatusEnum.ORDERED,
    serial: 1,
    color: "#23b848",
    created_at: "2021-03-08T21:33:52.000000Z",
    updated_at: "2021-03-08T21:34:04.000000Z",
    language: "en",
    translated_languages: [
      "en"
    ]
  },
  [OrderStatusEnum.PROCESSED]: {
    id: '',
    name: OrderStatusEnum.PROCESSED,
    serial: 2,
    color: "#23b848",
    created_at: "2021-03-08T21:33:52.000000Z",
    updated_at: "2021-03-08T21:34:04.000000Z",
    language: "en",
    translated_languages: [
      "en"
    ]
  },
  [OrderStatusEnum.DISPATCHED]: {
    id: '',
    name: OrderStatusEnum.DISPATCHED,
    serial: 3,
    color: "#23b848",
    created_at: "2021-03-08T21:33:52.000000Z",
    updated_at: "2021-03-08T21:34:04.000000Z",
    language: "en",
    translated_languages: [
      "en"
    ]
  },
  [OrderStatusEnum.DELIVERED]: {
    id: '',
    name: OrderStatusEnum.DELIVERED,
    serial: 4,
    color: "#23b848",
    created_at: "2021-03-08T21:33:52.000000Z",
    updated_at: "2021-03-08T21:34:04.000000Z",
    language: "en",
    translated_languages: [
      "en"
    ]
  },
}

export const PAYMENT = {
  COD_UPPERCASE: "COD",
  COD: "cod",
  AUTHORIZECAPTURE: "AUTHORIZECAPTURE",
  ONLINEPAYMENT: "ONLINEPAYMENT",
  RAZORPAY: "razorpay",
  RAZORPAY_UPPERCASE: "RAZORPAY",
  PAYMENT_INITIALIZATION: "payment/init",
  INIT: "INIT",
  PRIMARY_CARD: "primary",
  PAYMENT_FAILED: "payment.failed",
  RECEIPT_ORDER: "receipt_order_",
  RAZOR_PAY_SUCCESSFULL: "onRazorPaySuccess",
  SHIPPING: "Shipping",
  SECONDARY_CARD: "secondary",
}

export const DEFAULT_CURRENCY = "INR";
export const ONLINEPAYMENT = "ONLINEPAYMENT";
export const INIT = "INIT";
export const STORE_NAME = "storeName";
export const RECEIPT_ORDER = "receipt_ordesr_";
export const PAYMENT_FAILED = "payment.failed";
export const INQUIRY_STATUS = "ORDERED";
export const INQUIRY_ORDER_TYPE = "INQUIRY";


export const PAGES_KEY = 'PAGES';
export const DEFAULT_PAGE_CODE = 'home';

export const TEXT_VALUES = {
  CART_ID: 'cartId',
  QUOTE: 'quote'
}


export const DEFAULT_THEME_COLOR_CODE_1 = "172,93,93";
export const DEFAULT_THEME_COLOR_CODE_2 = "226,155,155";
export const DEFAULT_THEME_COLOR_CODE_3 = "255,255,255";
export const DEFAULT_THEME_COLOR_CODE_4 = "255,255,255";
export const DEFAULT_THEME_COLOR_CODE_5 = "31,41,55";
export const DEFAULT_THEME_COLOR_CODE_6 = "255,255,255";
export const DEFAULT_THEME_COLOR_CODE_7 = "31,41,55";
export const DEFAULT_THEME_COLOR_CODE_8 = "255,255,255";
export const DEFAULT_THEME_COLOR_CODE_9 = "31,41,55";

export const DEFAULT_PAGE = 'default';

export const OTP_ATOM_STATES = {
  phoneNumber: 'PhoneNumber',
  registerForm: 'RegisterForm',
  otpForm: 'OtpForm'
}

export const DEFUALT_ITEM_COUNT = 10;

export const TYPE_DEFUALT_INDEX = 9;
export const DEFAULT_LAYOUT_ID = 9;
export const DEFAULT_LAYOUT_NAME = 'Jewellery';
export const DEFUALT_LAYOUT_TYPE = 'jewe';
export const DEFAULT_PRODUCT_CARD = 'radon';
export const DEFAULT_THEME_SLUG = 'jewellery';

export const ORDERS_CRITERIA_ORDER_BY_QUERY_VALUE = "datePurchased";
export const ORDERS_ORDER_BY_QUERY_VALUE = "DESC";

export const TYPE_DATA = [
  // Index = 0
  {
    id: 1,
    name: "Grocery",
    settings: {
      isHome: true,
      layoutType: "classic",
      productCard: "neon"
    },
    slug: "grocery",
    icon: "FruitsVegetable",
    promotional_sliders: [
      {
        id: 902,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
      },
      {
        id: 903,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
      },
      {
        id: 904,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
      },
      {
        id: 905,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
      },
      {
        id: 906,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
      }
    ],
    created_at: "2021-03-08T07:18:25.000000Z",
    updated_at: "2021-08-18T17:12:14.000000Z",
    banners: [
      {
        id: 12,
        type_id: 1,
        title: "Groceries Delivered in 90 Minute",
        description: "Get your healthy foods & snacks delivered at your doorsteps all day everyday",
        image: {
          id: 907,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/grocery.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/grocery-thumbnail.jpg"
        },
        created_at: "2021-07-17T13:21:55.000000Z",
        updated_at: "2021-07-17T13:21:55.000000Z"
      }
    ]
  },
  // Index = 1

  {
    id: 2,
    name: "Bakery",
    settings: {
      isHome: false,
      layoutType: "standard",
      productCard: "argon"
    },
    slug: "bakery",
    icon: "Bakery",
    promotional_sliders: null,
    created_at: "2021-03-08T07:18:46.000000Z",
    updated_at: "2021-08-18T13:34:28.000000Z",
    banners: [
      {
        id: 13,
        type_id: 2,
        title: "Get Your Bakery Items Delivered",
        description: "Get your favorite bakery items baked and delivered to your doorsteps at any time",
        image: {
          id: 908,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/bakery.jpg",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/bakery-thumbnail.jpg"
        },
        created_at: "2021-07-17T13:22:34.000000Z",
        updated_at: "2021-07-17T13:22:34.000000Z"
      }
    ]
  },
  // Index = 2

  {
    id: 3,
    name: "Makeup",
    settings: {
      isHome: false,
      layoutType: "classic",
      productCard: "helium"
    },
    slug: "makeup",
    icon: "FacialCare",
    promotional_sliders: [
      {
        id: 902,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
      },
      {
        id: 903,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
      },
      {
        id: 904,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
      },
      {
        id: 905,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
      },
      {
        id: 906,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
      }
    ],
    created_at: "2021-03-08T07:19:12.000000Z",
    updated_at: "2021-08-18T13:35:43.000000Z",
    banners: [
      {
        id: 14,
        type_id: 3,
        title: "Branded & imported makeups",
        description: "Easiest and cheapest way to get your branded & imported makeups",
        image: {
          id: 909,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/makeup.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/makeup-thumbnail.jpg"
        },
        created_at: "2021-07-17T13:23:05.000000Z",
        updated_at: "2021-07-17T13:23:05.000000Z"
      }
    ]
  },
  // Index = 3

  {
    id: 4,
    name: "Bags",
    settings: {
      isHome: false,
      layoutType: "classic",
      productCard: "helium"
    },
    slug: "bags",
    icon: "Handbag",
    promotional_sliders: [
      {
        id: 902,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
      },
      {
        id: 903,
        thumbnail: "https://pickbazoooarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
      },
      {
        id: 904,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
      },
      {
        id: 905,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
      },
      {
        id: 906,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
      }
    ],
    created_at: "2021-03-08T07:19:28.000000Z",
    updated_at: "2021-08-18T13:50:45.000000Z",
    banners: [
      {
        id: 15,
        type_id: 4,
        title: "Exclusive Branded bags",
        description: "Get your exclusive & branded bags delivered to you in no time",
        image: {
          id: 910,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/907/bags.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/907/conversions/bags-thumbnail.jpg"
        },
        created_at: "2021-07-17T13:23:32.000000Z",
        updated_at: "2021-07-17T13:23:32.000000Z"
      }
    ]
  },
  // Index = 4

  {
    id: 5,
    name: "Clothing",
    settings: {
      isHome: false,
      layoutType: "classic",
      productCard: "xenon"
    },
    slug: "clothing",
    icon: "DressIcon",
    promotional_sliders: [
      {
        id: 902,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
      },
      {
        id: 903,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
      },
      {
        id: 904,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
      },
      {
        id: 905,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
      },
      {
        id: 906,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
      }
    ],
    created_at: "2021-03-08T07:19:38.000000Z",
    updated_at: "2021-08-18T18:34:07.000000Z",
    banners: [
      {
        id: 16,
        type_id: 5,
        title: "Shop your designer dresses",
        description: "Ready to wear dresses tailored for you online. Hurry up while stock lasts.",
        image: {
          id: 911,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/908/cloths.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/908/conversions/cloths-thumbnail.jpg"
        },
        created_at: "2021-07-17T13:24:28.000000Z",
        updated_at: "2021-07-17T13:24:28.000000Z"
      }
    ]
  },
  // Index = 5

  {
    id: 6,
    name: "Furniture",
    settings: {
      isHome: false,
      layoutType: "modern",
      productCard: "krypton"
    },
    slug: "furniture",
    icon: "FurnitureIcon",
    promotional_sliders: [
      {
        id: 902,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
      },
      {
        id: 903,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
      },
      {
        id: 904,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
      },
      {
        id: 905,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
      },
      {
        id: 906,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
      }
    ],
    created_at: "2021-03-08T07:19:49.000000Z",
    updated_at: "2021-08-18T18:33:13.000000Z",
    banners: [
      {
        id: 18,
        type_id: 6,
        title: "Exclusive furniture on cheap price",
        description: "Make your house a home with our wide collection of beautiful furniture",
        image: {
          id: 922,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/922/furniture-banner-1.jpg",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/922/conversions/furniture-banner-1-thumbnail.jpg"
        },
        created_at: "2021-08-18T18:45:54.000000Z",
        updated_at: "2021-08-18T18:45:54.000000Z"
      },
      {
        id: 19,
        type_id: 6,
        title: "Furniter 2",
        description: null,
        image: {
          id: 923,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/923/furniture-banner-2.jpg",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/923/conversions/furniture-banner-2-thumbnail.jpg"
        },
        created_at: "2021-08-18T18:45:54.000000Z",
        updated_at: "2021-08-18T18:45:54.000000Z"
      }
    ]
  },
  // Index = 6

  {
    id: 7,
    name: "Daily Needs",
    settings: {
      isHome: false,
      layoutType: "minimal",
      productCard: "neon"
    },
    slug: "daily-needs",
    icon: "FruitsVegetable",
    promotional_sliders: null,
    created_at: "2021-09-27T14:08:07.000000Z",
    updated_at: "2021-09-27T14:08:07.000000Z",
    banners: [
      {
        id: 23,
        type_id: 7,
        title: "You Deserve To Eat Fresh",
        description: "We source the best healthy foods for you.",
        image: {
          id: 1344,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1344/shutterstock_389040853-%281%29.jpg",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1344/conversions/shutterstock_389040853-%281%29-thumbnail.jpg"
        },
        created_at: "2021-10-19T04:04:19.000000Z",
        updated_at: "2021-10-19T04:04:19.000000Z"
      }
    ]
  },
  // Index = 7

  {
    id: 8,
    name: "Books",
    settings: {
      isHome: false,
      layoutType: "compact",
      productCard: "radon"
    },
    slug: "books",
    icon: "BookIcon",
    promotional_sliders: [],
    created_at: "2021-12-07T16:30:18.000000Z",
    updated_at: "2021-12-08T13:06:56.000000Z",
    banners: [
      {
        id: 26,
        type_id: 8,
        title: "book banner",
        description: "this the book demo banner",
        image: {
          id: 1376,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1376/Cover.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1376/conversions/Cover-thumbnail.jpg"
        },
        created_at: "2021-12-08T13:06:56.000000Z",
        updated_at: "2021-12-08T13:06:56.000000Z"
      }
    ]
  },
  // index 8
  {
    id: 9,
    name: "Jewellery",
    settings: {
      isHome: false,
      layoutType: "jewe",
      productCard: "radon"
    },
    slug: "jewellery",
    icon: "JewelleryIcon",
    promotional_sliders: [],
    created_at: "2021-12-07T16:30:18.000000Z",
    updated_at: "2021-12-08T13:06:56.000000Z",
    banners: [
      {
        id: 27,
        type_id: 9,
        title: "jewellery banner",
        description: "this the jewellery demo banner",
        image: {
          id: 1377,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1376/Cover.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1376/conversions/Cover-thumbnail.jpg"
        },
        created_at: "2021-12-08T13:06:56.000000Z",
        updated_at: "2021-12-08T13:06:56.000000Z"
      }
    ]
  },
  // index 9
  {
    id: 10,
    name: "Square",
    settings: {
      isHome: false,
      layoutType: "square",
      productCard: "helium"
    },
    slug: "square",
    icon: "SquareIcon",
    promotional_sliders: [],
    created_at: "2021-12-07T16:30:18.000000Z",
    updated_at: "2021-12-08T13:06:56.000000Z",
    banners: [
      {
        id: 27,
        type_id: 9,
        title: "jewellery banner",
        description: "this the jewellery demo banner",
        image: {
          id: 1377,
          original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1376/Cover.png",
          thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1376/conversions/Cover-thumbnail.jpg"
        },
        created_at: "2021-12-08T13:06:56.000000Z",
        updated_at: "2021-12-08T13:06:56.000000Z"
      }
    ]
  }
]