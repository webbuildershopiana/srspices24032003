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

const privacypagePage = ({ 
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
    
 <section id="i4b3t1">
  <div className="container" id="iszdew">
   <div id="i5y0ao">
    Privacy Policy
    <br/>
   </div>
   <div className="mb-5" id="i7xprtd">
    This privacy policy sets out how SonakshiCreation uses and protects any information that you give SonakshiCreation when you use this website. SonakshiCreation is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. SonakshiCreation may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
    <br/>
   </div>
   <div id="iukkxj">
    What we collect
    <br/>
   </div>
   <div id="ib3wif">
    We may collect the following information:
    <br/>
    name
    <br/>
    contact information including email address
    <br/>
    demographic information such as postcode, preferences and interests
    <br/>
    other information relevant to customer surveys and/or offers
    <br/>
   </div>
   <div className="mt-4" id="ifz3cf">
    What we do with the information we gather
    <br/>
   </div>
   <div id="ikxi1u">
    We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
    <br/>
    <br/>
    Internal record keeping.
    <br/>
    <br/>
    We may use the information to improve our products and services.
    <br/>
    <br/>
    We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
    <br/>
    From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
    <br/>
   </div>
   <div className="mt-4" id="iyx08a">
    Security
    <br/>
   </div>
   <div id="ilgnjg">
    We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
    <br/>
   </div>
   <div className="mt-4" id="ivpmxx">
    How we use cookies
    <br/>
   </div>
   <div id="iflwnk">
    A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
    <br/>
    <br/>
    We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
    <br/>
    <br/>
    Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
    <br/>
   </div>
   <div className="mt-4" id="iws806">
    Links to other websites
    <br/>
   </div>
   <div id="ivy2og">
    Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
    <br/>
   </div>
   <div className="mt-4" id="igfc96">
    Controlling your personal information
    <br/>
   </div>
   <div id="iisj09">
    You may choose to restrict the collection or use of your personal information in the following ways:
    <br/>
    whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes
    <br/>
    <br/>
    if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at care@sonakshicreation.com
    <br/>
    <br/>
    We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
    <br/>
    <br/>
    You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you, please write to.
    <br/>
    <br/>
    If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
    <br/>
   </div>
  </div>
  <div className="container mt-5" id="issnreu">
   <div id="im95q0i">
    Payment Security
    <br/>
   </div>
   <div className="mb-5" id="isw5qc1">
    Safe and Secure Shopping
    <br/>
   </div>
   <div id="ih3qkhx">
    Is it safe to use my Credit/Debit card on Sonakshi creation?
    <br/>
   </div>
   <div id="iz1yhyn">
    Yes, shopping at Sonakshi creation is 100% safe. All Credit card and Debit card payments on Sonakshi creation are processed through secure and trusted payment gateways managed by leading Indian banks. It uses latest 256-bit encryption technology to protect your card information while securely transmitting it to the Banks for processing the payment.
    <br/>
    <br/>
    Furthermore, the Banks ask you to enter an online password (also known as 3D Secure password) which acts as an additional layer of security for your card transaction. This 3D Secure password is not printed anywhere on the card and is known only to you, giving you the added assurance that only you can use your card to make purchases on the Internet. This makes your online transaction on Sonakshi creation extremely safe and secure.
    <br/>
    <br/>
    You can be assured that Sonakshi Creation offers you the highest standards of security currently available on the internet so as to ensure that your shopping experience is private, safe and secure.
    <br/>
   </div>
   <div className="mt-4" id="iz3j3zh">
    Does Sonakshi Creation store my Credit/Debit card information?
    <br/>
   </div>
   <div id="idpww8f">
    No we don't store this information with us. You enter this information on secure payment gateway which is authorized by Indian Government.
    <br/>
   </div>
  </div>
  <div className="container mt-5" id="iwuwm9m">
   <div className="mb-5" id="immoqa4">
    Payment Options
    <br/>
   </div>
   <div id="i6uprcu">
    Which Credit cards are supported on Sonakshi creation?
    <br/>
   </div>
   <div id="ifqum8j">
    We accept all MasterCard, Visa and American Express Credit cards.
    <br/>
   </div>
   <div className="mt-4" id="ik7ie02">
    Do you accept international credit cards on Sonakshi creation?
    <br/>
   </div>
   <div id="iqhwj8h">
    Yes, we do accept international credit cards on www.sonakshicreation.com via PayPal.
    <br/>
   </div>
   <div className="mt-4" id="ijmt5qj">
    What other payment options are available on Sonakshi creation?
    <br/>
   </div>
   <div id="ita7k0l">
    Apart from Credit and Debit Cards, we accept payments by Internet Banking
    <br/>
   </div>
  </div>
  <div className="container mt-5" id="itm6h4i">
   <div className="mb-5" id="i9mmgfj">
    Shipping Policy
    <br/>
   </div>
   <div id="i2ejyci">
    Shipping & Delivery
    <br/>
   </div>
   <div id="ig7qesx">
    We strive to deliver products purchased from Sonakshi Creation in excellent condition and in the fastest time possible. For all purchases within India, we will deliver the order to your doorstep free of cost. Shipping charges will be applicable for all orders to be delivered in other countries except India.
    <br/>
    <br/>
    If the order is lost or un-delivered to your preferred location, we will refund the complete order amount including shipping charges.
    <br/>
    <br/>
    If you return an order delivered to you, original shipping charges will not be refunded.
    <br/>
   </div>
   <div className="mt-4" id="ijk917h">
    Delivery Time
    <br/>
   </div>
   <div id="ie9jwqc">
    We dispatch products within 48 hours and it usually get delivered in next 1 to 3 working days.
    <br/>
    To ensure that your order is delivered on-time, please make sure of the following while entering your Shipping Address and Phone Number details:
    <br/>
    <br/>
    Provide complete address details with House Number, Floor, Street Name and Locality along with a Landmark. Email etc.
    <br/>
    Enter correct City, State and Zip/Postal Code details. Orders may get misrouted if these details are incorrect.
    <br/>
    Kindly make sure that Phone number (preferably mobile) is correct and reachable. We may need to call you for delivery related queries.
    <br/>
    <br/>
    Please do not accept the package if it appears to have been tampered with. If a product is damaged, inform our customer service immediately at +91 8107246307  (9AM - 6PM) or care@sonakshicreation.com
    <br/>
   </div>
  </div>
 </section>


    </>
  );
};
privacypagePage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default privacypagePage;
