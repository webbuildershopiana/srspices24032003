import { useTranslation } from 'next-i18next';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import client from '@/framework/client';

import Link from 'next/link';

import GeneralLayout from '@/components/layouts/_general';

import { useEffect } from 'react';

import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';

import { authorizationAtom } from '@/store/authorization-atom';

import { useAtom } from 'jotai';

//[[UI_IMPORT]]
export const getServerSideProps: any = async () => {
  try {
    //[[API_DATA]]
    return {
      props: {    
        //[[API_DATA_PROP]]
      },
    };
  } catch (error) {
    console.log(error);
    return {}
  }
}

const aboutpagePage = ({ 
  //[[UI_VARIABLE]]

 }:any)=> {
  useEffect(() => {
    // console.log("test use r")
    const commonScript = document.createElement("script");
    commonScript.src = "/assets/script.js";
    document.head.appendChild(commonScript);
    return () => {
      document.head.removeChild(commonScript);
    };
  }, []);
 const [isAuthorize] = useAtom(authorizationAtom);
//[[UI_HOOK]]
  return (
    <>
    
 <section className="container-fluid d-flex justify-content-center align-items-center pt-5" id="ibviff">
  <div className="d-flex justify-content-center align-items-center flex-column w-75 text-black" id="idktbh">
   <h1 className="display-3 fw-bold text-center" id="i6h02s">
    About Us
   </h1>
   <p className="px-sm-5 px-1 mt-3 mb-4 text-center" id="ictftg">
    Sonakshi Creation offers access to reserves of handcrafted artifacts and Jewelry - either richly curated by partnering with empanelled artisan communities and independent artists. Borrowing inspiration from our ‘Rajasthan Karigar’ roots, we devote this gateway to the uniformly evolving and ever inspirational creation of Indian Artisan-ship.
   </p>
  </div>
 </section>
 <section className="container-fluid p-5" id="iqa7hi">
  <div className="container pb-3" id="i5a9d4">
   <div className="row" id="inlpkg">
    <div className="col-md-8 col-12" id="i5njei">
     <div className="d-flex flex-column justify-content-center px-sm-5 px-2 py-5 text-black" id="i0wjt8">
      <h1 id="i87kue">
       Sonakshi Creation
      </h1>
      <p className="mt-2 mb-3" id="iwyi3o">
       Our mission is to offer the global audience a gateway to hand-picked Indian artifacts and Jewelry and incite a conversation dedicated to conserving arts and crafts. Rajasthan is famously known for the "Treasure trove of Indian handicrafts". These handicrafts have also earned the country endless love. Hence, we bring to you hand crafted work directly here from Rajasthan under one roof.
       <br/>
       <br/>
       To bring your home to life, you need decor with outstanding pieces of craftsmanship and art that you can see and feel. Every detail matters – clean designs, meticulous craftsmanship, stunning portraits and artifacts, personal touches and colours, and the highest quality materials. The art is functional, beautiful and has a view. You may never know who created these works of art. However, you know from where to order – Sonakshi Creation
       <br/>
      </p>
     </div>
    </div>
    <div className="col-md-4 col-12 p-0">
     <img alt="About-Image" className="img-fluid w-100 h-100" id="ijjqtc" src="https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
   </div>
   <p className="mt-2 mb-3 mx-3" id="ibxk6b">
    Decorate your home with our decor, paintings, furnishings & kitchen items. Gifting handcrafted gifts to your loved ones is the latest trend as it shows the efforts of the artisans and also says a lot about the country. These crafts are made by love, care and it’s just curated for you
    <br/>
    <br/>
    Sonakshi Creation is the gateway to the best Indian artifacts. Give, Buy and Experience handmade as it is the new inheritance. Delivering Rajasthan's trends at your home! Happy shopping and gifting
    <br/>
   </p>
  </div>
 </section>
 <section className="container-fluid p-0" id="i270sc">
  <div className="row row-cols-md-2">
   <div className="col-sm-6 col-12 bg-white p-md-5 p-sm-4 p-5 border" id="ib6xil">
    <div className="h-100 d-flex justify-content-center align-self-center flex-column">
     <h1 id="id38tp">
      Careers
      <br/>
     </h1>
     <h6 id="iclsmj">
      Wish to join our team?
     </h6>
    </div>
   </div>
   <div className="col-sm-6 col-12 p-md-5 p-sm-4 p-5 d-flex flex-column justify-content-center" id="ibhnfp">
    <p className="mt-3" id="ivmvpt">
     If interested, kindly email us at ashish@sonakshicreation.com. Don't miss attaching your resume and portfolio for consideration. We look forward to your application and the opportunity to collaborate! Best regards
     <br/>
    </p>
   </div>
  </div>
  <section className="pb-4" id="ite71j">
   <div className="text-black container px-lg-5 px-md-0 px-4 pt-5 pb-sm-5 pb-3" id="ig5177">
    <h2 className="fs-1" id="iz4hwl">
     Bulk Order
    </h2>
    <p className="mt-4" id="iiu1gy">
     All bulk orders for your special occasion, wedding gifts, housewarming party, etc. can be made with Sonakshi Creation. To purchase a large quantity of a single item or multiple items you can call us on +91 8107246307 or write us at
     <b>
      <span id="i3dwbk">
       sales@sonakshicreation.com
      </span>
     </b>
     and let us know about your requirements. For Bulk orders below are the key points.
     <br/>
     Customization: We offer all type of customization that are sometime required for specific purposes such as names on products, custom packaging, collateral, gift message or any other branding and co-branding type of opportunities.
     <br/>
     Gifts & Bundling: We can offer you gifts and bundling of all products so as to make your bulk purchase more meaningful and easy.
     <br/>
     Order Placement and Execution: After discussion on your requirements our team will share wholesale prices of products in which you are interested. Then you can place your order over mail and our team will create an invoice as per your order and will send you invoice over mail for confirmation.
     <br/>
     Payments: For Bulk Orders, you can also make payment with check, demand draft, rtgs/neft in addition to credit card, debit card, or net banking.
     <br/>
     Packing and Shipping: We strive to deliver products purchased from Sonakshi creation in excellent condition and in the fastest time possible. Shipping charges will be applicable for all orders to be delivered in other countries except India. For all purchases within India, we will deliver the order to your doorstep free of cost.
     <br/>
    </p>
   </div>
   <div className="container my-4 text-black p-sm-5 p-4" id="il2ftf">
    <div className="row">
     <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5">
      <div className="h-100">
       <img alt="employee-image" className="w-100 h-100" id="ic9ogd" src="https://5.imimg.com/data5/SELLER/Default/2023/8/337079384/UY/GX/CJ/158050491/ktcw009-500x500.png"/>
       <div className="end-0 py-2 px-3 position-absolute w-75" id="iea0bv">
        <h4 className="py-2" id="i7grai">
         HandiCraft For Wall
        </h4>
       </div>
      </div>
     </div>
     <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5 mt-md-0 mt-4">
      <div className="h-100">
       <img alt="employee-image" className="w-100 h-100" id="i7106f" src="https://cdn.theculturetrip.com/wp-content/uploads/2016/01/Handicrafts-from-India_WikiCommons-650x4771-650x477.jpg"/>
       <div className="end-0 py-2 px-3 position-absolute w-75" id="i40xvl">
        <h4 className="py-2" id="i3m8qx">
         Hand Craft Statues
        </h4>
       </div>
      </div>
     </div>
     <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5 mt-xl-0 mt-4">
      <div className="h-100">
       <img alt="employee-image" className="w-100 h-100" id="iaz2vv" src="https://en.idei.club/uploads/posts/2023-06/thumbs/1685604370_en-idei-club-p-decoration-pieces-dizain-pinterest-39.jpg"/>
       <div className="end-0 py-2 px-3 position-absolute w-75" id="iid7p8">
        <h4 className="py-2" id="imizvj">
         Unique Wall Decore
        </h4>
       </div>
      </div>
     </div>
     <div className="col col-xxl-3 col-xl-4 col-md-6 col-12 position-relative mb-5 mt-xxl-0 mt-4">
      <div className="h-100">
       <img alt="employee-image" className="w-100 h-100" id="if5yp2" src="https://m.media-amazon.com/images/I/81AzD-hsl-L.jpg"/>
       <div className="end-0 py-2 px-3 position-absolute w-75" id="iu47d5">
        <h4 className="py-2" id="iktnfc">
         Antique Statues
        </h4>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="text-black container px-lg-5 px-md-0 px-4 pt-5 pb-sm-5 pb-3" id="i0x7ef">
    <h2 className="fs-1" id="ijure9">
     Corporate Gifts
     <br/>
    </h2>
    <p className="mt-4" id="ityksa">
     Corporate gifts are critical for a company's relationship with its clients and employees. Free gifts are wonderful advertising accessories that set up exciting influence on the prospective clients and employees. These gifts can help a company immensely by positively affecting the incoming revenues and work culture within the company. Corporate functions, formal release of products or services, festivals are few occasions when these gifts can be given away. As marketing tools, these gifts are very effective because they serve a variety of purposes. Giveaways are something which consistently entice men and women making these individuals feel really special and it actually does miracles for the company.
     <br/>
     <br/>
     Sonakshi creation have been in the corporate gifting industry for past many years, catering to all needs of corporates for the gifting purpose. We have gifts that fit all budgets, customized to the clients liking. SonakshiCreation offers a sincere access to a treasure of hand crafted Sculpture or Jewelry. either richly curated by partnering with empanelled artisan communities and independent artists. Borrowing inspiration from our ‘Rajasthani Karigar’ roots, we dedicate this gateway to the constantly evolving and ever inspiring nature of Indian Artisan-ship. Our mission is to offer the global audience a gateway to handpicked Indian artifacts, and inspire a conversation dedicated to conserving arts and crafts.
     <br/>
    </p>
   </div>
  </section>
 </section>
 <section className="container-fluid text-black py-5" id="i7f9sp">
  <div className="container text-center">
   <h1 id="ixfugh">
    Why Us?
    <br/>
   </h1>
   <p className="mt-3" id="ionuco">
    We have competitive edge over our customers because of the following reasons:
    <br/>
   </p>
   <div className="row row-cols-md-6" id="imsyvb">
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="ilp4sq">
     <img alt="service-image" className="img-fluid rounded-circle" id="i7dbhe" src="data:image/jpeg;base64,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"/>
     <p className="px-xl-5 px-2" id="idlt1l">
      State-of-the-art production units
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="i4w8lu">
     <img alt="service-image" className="img-fluid rounded-circle" id="ipxymu" src="https://www.ecomm-guru.com/wp-content/uploads/2021/03/handicraft.jpeg"/>
     <p className="px-xl-5 px-2" id="ikzoj3">
      Unique Products
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="ilabnt">
     <img alt="service-image" className="img-fluid rounded-circle" id="i2gn8q" src="https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customer+satisfaction.jpg"/>
     <p className="px-xl-5 px-2" id="irc4ye">
      Expertise in ensuring customer satisfaction
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="i1yrnp">
     <img alt="service-image" className="img-fluid rounded-circle" id="i3qk2n" src="data:image/jpeg;base64,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"/>
     <p className="px-xl-5 px-2" id="izv4r5">
      High quality products
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="i5k1pu">
     <img alt="service-image" className="img-fluid rounded-circle" id="ityocg" src="data:image/jpeg;base64,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"/>
     <p className="px-xl-5 px-2" id="issjij">
      Beautifully designed gifts
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="i50jh3">
     <img alt="service-image" className="img-fluid rounded-circle" id="i2zrkc" src="https://img.freepik.com/free-photo/quality-control-inspector-writing-reports-while-analzying-manufactured-steel-rod-cylinders-industrial-building_637285-4081.jpg"/>
     <p className="px-xl-5 px-2" id="i45gtf">
      Proper quality inspection
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="i7k7lh">
     <img alt="service-image" className="img-fluid rounded-circle" id="io0xml" src="https://m.media-amazon.com/images/I/71yv8ny2zcL._AC_UF894,1000_QL80_.jpg"/>
     <p className="px-xl-5 px-2" id="i8rpwf">
      Transparent deals
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="iggulk">
     <img alt="service-image" className="img-fluid rounded-circle" id="izfoib" src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/12/Handicraft-Manufacturing2--1-.jpg"/>
     <p className="px-xl-5 px-2" id="ilicfc">
      Prompt delivery
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5" id="ing48r">
     <img alt="service-image" className="img-fluid rounded-circle" id="i0olz5" src="https://img.freepik.com/premium-vector/business-ethics-word-concepts-banner-corporate-policy-ethical-management-partnership-presentation-website-isolated-lettering-typography-idea-with-linear-icons-vector-outline-illustration_106317-11956.jpg"/>
     <p className="px-xl-5 px-2" id="i6mvxg">
      Ethical business policies
      <br/>
     </p>
    </div>
   </div>
   <p className="mt-3" id="iul2l7">
    To inquiry regarding corporate gifts you can call us on +91-8107246307 or write us at
    <span id="icjqzf">
     sales@sonakshicreation.com
    </span>
    and let us know about your requirements
    <br/>
   </p>
  </div>
 </section>


    </>
  );
};
aboutpagePage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default aboutpagePage;
