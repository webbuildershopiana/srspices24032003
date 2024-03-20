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

const contactpagePage = ({ 
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
    
 <section className="text-black" id="iv6if1">
  <h1 className="py-4 text-center" id="ihnm7c">
   Contact Us
  </h1>
  <div className="container pb-4 pt-md-4" id="ik2m26">
   <div className="row">
    <div className="col-lg-4 col-md-6 col-12 px-5 py-3" id="ittunl">
     <h4 id="ipr1un">
      Address
     </h4>
     <p className="mt-4" id="ieji8g">
      Office Address 374, Street No.10, Tonk Phatak, Jaipur- 302015, Rajasthan, India
      <br/>
     </p>
     <p className="mt-4" id="iinhxw">
      <b>
       Registered Address
      </b>
      - 1216A Ghoshiyon Ka Rasta, Ramganj Bazar, Jaipur 302003, Rajasthan, India
      <br/>
     </p>
    </div>
    <div className="col-lg-4 col-md-6 col-12 px-5 py-3" id="icnh7p">
     <h4 id="ifpvji">
      Contact
     </h4>
     <span className="mt-4 d-block" id="ip9wnf">
      +91 8107246307
      <br/>
     </span>
     <span className="d-block mt-3" id="ikkrrf">
      care@sonakshicreation.com
     </span>
     <span className="d-block mt-3" id="idweaj">
      ashish@sonakshicreation.com
     </span>
     <span className="d-block mt-3" id="ikqz04">
      sonakshicreation20@gmail.com
      <br/>
     </span>
     
    </div>
    <div className="col-lg-4 col-md-6 col-12 px-5 py-3" id="iiu04e">
     <div className="mx-auto mb-4 p-0" id="i6ahk2">
      
      <h6 className="text-uppercase fw-bold mb-4" id="ipyamg">
       FOLLOW US
      </h6>
      <section className="p-0" id="ixxe53">
       <a className="text-decoration-none p-0" href="https://www.instagram.com/" id="i6o7jo" link-type="url" url="https://www.instagram.com/">
        <img alt="Image" className="img-fluid" id="iwb8zt" src="https://d1ne4tihfhyh93.cloudfront.net/files/sonakshi24022402/ASSET/instagram-icone.png"/>
        <p id="iz759j">
         <i className="fas fa-home me-3">
         </i>
         Instagram
        </p>
       </a>
       <a className="text-decoration-none p-0" href="https://www.instagram.com/" id="i2t7h9" link-type="url" url="https://www.instagram.com/">
        <img alt="Image" className="img-fluid" id="iknzsa" src="https://logohistory.net/wp-content/uploads/2023/02/Twitter-Log%D0%BE.svg"/>
        <p id="iwsq3g">
         <i className="fas fa-home me-3">
         </i>
         Twitter
        </p>
       </a>
       <a className="text-decoration-none p-0" href="https://www.instagram.com/" id="iw5dml" link-type="url" url="https://www.instagram.com/">
        <img alt="Image" className="img-fluid" id="iifl0z" src="https://static.vecteezy.com/system/resources/previews/023/741/095/original/youtube-logo-icon-social-media-icon-free-png.png"/>
        <p id="ih2q95">
         <i className="fas fa-home me-3">
         </i>
         Youtube
        </p>
       </a>
       <a className="text-decoration-none p-0" href="https://www.instagram.com/" id="i4axad" link-type="url" url="https://www.instagram.com/">
        <img alt="Image" className="img-fluid" id="iz254d" src="https://icon-library.com/images/linkedin-icon-png-black/linkedin-icon-png-black-17.jpg"/>
        <p id="ibccnz">
         <i className="fas fa-home me-3">
         </i>
         LinkdIn
        </p>
       </a>
       <a className="text-decoration-none p-0" href="https://www.instagram.com/" id="ifuqq1" link-type="url" url="https://www.instagram.com/">
        <img alt="Image" className="img-fluid" id="ivv1jb" src="https://friconix.com/png/fi-ctluxx-facebook-circle.png"/>
        <p id="if6tjl">
         <i className="fas fa-home me-3">
         </i>
         Facebook
        </p>
       </a>
       <a href="https://twitter.com/home" id="i0fmoq" link-type="url" url="https://twitter.com/home">
       </a>
      </section>
     </div>
    </div>
   </div>
  </div>
  <div className="container pb-5" id="inzb6t">
   <iframe className="gjs-no-pointer" frameborder="0" id="iid3bs" src="https://maps.google.com/maps?&q=Shopiana, office no.402, Alankar Plaza, Sector 2, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039&z=17&t=q&output=embed">
   </iframe>
  </div>
 </section>


    </>
  );
};
contactpagePage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default contactpagePage;
