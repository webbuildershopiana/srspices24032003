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
  <div className="container" id="i2eae1">
   <div className="row row-cols-1 row-cols-sm-2 mt-4 row-cols-md-4" id="i942y3">
    <div className="col" id="ir5a8c">
     <Link className="text-decoration-none" href="/paav-bhaji-" id="ihgp02" link-type="page" name="Paav Bhaji " page="page://U3Tm3L0K9TtNh4zqwgzxDX" slug="paav-bhaji-">
      <div className="col link" id="ioca3f">
       <Link className="text-decoration-none" href="/paavbhaji" id="ift0is" link-type="page" name="PaavBhaji" page="page://U3Tm3L0K9TtNh4zqwgzxDX" slug="paavbhaji">
        Chole Masala
       </Link>
      </div>
     </Link>
    </div>
    <div className="col" id="iem9xg">
     <a className="text-decoration-none" id="i3qpik">
      <div className="col" id="id2squ">
       <div id="igxyuk">
        Shahi Paneer
       </div>
      </div>
     </a>
    </div>
    <div className="col" id="iusrnm">
     <a className="text-decoration-none" id="i642uj">
      <div className="col" id="illu75">
       <div id="i0wl3u">
        Sambhar
       </div>
      </div>
     </a>
    </div>
    <div className="col" id="izn1rf">
     <a className="text-decoration-none" id="i7184x">
      <div className="col" id="itowoy">
       <div id="icpf9w">
        Shahi Biryani
       </div>
      </div>
     </a>
    </div>
   </div>
  </div>
  <div className="container px-4 py-2" id="ixurz6">
   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4" id="in3lg7">
    <div className="col" id="i0alzk">
     <Link className="text-decoration-none" href="/chole-masala-" id="ihbf3j" link-type="page" name="Chole-Masala " page="page://U3Tm3L0K9TtNh4zqwgzxDX" slug="chole-masala-">
      <div className="col" id="ixvghy">
       <div id="i8gkq7">
        Chole Masala
       </div>
      </div>
     </Link>
    </div>
    <div className="col" id="i4e5vp">
    </div>
    <div className="col">
    </div>
    <div className="col" id="ivm4zg">
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
