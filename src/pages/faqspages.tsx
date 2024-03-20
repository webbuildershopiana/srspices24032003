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

const faqspagesPage = ({ 
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
    
 <section id="i4nw0c">
  <div id="ik664u">
   <div className="container-fluid border py-4" id="ic37ha">
    <h1 className="text-center" id="i7uzsq">
     FAQ
    </h1>
    <div className="accordion" id="iopvf7">
     <div className="accordion-item">
      <div className="accordion-item-header" id="isvjzj">
       <h2 className="m-0" id="igefw7">
        Q1: What are shipping charges to my location?
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content">
        <p id="itfna4">
         India: Free Shipping
         <br/>
         <br/>
         Other Countries: Shipping charges vary according to weight/volumetric weight of product. From our end, we try to ship to most of the countries with the help of our courier partners. Do reach us at our contact page. In such cases, we take an estimate of shipping from our courier partners and pass the same information to you.
         <br/>
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item">
      <div className="accordion-item-header" id="i18w9i">
       <h2 className="m-0" id="ioz7yd">
        Q2: What are the currency available for shopping on the website?
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content">
        <p id="iq5dug">
         You can shop on the website in INR (Indian Rupee) or USD (United States Dollars). You can change the currency indicator by clicking on the button next to “CALL US”
         <br/>
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item">
      <div className="accordion-item-header" id="iukdkj">
       <h2 className="m-0" id="i4z4bk">
        Q3: Do product prices vary from country to country?
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content">
        <p id="idkfp5">
         The product price remains same irrespective of the country you shop from. Only the shipping prices change depending upon your delivery location.
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item">
      <div className="accordion-item-header" id="i0dqhh">
       <h2 className="m-0" id="ii340e">
        Q4: How much time will it take for my product to get delivered?
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content" id="idrnad">
        <p id="iwdyhh">
         All shipments (In India & Worldwide) are delivered in 4-7 business days once the order is received.
         <br/>
         *In case you order a
         <br/>
         Customise order, the team will get in touch with you for the customisation. Customisation orders take 7-15 business days to get delivered.
         <br/>
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item">
      <div className="accordion-item-header">
       <h2 className="m-0" id="i7ultz">
        Q5: What payment options are available for me?
        <br/>
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content" id="ihr6p1">
        <p id="ihx06h">
         Customise order, the team will get in touch with you for the customisation. Customisation orders take 7-15 business days to get delivered.
         <br/>
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item">
      <div className="accordion-item-header" id="i36oa4">
       <h2 className="m-0" id="ieiyah">
        Q6: What if my product is damaged in transit?
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content">
        <p id="isjhh8">
         India: In such cases, please send an email at care@sonakshicreation.com within 48 hours of delivery. Do mention your order number and attach a few snapshots of the damaged product. After investigation, SonakshiCreation will ship the replacement against the damaged product (Free of Cost) or will issue a credit note of same value, valid for one year. Read more about our Return Policy.
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item" id="irdyyi">
      <div className="accordion-item-header" id="iccs7j">
       <h2 className="m-0" id="igs8vh">
        Q7: What if I want to buy in wholesale or for reselling?
       </h2>
      </div>
      <div className="accordion-item-body" id="igcmm3">
       <div className="accordion-item-body-content" id="ixr3my">
        <p id="i4wip8">
         You can contact us through mail or by calling us.
         <br/>
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item">
      <div className="accordion-item-header" id="i9zqb8">
       <h2 className="m-0" id="ijpjzf">
        Q8: What is an SKU code?
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content" id="iiy5hn">
        <p id="ibqask">
         Each product on the website has a unique code attached to it. You can view the SKU code of the product by visiting the product page.
         <br/>
        </p>
       </div>
      </div>
     </div>
     <div className="accordion-item">
      <div className="accordion-item-header">
       <h2 className="m-0" id="i1g3q9">
        Q9: I still have a question, what can I do?
       </h2>
      </div>
      <div className="accordion-item-body">
       <div className="accordion-item-body-content" id="izpunr">
        <p id="i41nzq">
         Feel free to reach us on-care@sonakshicreation.com
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
   <h1 className="text-center mb-5" id="in0wqi">
    Jewellery Care
    <br/>
   </h1>
  </div>
  <div id="iiae0w">
   Your Sonakshi creation Jewellery is made from 925 sterling silver. A beautiful precious metal that does need a little love and care to keep it at its best. Tarnish is caused by a reaction with Sulphur that naturally occurs in the air.
   <br/>
   <br/>
   Tarnished silver will turn a darkish grey-black colour and is most easily removed when it first becomes visible. Sterling silver will naturally tarnish with exposure to the air, environment, perfumes, moisturizers, hairspray, soaps and perspiration etc. These are obviously a fact of life so regular cleaning will help keep your silver sparkling.
   <br/>
   <br/>
   5 easy ways to keep your silver jewellery at its brilliant best:
   <br/>
   <br/>
   Make accessorizing the last finishing touch – Select your jewellery after you have applied make-up, perfume and hairspray to avoid unnecessary contact with these chemicals.
   <br/>
   <br/>
   Do not swim or shower in your jewellery.
   <br/>
   <br/>
   Remove your jewellery before exercising - wrestling with a wayward necklace mid downward dog is not a good look anyway!
   <br/>
   <br/>
   You may want to show off your jewellery on the beach but the direct sunlight, sand and salt water won't do it any favors, save it to wow when having cocktails later.
   <br/>
   <br/>
   Storage is king! Continue reading for our guide to putting your jewellery to bed.
   <br/>
  </div>
  <h1 className="text-center mb-5 mt-4" id="i6ruqe">
   Storing your sterling silver jewellery
   <br/>
  </h1>
  <div id="iroaoy">
   Sterling Silver loves somewhere cool, dark and moisture free to live.
   <br/>
   Fasten all of your chains to stop them getting tangled, always fasten any extender chains on the last hole.
   <br/>
   Store your jewellery in an airtight jewellery box or even in little airtight Ziploc bags or soft pouches (delivered to you with the product you ordered) and always separately as they can scratch each other.
   <br/>
   <br/>
   Wonderfully silver that is regularly used typically needs less care, so a great reason to wear your beautiful pieces regularly.
   <br/>
  </div>
 </section>


    </>
  );
};
faqspagesPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default faqspagesPage;
