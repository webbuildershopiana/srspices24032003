import type { NextPageWithLayout } from '@/types';

import type { InferGetStaticPropsType } from 'next';

import { useEffect } from 'react';

import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';

import { scroller } from 'react-scroll';

import HomeLayout from '@/components/layouts/_home';

import Seo from '@/components/seo/seo';

import { useWindowSize } from '@/lib/use-window-size';

import { useType } from '@/framework/type';

import client from '@/framework/client';

import Link from 'next/link';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import JoinButton from '@/components/layouts/menu/join-button';

import GeneralLayout from '@/components/layouts/_general';

import { drawerAtom } from '@/store/drawer-atom';

import parse from 'html-react-parser';

import usePrice from '@/lib/use-price';

import { getStaticProps, getStaticPaths } from 'next';

import {FormattedNumber} from 'react-intl'
import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';

import { authorizationAtom } from '@/store/authorization-atom';

import { useAtom } from 'jotai';
import { useIsRTL } from '@/lib/locals';

import { useState } from 'react';

import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';

import { FreeMode, Mousewheel } from 'swiper';

import { ArrowNextIcon } from '@/components/icons/arrow-next';

import { ArrowPrevIcon } from '@/components/icons/arrow-prev';

import { STATIC_CONTENT } from '@/lib/constants/static-content';
import { formatAllProducts} from '@/lib/format-api-data';

import { formatChildParentCategories} from '@/lib/format-api-data';





export async function getStaticPaths() {
  // Return dummy paths
  return {
    paths: ['/'],
    fallback: true // or 'blocking' if using incremental static regeneration
  };
}

