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

const returnpagePage = ({ 
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
    
 <section id="i6ijey">
  <div className="container" id="ic8f1h">
   <div className="mb-4" id="ihfzgr">
    Return Policy
    <br/>
   </div>
   <div id="iki53c">
    Order cancellation
    <br/>
   </div>
   <div id="i2vjdi">
    To cancel an order, simply call our customer service at +91-8107246307 (9AM - 6PM) or email us at
    <b>
     <span id="ivv22i">
      care@sonakshicreation.com
     </span>
    </b>
    . Once it’s shipped from our office, you cannot cancel your order. You will receive a shipment confirmation email when your order is shipped out.
    <br/>
   </div>
   <div className="mt-4" id="is005t">
    Returns policy
    <br/>
   </div>
   <div id="i62h8b">
    We accept/not accept returns under the following situations:
    <br/>
    <br/>
    Damaged items getting delivered
    <br/>
    <br/>
    Delivery of wrong items – not according to your order
    <br/>
    <br/>
    Returning of the product will not be accepted when the customer has no valid reason for returning the product. And if the customer wishes to return under no given valid reason, the customer must bear the shipping charges.
    <br/>
   </div>
   <div className="mt-4" id="iehi74">
    Damaged items getting delivered
    <br/>
   </div>
   <div id="ilhu8l">
    If your package appears damaged, and upon opening it if you find the artifact damaged, call us at +91-8107246307 (9AM - 6PM) / email us at care@sonakshicreation.com  within 48 hours of receipt of the package. Kindly follow the steps below so that we can process your returns as quickly as possible.
    <br/>
    <br/>
    Make a note of the damage on the courier's copy of the airway bill, and a copy of the airway bill, which you retain.
    <br/>
    Also, appropriate remarks should be made on the delivery sheet (if applicable) of the courier personnel making the delivery.
    <br/>
    Please notify Sonakshi creation directly within 2 days of receipt of the Handicraft/Jewellery if there is damage along with the details of the damage.
    <br/>
    <br/>
    Also send us images of the work with close ups of the damaged portion(s)
    <br/>
    When you call us/ email us, we will discuss a replacement, refund or credit. In case you desire a replacement, please ship the Handicraft/Jewellery back in the original packing materials and container. As soon as we receive your returned artifact, a replacement will be shipped to you at no charge. The cost of returning damaged items will have to borne by you initially. Upon receiving the damaged items and confirming that they have been damaged in transit, we will refund the cost of your shipping the items back to us.
    <br/>
    <br/>
    Unfortunately, replacements are not available for one–of-a-kind works (customized Handicraft/Jewellery) immediately. In such a case we would inform you about the feasibility of making another copy of the same object and the time that would be required.
    <br/>
   </div>
   <div className="mt-4" id="iowauf">
    Delivery of wrong items – not according to your order
    <br/>
   </div>
   <div id="i01o34">
    Upon receipt of the item/s, if you find that they are not as per your order, please inform us within 48 hours of such receipt. You may call us at +91 8107246307 (9AM - 6PM) or email us at care@sonakshicreation.com. Please provide us with the following:
    <br/>
    Details of your order number and the item/s included in your order.
    <br/>
    <br/>
    Invoice number accompanying your order
    <br/>
    <br/>
    Consignment number of the courier’s airway bill
    <br/>
    <br/>
    When you call us/ email us, we will discuss a replacement, refund or credit. In case you desire a replacement, please ship the item/s back in the original packing materials and container. As soon as we receive your returned item/s and confirm that they are in good condition, your originally ordered item/s will be shipped to you at no charge. The cost of returning wrongly shipped items will have to borne by you initially. Upon receiving the returned items in good condition, we will refund the cost of your shipping.
    <br/>
   </div>
   <div className="mt-4" id="if6z04">
    Refund policy
    <br/>
   </div>
   <div id="igciql">
    Refunds are processed in a maximum of 15 days from the date on which SonakshiCreation receives returned goods. Through Net Banking, Debit Card or Credit Card, the amount will be transferred back into the bank account from which it was paid.
    <br/>
   </div>
  </div>
 </section>


    </>
  );
};
returnpagePage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default returnpagePage;
