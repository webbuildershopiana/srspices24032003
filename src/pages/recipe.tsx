import { useTranslation } from 'next-i18next';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import client from '@/framework/client';

import Link from 'next/link';

import GeneralLayout from '@/components/layouts/_general';

import { useEffect } from 'react';




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

const recipePage = ({ 
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
 
//[[UI_HOOK]]
  return (
    <>
    <body id="ive6y1">
 <section id="irzkmm">
  <div className="container">
   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 mt-4" id="i9ego2">
    <div className="col" id="ipemqw">
     <div id="ian4qk">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </div>
     <a className="btn btn-secondary mt-2" href="#!" id="iq12qt" role="button">
      Read More
     </a>
    </div>
    <div className="col">
     <img alt="Image" className="img-fluid" id="izpdlo" src="https://www.hotelierindia.com/wp-content/uploads/cloud/2023/06/22/image-6.png"/>
    </div>
   </div>
  </div>
 </section>
 <section className="py-5" id="iwrh7i">
  <div className="container" id="i8v3pa">
   <div id="i2g6gb">
    Our Recipe
   </div>
   <div id="izcjx7">
    Pellentesque massa placerat duis ultricies lacus sit sed.
   </div>
  </div>
  <div className="container px-4 py-2" id="ii72jra">
   <div className="row p-2 row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col" id="i6pkiem">
     <div className="col mt-3 p-0" id="i4e5vp">
      <Link href="/chole-masala" id="im8y78l" link-type="page" name="Chole-Masala" page="page://w6E3sma3OlKW8IHlsJWfXQRLoAvc" slug="chole-masala">
       <img alt="Image" className="img-fluid" id="icu353j" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
      </Link>
      <div id="igxyuk">
       Chole Masala
      </div>
     </div>
    </div>
    <div className="col" id="ityaxst">
     <div className="col mt-3 p-0" id="ic6o5ij">
      <Link href="/shahi-paneer" id="ij0oshz" link-type="page" name="Shahi-Paneer" page="page://6aUsx5LQSvnZLuZ5VXLPxRz7y" slug="shahi-paneer">
       <img alt="Image" className="img-fluid" id="iqzfdwg" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
      </Link>
      <div id="irff5tc">
       Shahi Paneer
      </div>
     </div>
    </div>
    <div className="col" id="ipor1eh">
     <div className="col mt-3 p-0" id="i1q1y9j">
      <Link href="/sambhar" id="ixdmb3h" link-type="page" name="Sambhar" page="page://GlGukLtDmr1oldpDD3U5g39agY" slug="sambhar">
       <img alt="Image" className="img-fluid" id="i4joyip" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
      </Link>
      <div id="ibvcvox">
       Sambhar
      </div>
     </div>
    </div>
    <div className="col" id="iviluve">
     <div className="col mt-3 p-0" id="ifco7ru">
      <Link href="/shahi-biryani" id="ienc5vi" link-type="page" name="Shahi-Biryani" page="page://pHWA3SxjqCnN4LamFKXn1jS28rb" slug="shahi-biryani">
       <img alt="Image" className="img-fluid" id="i9psovq" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
      </Link>
      <div id="i4xfkgr">
       Shahi Biryani
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
</body>

    </>
  );
};
recipePage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default recipePage;
