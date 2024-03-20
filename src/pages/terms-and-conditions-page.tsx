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

const termsAndConditionsPagePage = ({ 
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
    
 <section id="iu20ft5">
  <div className="container" id="itp6tk8">
   <div className="mb-5" id="imsted6">
    Terms & Conditions
    <br/>
   </div>
   <div id="ibehy0n">
    Warranty and Liability
    <br/>
   </div>
   <div id="i8zaoip">
    Sonakshicreation.com does not warrant and shall not be responsible for the damage arising out of the use of the products listed on its site. If a product delivered to you is different than as described on the website, Sonakshicreation.com is liable only to change the product. Sonakshicreation.com is not responsible for delays arising out of force majeure.
    <br/>
   </div>
   <div className="mt-4" id="iejuaue">
    Copyright and Intellectual Property
    <br/>
   </div>
   <div id="ierei4h">
    All information displayed, transmitted or carried on Sonakshicreation.com is protected by copyright and other intellectual property laws. This site is designed, updated and maintained independently by Sonakshicreation.com You should not modify, publish, transmit, transfer, sell, reproduce, create derivative work from, distribute, perform, display or in any way commercially exploit any of the content at Sonakshicreation.com
    <br/>
    <br/>
    Sonakshicreation.com respects third party Intellectual Property rights and actively supports protection of all third party Intellectual Property including Copyrights and Trademarks (“IP”). It is our policy to expeditiously respond to clear notices of alleged IP infringement. If we receive proper notification of IP infringement, our response to such notices will include removing or disabling access to material claimed to be the subject of infringing activity. For all disputes where " Sonakshicreation.com " brand infringements any copyright and trademark, jurisdiction shall lie in the courts of Jaipur City (Rajasthan, India) only.
    <br/>
   </div>
   <div className="mt-4" id="ixywzcx">
    What Information is collected
    <br/>
   </div>
   <div id="i8elmqm">
    We collect anonymous traffic information from you. These include computer identification, IP address, browser etc. These are standard usage logs captured by the web server. The personal identification information that we store is as provided by you during your registration. You can change this information if required from the “My Account” section of the website. This personal information includes name, address, mobile and other information collected during the registration process.
    <br/>
   </div>
   <div className="mt-4" id="ivsq4vc">
    Terms of Use
    <br/>
   </div>
   <div id="it3u9vk">
    Sonakshicreation.com reserves the right, in its sole discretion, to suspend or cancel the service at any time if a computer virus, bug, or other technical problem corrupts the security, or proper administration of the service. Sonakshicreation.com disclaims all warranties or conditions, whether expressed or implied, (including without limitation implied, warranties or conditions of information and context). We consider ourselves and intend to be subject to the jurisdiction only of the local courts. Sonakshicreation.com reserves the right to refuse service to anyone at any time. Sonakshicreation.com shall not be responsible for any damage caused by the use of its website.
    <br/>
    <br/>
    We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the pre-set limit mutually agreed by us with our acquiring bank from time to time
    <br/>
   </div>
  </div>
 </section>


    </>
  );
};
termsAndConditionsPagePage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default termsAndConditionsPagePage;
