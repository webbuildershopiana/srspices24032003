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

const aboutUsPage = ({ 
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
    
 <div>
  Main page
 </div>
 <div id="iwc0vp">
  About Us Page
 </div>
 <section className="container-fluid px-4 py-2 border bg-white" id="ildw9e">
  <div className="row p-2 row-cols-1 row-cols-sm-2 py-5" id="ij296i">
   <div className="col d-flex justify-content-sm-center align-items-center">
    <h1 className="display-sm-3 display-4 w-75 fw-normal">
     Welcome to Our Site
    </h1>
   </div>
   <div className="col">
    <p className="mt-3 mb-4">
     Welcome visitors to your site with a short, engaging introduction. Double click to edit and add your own text.
    </p>
    <button className="btn btn-secondary text-white" id="ijyfpr" type="button">
     Read More
    </button>
   </div>
  </div>
 </section>
 <section className="bg-white" id="i3trdp">
  <div className="container py-5">
   <h1 className="text-center">
    View Gallery
   </h1>
   <p className="text-center px-lg-5 px-md-3 px-2 mb-4 mt-2">
    There may be no better way to communicate what we do than through images. As you browse our site, take a few moments to let your eyes linger here, and see if you can get a feel for our signature touch.
   </p>
   <div className="row">
    <div className="col-lg-4 col-md-6 col-12 py-3">
     <img alt="gallery-img" className="w-100 img-fluid" id="ixtxhz" src="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
    <div className="col-lg-4 col-md-6 col-12 py-3">
     <img alt="gallery-img" className="w-100 img-fluid" id="it66ri" src="https://images.pexels.com/photos/2721507/pexels-photo-2721507.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
    <div className="col-lg-4 col-md-6 col-12 py-3">
     <img alt="gallery-img" className="w-100 img-fluid" id="ilveil" src="https://images.pexels.com/photos/277054/pexels-photo-277054.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
    <div className="col-lg-4 col-md-6 col-12 py-3">
     <img alt="gallery-img" className="w-100 img-fluid" id="iqmi7i" src="https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
    <div className="col-lg-4 col-md-6 col-12 py-3">
     <img alt="gallery-img" className="w-100 img-fluid" id="izpaz9" src="https://images.pexels.com/photos/2123337/pexels-photo-2123337.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
    <div className="col-lg-4 col-md-6 col-12 py-3">
     <img alt="gallery-img" className="w-100 img-fluid" id="i7lsmz" src="https://images.pexels.com/photos/808506/pexels-photo-808506.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
   </div>
  </div>
 </section>


    </>
  );
};
aboutUsPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default aboutUsPage;
