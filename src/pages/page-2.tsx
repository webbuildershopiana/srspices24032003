import { useTranslation } from 'next-i18next';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import client from '@/framework/client';

import Link from 'next/link';

import GeneralLayout from '@/components/layouts/_general';

import { useEffect } from 'react';

import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';

import { authorizationAtom } from '@/store/authorization-atom';

import { useAtom } from 'jotai';



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

const page2Page = ({ 
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
    
 <div id="ia3rvi">
  Insert your text here
 </div>
 <div id="ivsahr">
  <div className="tab-container" role="tablist">
   <div aria-controls="i3w79s" className="tab" id="i2vp1f" role="tab">
    <span>
     Tab
    </span>
   </div>
   <div aria-controls="ik0hm5" className="tab" id="i1uxw4" role="tab">
    <span id="idinmd">
     Tab
    </span>
   </div>
   <div aria-controls="i5sqmz" className="tab" id="iywxd4" role="tab">
    <span id="i1hkao">
     Tab
    </span>
   </div>
  </div>
  <div className="tab-contents">
   <div aria-labelledby="i6hlmb" className="tab-content" hidden="" role="tabpanel">
    <div>
     Tab Content
    </div>
   </div>
   <div aria-labelledby="ig4q9q" className="tab-content" hidden="" role="tabpanel">
    <div>
     Tab Content
    </div>
   </div>
   <div aria-labelledby="iry9sz" className="tab-content" hidden="" role="tabpanel">
    <div>
     Tab Content
    </div>
   </div>
   <div aria-labelledby="i2vp1f" className="tab-content" hidden="" id="i3w79s" role="tabpanel">
    <div>
     Tab Content
    </div>
   </div>
   <div aria-labelledby="i1uxw4" className="tab-content" hidden="" id="ik0hm5" role="tabpanel">
    <div>
     Tab Content
    </div>
   </div>
   <div aria-labelledby="iywxd4" className="tab-content" hidden="" id="i5sqmz" role="tabpanel">
    <div>
     Tab Content
    </div>
   </div>
  </div>
 </div>


    </>
  );
};
page2Page.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default page2Page;