export async function getStaticProps() {
  try {
    const spicymasalaProductReqData: any = {
                                store: DEFAULT_STORE_CODE,
                                count:30,

                                };
                                const spicymasalaProductResponse: any = await client.products.all(spicymasalaProductReqData);
                                const spicymasalaProducts = formatAllProducts(spicymasalaProductResponse?.products);
const allCategoryReqData: any = {
                                store: DEFAULT_STORE_CODE,
                                count:30,

                                };
                                const allCategoryResponse: any = await client.categories.all(allCategoryReqData);
                                const allCategories = formatChildParentCategories(allCategoryResponse?.categories);
//[[API_DATA]]


    return {
      props: {    
        spicymasalaProducts: spicymasalaProducts ?? [],
allCategories: allCategories ?? [],
//[[API_DATA_PROP]]


      },
    };
  } catch (error) {
    // console.log(error);
    return {}
  }
}
const Home:any = ({ 
  spicymasalaProducts,
allCategories,
//[[UI_VARIABLE]]



 }:any) => {
   const [spicymasalaProductsNextEl, setSpicymasalaProductNextEl] = useState<HTMLElement | null>(null);
const [spicymasalaProductsPrevEl, setSpicymasalaProductPrevEl] = useState<HTMLElement | null>(null);
const [, ] = useState<HTMLElement | null>(null);
const [allCategoriesNextEl, setAllCategoryNextEl] = useState<HTMLElement | null>(null);
const [allCategoriesPrevEl, setAllCategoryPrevEl] = useState<HTMLElement | null>(null);
const [, ] = useState<HTMLElement | null>(null);
const [isAuthorize] = useAtom(authorizationAtom);const { isRTL } = useIsRTL();
const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
const breakpoints = {
    120: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    280: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    380: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    430: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    570: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1100: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1536: {
      slidesPerView: 7,
      spaceBetween: 24,
    },
    1800: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    2600: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
  };
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

  return (
    <>
      
 <div className="container-fluid p-0" id="iwt3g">
  <div className="carousel carousel-light slide" data-bs-ride="carousel" id="carouselExampleDark-a9d5845a-6502-4c6d-96e3-57b4ef23c80b">
   <div className="carousel-indicators">
    <div aria-current="true" aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleDark-a9d5845a-6502-4c6d-96e3-57b4ef23c80b" id="ia8z4">
    </div>
    <div aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleDark-a9d5845a-6502-4c6d-96e3-57b4ef23c80b" id="indqq">
    </div>
    <div aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleDark-a9d5845a-6502-4c6d-96e3-57b4ef23c80b" id="i7c55">
    </div>
   </div>
   <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000" id="izdbf">
     <img alt="..." className="d-block w-100" id="im87r" src="https://waffy-demo.myshopify.com/cdn/shop/files/slider1_1.jpg?v=1621575990"/>
     <div className="carousel-caption" id="im8nb">
      <div className="text-dark p-3" id="it74yh">
       <p id="isbdm7">
        All Organi
       </p>
       <h5 id="i2suim">
        20% OFF ALL PRODUCTS
       </h5>
       <h5 id="ificyg">
        USE COUPON : SPL18
       </h5>
      </div>
     </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
     <img alt="..." className="d-block w-100" id="iokct9" src="https://waffy-demo.myshopify.com/cdn/shop/files/slider3_1.jpg?v=1621576043"/>
     <div className="carousel-caption" id="igswjq">
      <div className="text-dark p-3" id="i7xvsj">
       <p id="itbt5i">
        All Organi
       </p>
       <h5 id="i9vglm">
        20% OFF ALL PRODUCTS
       </h5>
       <h5 id="ijlrcr">
        USE COUPON : SPL18
       </h5>
      </div>
     </div>
    </div>
    <div className="carousel-item">
     <img alt="..." className="d-block w-100" id="izysmd" src="https://waffy-demo.myshopify.com/cdn/shop/files/slider2_1.jpg?v=1621576096"/>
     <div className="carousel-caption" id="i81ti8">
      <div className="text-dark p-3" id="i11ivo">
       <p id="init3w">
        All Organi
       </p>
       <h5 id="ilsczk">
        20% OFF ALL PRODUCTS
       </h5>
       <h5 id="irv5g5">
        USE COUPON : SPL18
       </h5>
      </div>
     </div>
    </div>
   </div>
   <div className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleDark-a9d5845a-6502-4c6d-96e3-57b4ef23c80b" id="imygvh">
    <span aria-hidden="true" className="carousel-control-prev-icon" id="im115h">
    </span>
    <span className="visually-hidden">
     Previous
    </span>
   </div>
   <div className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleDark-a9d5845a-6502-4c6d-96e3-57b4ef23c80b" id="ifflym">
    <span aria-hidden="true" className="carousel-control-next-icon" id="idmpbi">
    </span>
    <span className="visually-hidden">
     Next
    </span>
   </div>
  </div>
 </div>
 <section id="irpprp">
  <div className="container" id="i4b68l">
   <div id="i9lx2v">
    Best Products
   </div>
   <div id="i73xwa">
    Pellentesque massa placerat duis ultricies lacus sit sed.
   </div>
  </div>
  <div className="container" id="isjrb5">
   <div className="d-flex align-items-start flex-column" id="ihq9ie">
    <div aria-orientation="vertical" className="nav d-flex w-100 nav-pills justify-content-center gap-4 mb-4" id="v-pills-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tablist">
     <div aria-controls="v-pills-home-3afa0888-b4f3-411f-88f6-d558b8ad8e65" aria-selected="true" className="nav-link active" data-bs-target="#v-pills-home-3afa0888-b4f3-411f-88f6-d558b8ad8e65" data-bs-toggle="pill" id="v-pills-home-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tab" type="button">
      <span id="iizwbr">
       Dried Seeds
      </span>
     </div>
     <div aria-controls="v-pills-profile-3afa0888-b4f3-411f-88f6-d558b8ad8e65" aria-selected="false" className="nav-link" data-bs-target="#v-pills-profile-3afa0888-b4f3-411f-88f6-d558b8ad8e65" data-bs-toggle="pill" id="v-pills-profile-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tab" type="button">
      <span id="ite4qt">
       Spicy Masala
      </span>
     </div>
    </div>
    <div className="tab-content" id="v-pills-tabContent-3afa0888-b4f3-411f-88f6-d558b8ad8e65">
     <div aria-labelledby="v-pills-home-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade show active" id="v-pills-home-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
      <div className="container" collection-name="dried-seeds" collection-type="product" count="30" data-gjs-type="product-collection" id="idmm2d" show-slider="">
       <div className="row relative" data-gjs-type="product-gird">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 w-full" data-gjs-type="product-card">
         <div className="shadow shopiana-bg-white">
          <div data-gjs-type="product-img">
           <img className="w-100 object-fit-cover shopiana-product-image-height" src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"/>
          </div>
          <div data-gjs-type="product-name" id="itmrin">
           <p className="text-truncate px-3">
            {product.name}
           </p>
          </div>
          <div data-gjs-type="product-price" id="it9anl">
           <p className="text-truncate px-3 mb-3">
            <FormattedNumber value={product.price} style="currency" currency="INR" />
           </p>
          </div>
         </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 w-full" data-gjs-type="product-card">
         <div className="shadow shopiana-bg-white">
          <div data-gjs-type="product-img">
           <img className="w-100 object-fit-cover shopiana-product-image-height" src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"/>
          </div>
          <div data-gjs-type="product-name" id="ic2l0f">
           <p className="text-truncate px-3">
            {product.name}
           </p>
          </div>
          <div data-gjs-type="product-price" id="it0llk">
           <p className="text-truncate px-3 mb-3">
            <FormattedNumber value={product.price} style="currency" currency="INR" />
           </p>
          </div>
         </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 w-full" data-gjs-type="product-card">
         <div className="shadow shopiana-bg-white">
          <div data-gjs-type="product-img">
           <img className="w-100 object-fit-cover shopiana-product-image-height" src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"/>
          </div>
          <div data-gjs-type="product-name" id="imnkoq">
           <p className="text-truncate px-3">
            {product.name}
           </p>
          </div>
          <div data-gjs-type="product-price" id="ia9cz9">
           <p className="text-truncate px-3 mb-3">
            <FormattedNumber value={product.price} style="currency" currency="INR" />
           </p>
          </div>
         </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 w-full" data-gjs-type="product-card">
         <div className="shadow shopiana-bg-white" id="i05moy">
          <div data-gjs-type="product-img" id="ifuhki">
           <img className="w-100 object-fit-cover shopiana-product-image-height" src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"/>
          </div>
          <div data-gjs-type="product-name" id="il3xfd">
           <p className="text-truncate px-3">
            {product.name}
           </p>
          </div>
          <div data-gjs-type="product-price" id="i2q6dl">
           <p className="text-truncate px-3 mb-3">
            <FormattedNumber value={product.price} style="currency" currency="INR" />
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div aria-labelledby="v-pills-profile-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade" id="v-pills-profile-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
      <div className="container" collection-name="spicy-masala" collection-type="product" count="30" data-gjs-type="product-collection" id="ilu91t" show-slider="">
       <div className="row relative" data-gjs-type="product-gird">
        <Swiper
                    id="category-card-menu"
                    modules={[Navigation, FreeMode, Mousewheel]}
                    navigation={{
                        prevEl:spicymasalaProductsPrevEl,
                        nextEl:spicymasalaProductsNextEl,
                        disabledClass: 'swiper-button-disabled',
                        hiddenClass: 'swiper-button-hidden',
                        }}
                        breakpoints={breakpoints}
                        slidesPerView={4}
                        mousewheel={true}
                        freeMode={true}
                        >{spicymasalaProducts?.map((product: any, key: any) => {
                            return (
                                <>
                                <SwiperSlide key={key}>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 w-full" data-gjs-type="product-card"><Link href={product.href}><div className="shadow shopiana-bg-white"><div data-gjs-type="product-img"><img className="w-100 object-fit-cover shopiana-product-image-height" src={product.image?.imageUrl}/></div><div data-gjs-type="product-name" id="impmb2"><p className="text-truncate px-3">{product.name}</p></div><div data-gjs-type="product-price" id="iwm7dm"><p className="text-truncate px-3 mb-3"><FormattedNumber value={product.price} style="currency" currency="INR" /></p></div></div></Link></div>
                                </SwiperSlide>
                                </>
                                );
                                })}</Swiper>
                                <div
                                    ref={(node) => setSpicymasalaProductPrevEl(node)}
                                    className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-prev text-heading bg-light shadow-300 top-[40%] ltr:-left-4 rtl:-right-4 focus:outline-none transition-colors hover:text-orange-500"
                                >
                                    <span className="sr-only">{STATIC_CONTENT['text-previous']}</span>
                                    {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
                                </div>
                                <div
                                    ref={(node) => setSpicymasalaProductNextEl(node)}
                                    className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-next text-heading bg-light shadow-300 top-[40%] ltr:-right-4 rtl:-left-4 focus:outline-none transition-colors hover:text-orange-500"
                                >
                                    <span className="sr-only">{STATIC_CONTENT['text-next']}</span>
                                    {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
                                </div>
       </div>
      </div>
     </div>
     <div aria-labelledby="v-pills-messages-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade" id="v-pills-messages-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
     </div>
     <div aria-labelledby="v-pills-settings-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade" id="v-pills-settings-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
     </div>
     <div aria-labelledby="v-pills-about-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade" id="v-pills-about-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
     </div>
     <div aria-labelledby="v-pills-company-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade" id="v-pills-company-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
     </div>
     <div aria-labelledby="v-pills-health-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade" id="v-pills-health-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
     </div>
     <div aria-labelledby="v-pills-business-tab-3afa0888-b4f3-411f-88f6-d558b8ad8e65" className="tab-pane fade" id="v-pills-business-3afa0888-b4f3-411f-88f6-d558b8ad8e65" role="tabpanel">
     </div>
    </div>
   </div>
  </div>
 </section>
 <section id="itiefj">
  <div className="container" id="iptsqz">
   <div className="row row-cols-1 row-cols-md-2" id="idoco5">
    <div className="col" id="iam0zf">
     <div id="i5anxx">
      Healthy Herbs
      <br/>
     </div>
     <div id="i301km">
      Get 10% off
      <br/>
      On all Spicy & Herbs
     </div>
     <div id="indfsp">
      Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup.
      <br/>
     </div>
     <div className="col gap-4 mt-5" id="i1poqk">
      <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="id3opu" role="button">
       View More
      </a>
      <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="i7joft" role="button">
       Shop Now
      </a>
     </div>
    </div>
    <div className="col" id="iiydtv">
    </div>
   </div>
  </div>
 </section>
 <section id="ivj2b2">
  <div className="container" id="iv8lha">
   <div className="row row-cols-md-2" id="imecgk">
    <div className="col col-sm-4 p-3" id="icjs5l">
     <div className="p-3" id="iwwi7i">
      <div className="p-3" id="i5ripk">
       <div id="ia50m6">
        Get 10% off
        <br/>
        On all Spicy & Herbs
       </div>
       <div id="ip45kj">
        50% FLAT OFFER
        <br/>
        ALL PRODUCTS
        <br/>
       </div>
       <div className="col gap-4" id="iw04qf">
        <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="i8thcr" role="button">
         Shop Now
        </a>
       </div>
      </div>
     </div>
    </div>
    <div className="col-sm-8 col-12" id="iqmdf3">
     <div className="row row-cols-md-4" id="iq7dj5">
      <div className="col col-sm-6 p-3" id="igfb6i">
       <div className="col-12 p-3" id="ir45wv">
        <div className="p-3" id="ivkjel">
         <div id="immfxj">
          Cardamom
         </div>
         <div className="col gap-4" id="ibkcus">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="iuv0aq" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
      <div className="col col-sm-6 p-3" id="iu6npb">
       <div className="col-12 p-3" id="iikgk3">
        <div className="p-3" id="ikg96f">
         <div id="ij3xt5">
          Cumin Seeds
         </div>
         <div className="col gap-4" id="i2zwks">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="i4w7ui" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
      <div className="col col-sm-6 p-3" id="ip4mkf">
       <div className="col-12 p-3" id="i0gtx7">
        <div className="p-3" id="ivv2wj">
         <div id="igu4n8">
          Cumin Seeds
         </div>
         <div className="col gap-4" id="ittf7w">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="imvus9" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
      <div className="col col-sm-6 p-3" id="izcqah">
       <div className="col-12 p-3" id="itjomu">
        <div className="p-3" id="i4yf65">
         <div id="ifphuk">
          Cumin Seeds
         </div>
         <div className="col gap-4" id="ig70nj">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="ixci6z" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
 <section id="ixyj18">
  <div className="container" id="itjtbk">
   <div className="row row-cols-md-2" id="ii0gvw">
    <div className="col-sm-8 col-12" id="in6tum">
     <div className="row row-cols-md-4" id="iu622b">
      <div className="col col-sm-6 p-3" id="i0wn3k">
       <div className="col-12 p-3" id="igi9kj">
        <div className="p-3" id="ie5a6u">
         <div id="idumhr">
          Cardamom
         </div>
         <div className="col gap-4" id="isz596">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="ifigns" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
      <div className="col col-sm-6 p-3" id="ib8p6f">
       <div className="col-12 p-3" id="i948q3">
        <div className="p-3" id="iw8oi8">
         <div id="ixop89">
          Cumin Seeds
         </div>
         <div className="col gap-4" id="ie0268">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="i7wemn" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
      <div className="col col-sm-6 p-3" id="inot2y">
       <div className="col-12 p-3" id="iec8wc">
        <div className="p-3" id="iof7gf">
         <div id="i8iqxh">
          Cumin Seeds
         </div>
         <div className="col gap-4" id="iy4nu3">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="ia1lzd" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
      <div className="col col-sm-6 p-3" id="ijluua">
       <div className="col-12 p-3" id="icgy7e">
        <div className="p-3" id="ic5v1j">
         <div id="ik74zl">
          Cumin Seeds
         </div>
         <div className="col gap-4" id="i8jnr5">
          <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="i00u6h" role="button">
           Shop Now
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="col col-sm-4 p-3" id="ii1xe6">
     <div className="p-3" id="iol2og">
      <div className="p-3" id="ianx8j">
       <div id="i65f0g">
        Get 10% off
        <br/>
        On all Spicy & Herbs
       </div>
       <div id="imw2mf">
        50% FLAT OFFER
        <br/>
        ALL PRODUCTS
        <br/>
       </div>
       <div className="col gap-4" id="i2yr8v">
        <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="iedqnu" role="button">
         Shop Now
        </a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
 <section id="izkbz7">
  <div className="container" id="ildzt9">
   <div className="row row-cols-1 row-cols-md-1" id="i2gbli">
    <div className="col" id="iiwvmn">
     <div id="it8fye">
      Cardamom / Clove / Cumin
     </div>
     <div id="ig2s7j">
      50% OFF
     </div>
     <div id="isw89q">
      ALL PRODUCTS
     </div>
     <div className="col gap-4 mt-5" id="i21l64">
      <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="izs3kj" role="button">
       View More
      </a>
      <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="ipic54" role="button">
       Shop Now
      </a>
     </div>
    </div>
   </div>
  </div>
 </section>
 <section className="py-5" id="iex39k">
  <div className="container" id="ilgg3y">
   <div id="irmurd">
    Our Team.
   </div>
   <div id="itbb2h">
    Pellentesque massa placerat duis ultricies lacus sit sed.
   </div>
  </div>
  <div className="container my-4 text-black p-sm-5 p-4" id="ihcduo">
   <div className="row">
    <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5">
     <div className="h-100">
      <img alt="employee-image" className="w-100 h-100" id="iepfmc" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <div className="end-0 py-2 px-3 position-absolute w-75" id="i2esl4">
       <h4 id="i03dci">
        Robert Rose
       </h4>
       <span id="id32dz">
        Product Designer
       </span>
      </div>
     </div>
    </div>
    <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5 mt-md-0 mt-4">
     <div className="h-100">
      <img alt="employee-image" className="w-100 h-100" id="iix24p" src="https://images.pexels.com/photos/1181649/pexels-photo-1181649.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <div className="end-0 py-2 px-3 position-absolute w-75" id="i7fp6t">
       <h4 id="ipc3z3">
        Don Francis
       </h4>
       <span id="i4ie6h">
        Tech Lead
       </span>
      </div>
     </div>
    </div>
    <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5 mt-xl-0 mt-4">
     <div className="h-100">
      <img alt="employee-image" className="w-100 h-100" id="inp7l8" src="https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <div className="end-0 py-2 px-3 position-absolute w-75" id="ie576y">
       <h4 id="ix21ih">
        Alexa Young
       </h4>
       <span id="ilzdtz">
        Product Manager
       </span>
      </div>
     </div>
    </div>
    <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5 mt-xxl-0 mt-4">
     <div className="h-100">
      <img alt="employee-image" className="w-100 h-100" id="i8mbtt" src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <div className="end-0 py-2 px-3 position-absolute w-75" id="innstk">
       <h4 id="i45os8">
        Ashley Jones
       </h4>
       <span id="il3uvj">
        Art Director
       </span>
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
 <section className="py-5" id="i4bsiu">
  <div className="container" id="im51m1">
   <div id="i8ie2i">
    Categories
   </div>
   <div id="io7e58">
    Pellentesque massa placerat duis ultricies lacus sit sed.
   </div>
  </div>
  <div className="container" collection-name="all" collection-type="category" count="30" id="ib470g" show-slider="">
   <div className="row relative" data-gjs-type="category-gird">
    <Swiper
                    id="category-card-menu"
                    modules={[Navigation, FreeMode, Mousewheel]}
                    navigation={{
                        prevEl:allCategoriesPrevEl,
                        nextEl:allCategoriesNextEl,
                        disabledClass: 'swiper-button-disabled',
                        hiddenClass: 'swiper-button-hidden',
                        }}
                        breakpoints={breakpoints}
                        slidesPerView={4}
                        mousewheel={true}
                        freeMode={true}
                        >{allCategories?.map((category: any, key: any) => {
                            return (
                                <>
                                <SwiperSlide key={key}>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 w-full" data-gjs-type="category-card"><Link href={category.href}><div className="shadow shopiana-bg-white"><div data-gjs-type="category-img"><img className="w-100 object-fit-cover shopiana-product-image-height" src={category.image?.imageUrl}/></div><div className="category-name card-title py-3" data-gjs-type="category-name" id="iahhpk"><p className="text-truncate px-3 card-title">{category.name}</p></div></div></Link></div>
                                </SwiperSlide>
                                </>
                                );
                                })}</Swiper>
                                <div
                                    ref={(node) => setAllCategoryPrevEl(node)}
                                    className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-prev text-heading bg-light shadow-300 top-[40%] ltr:-left-4 rtl:-right-4 focus:outline-none transition-colors hover:text-orange-500"
                                >
                                    <span className="sr-only">{STATIC_CONTENT['text-previous']}</span>
                                    {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
                                </div>
                                <div
                                    ref={(node) => setAllCategoryNextEl(node)}
                                    className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-next text-heading bg-light shadow-300 top-[40%] ltr:-right-4 rtl:-left-4 focus:outline-none transition-colors hover:text-orange-500"
                                >
                                    <span className="sr-only">{STATIC_CONTENT['text-next']}</span>
                                    {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
                                </div>
   </div>
  </div>
 </section>
 <section className="py-5" id="i4dxky">
  <div className="container" id="itg829">
   <div id="iopp81">
    About Product
   </div>
   <div id="i8ewm2">
    Pellentesque massa placerat duis ultricies lacus sit sed.
   </div>
  </div>
  <div className="container-fluid" id="i93ypv">
   <div className="row row-cols-sm-2 row-cols-1 row-cols-md-4 py-4" id="iy9sbq">
    <div className="col" id="iuwrav">
     <div className="card h-100">
      <img alt="Skyscrapers" className="card-img-top" id="ix1k2x" src="https://waffy-demo.myshopify.com/cdn/shop/files/6_66c47675-9f17-4bde-bcad-325e3f5e6eb3_970x.jpg?v=1614285054"/>
      <div className="card-body" id="iezekf">
       <h5 className="card-title" id="iei8pv">
        Spicy Masalas
       </h5>
       <p className="card-text" id="i43dl4">
        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
       </p>
       <a className="btn btn-secondary" href="#!" id="ius86f" role="button">
        Read More
       </a>
      </div>
     </div>
    </div>
    <div className="col" id="i9i8lk">
     <div className="card h-100">
      <img alt="Skyscrapers" className="card-img-top" id="iduw3w" src="https://waffy-demo.myshopify.com/cdn/shop/files/2_f76de8c0-48d4-4d64-8892-2645d4145b1e_1280x.jpg?v=1614285054"/>
      <div className="card-body" id="ia2yvy">
       <h5 className="card-title" id="i8g02b">
        Spicy Masalas
       </h5>
       <p className="card-text" id="ifdnau">
        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
       </p>
       <a className="btn btn-secondary" href="#!" id="iu7k6i" role="button">
        Read More
       </a>
      </div>
     </div>
    </div>
    <div className="col" id="i68oyd">
     <div className="card h-100">
      <img alt="Skyscrapers" className="card-img-top" id="ixgafh" src="https://waffy-demo.myshopify.com/cdn/shop/files/1_edbd9eee-ab29-41f6-b777-2a285383f3b4_1280x.jpg?v=1614285054"/>
      <div className="card-body" id="i4q0ov">
       <h5 className="card-title" id="ii63b7">
        Spicy Masalas
       </h5>
       <p className="card-text" id="ig1gtj">
        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
       </p>
       <a className="btn btn-secondary" href="#!" id="iywmgy" role="button">
        Read More
       </a>
      </div>
     </div>
    </div>
    <div className="col" id="i5mf5l">
     <div className="card h-100">
      <img alt="Skyscrapers" className="card-img-top" id="iz4a7x" src="https://waffy-demo.myshopify.com/cdn/shop/files/5_4e38f59d-7f13-4178-bea4-585b14340754_970x.jpg?v=1614285054"/>
      <div className="card-body" id="irb3pf">
       <h5 className="card-title" id="iymal9">
        Spicy Masalas
       </h5>
       <p className="card-text" id="i3iar6">
        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
       </p>
       <a className="btn btn-secondary" href="#!" id="ixy7so" role="button">
        Read More
       </a>
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
 <section id="inwuho">
  <div className="container" id="inxsq9">
   <div id="igva31">
    About Product
   </div>
   <div id="iw5k6n">
    Pellentesque massa placerat duis ultricies lacus sit sed.
   </div>
  </div>
  <div className="container-fluid py-5" id="iqs9yn">
   <div className="row row-cols-sm-2 row-cols-1 py-3 row-cols-md-3" id="ilwd53">
    <div className="col" id="ilv9d4">
     <div className="card h-100">
      <div className="card-body" id="iuqhnj">
       <img alt="Image" className="img-fluid p-3" id="i9elpg" src="https://www.pngkey.com/png/full/610-6108898_my-account-shopping-bag-white-png.png"/>
       <h5 className="card-title" id="i803u1">
        Spicy Masalas
       </h5>
       <p className="card-text" id="is69yh">
        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
       </p>
      </div>
     </div>
    </div>
    <div className="col" id="ibnaag">
     <div className="card h-100">
      <div className="card-body" id="ipo27d">
       <img alt="Image" className="img-fluid p-3" id="il25ii" src="https://www.pngkit.com/png/full/333-3335263_browser-history-clock-icon-vector-white.png"/>
       <h5 className="card-title" id="i1h58s">
        Spicy Masalas
       </h5>
       <p className="card-text" id="iedqje">
        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
       </p>
      </div>
     </div>
    </div>
    <div className="col" id="id1jgy">
     <div className="card h-100">
      <div className="card-body" id="i60kt3">
       <img alt="Image" className="img-fluid p-3" id="ikx1ko" src="https://static.vecteezy.com/system/resources/previews/014/441/366/original/loop-icon-3d-design-for-application-and-website-presentation-png.png"/>
       <h5 className="card-title" id="imctmo">
        Spicy Masalas
       </h5>
       <p className="card-text" id="igmnyo">
        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
  <footer className="text-center text-lg-start bg-white pt-5" id="iic8al">
   
   <div className="container p-4 pb-0" id="ic1is5">
    
    <section>
     
     <div className="row">
      
      <div className="col-lg-4 col-sm-6 mb-4 mb-md-0">
       <a className="navbar-brand" href="#" id="itq1mh">
        <span id="i3dvv1">
         SR
        </span>
        Spices
       </a>
       <p id="i0cws4">
        Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit.
       </p>
       <section className="mb-4 text-center gap-4" id="ia3ky6">
        
        <a href="#!" role="button">
         <svg className="bi bi-facebook" fill="currentColor" height="26" id="ichp7l" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
          </path>
         </svg>
        </a>
        
        <a href="#!" role="button">
         <svg className="bi bi-twitter" fill="currentColor" height="26" id="iiwoms" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
          </path>
         </svg>
        </a>
        
        <a href="#!" role="button">
         <svg className="bi bi-instagram" fill="currentColor" height="26" id="i7m5lq" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
          </path>
         </svg>
        </a>
        
        <a href="#!" id="i4yq4n" role="button">
         <svg className="bi bi-linkedin" fill="currentColor" height="26" id="ihmfwh" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
          </path>
         </svg>
        </a>
       </section>
      </div>
      
      
      <div className="col-lg-2 col-sm-6 mb-4 mb-md-0" id="iod1mt">
       <h5 className="text-uppercase" id="irkk0i">
        Help
       </h5>
       <ul className="list-unstyled mb-0 gap-3" id="ix6byu">
        <li id="inr4wb">
         <a className="text-decoration-none" href="#!" id="iiib6z">
          Search
         </a>
        </li>
        <li id="iwfgu5">
         <a className="text-decoration-none" href="#!" id="ikkjpd">
          Help
         </a>
        </li>
        <li id="ijpdjj">
         <a className="text-decoration-none" href="#!" id="ia5yrn">
          Information
         </a>
        </li>
        <li id="ih964j">
         <a className="text-decoration-none" href="#!" id="ihgth4">
          Privacy Policy
         </a>
        </li>
       </ul>
      </div>
      
      
      <div className="col-lg-2 col-sm-6 mb-4 mb-md-0" id="ipitll">
       <h5 className="text-uppercase" id="itskkj">
        Support
       </h5>
       <ul className="list-unstyled mb-0 gap-3" id="iu1xii">
        <li id="ia3b3g">
         <a className="text-decoration-none" href="#!" id="i3xd5l">
          Contact Us
         </a>
        </li>
        <li id="ipnpzz">
         <a className="text-decoration-none" href="#!" id="ihqbwy">
          About Us
         </a>
        </li>
        <li id="i58iml">
         <a className="text-decoration-none" href="#!" id="ikg3qo">
          Career
         </a>
        </li>
        <li id="ic692m">
         <a className="text-decoration-none" href="#!" id="i0yxni">
          Refund
         </a>
        </li>
       </ul>
      </div>
      
      
      <div className="col-lg-2 col-sm-6 mb-4 mb-md-0" id="i9ee5h">
       <h5 className="text-uppercase" id="iovdnm">
        Information
       </h5>
       <ul className="list-unstyled mb-0 gap-3" id="if2uxq">
        <li id="i9ke0k">
         <a className="text-decoration-none" href="#!" id="i5eltl">
          Search Term
         </a>
        </li>
        <li id="iq3qyd">
         <a className="text-decoration-none" href="#!" id="ig9b47">
          Advantage
         </a>
        </li>
        <li id="igpx38">
         <a className="text-decoration-none" href="#!" id="iser9m">
          Help
         </a>
        </li>
        <li id="iyc2eq">
         <a className="text-decoration-none" href="#!" id="icazz9">
          Support
         </a>
        </li>
       </ul>
      </div>
      
      
      <div className="col-lg-2 col-sm-6 mb-4 mb-md-0" id="ih7qax">
       <h5 className="text-uppercase" id="i8qcrg">
        Contact us
       </h5>
       <ul className="list-unstyled mb-0 gap-3" id="ijazuz">
        <li id="i5k4sv">
         <a className="text-decoration-none" href="#!" id="i8suf6">
          C-123 , Jaipur, Rajasthan
         </a>
        </li>
        <li id="i5mh8f">
         <a className="text-decoration-none" href="#!" id="ing5sg">
          78767668872
         </a>
        </li>
        <li id="iqj6yt">
         <a className="text-decoration-none" href="#!" id="i6kr9p">
          67828373732
         </a>
        </li>
        <li id="ixycwn">
         <a className="text-decoration-none" href="#!" id="iyvm5v">
          abc@gmail.com
         </a>
        </li>
       </ul>
      </div>
      
     </div>
     
    </section>
    
    <hr className="mb-4"/>
    
    
    
   </div>
   
   
   <div className="text-center p-3" id="ibwxtl">
    <span>
     © 2023 Copyright :
    </span>
    <a className="text-decoration-none" href="https://mdbootstrap.com/" id="i3g81y">
     SR Spices
    </a>
   </div>
   
  </footer>
 </section>


      
    </>
  );
};
Home.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default Home;
