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

const shahiPaneerPage = ({ 
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
    <body id="iumg1qi">
 <div className="container" id="i48jwkt">
  <div className="container mt-4" id="idcjo16">
   <div id="ibg1mzt">
    Shahi Paneer
   </div>
   <div className="row row-cols-1 row-cols-md-2">
    <div className="col" id="ikqnsd7">
     <img alt="Image" className="img-fluid" id="iima82h" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
    </div>
    <div className="col" id="iutz8b9">
     <div id="iyw946i">
      Ingredients
     </div>
     <p className="mt-4" id="i6qwlqg">
      For onion tomato puree
     </p>
     <p id="ivn0z5s">
      <ul className="ul1" id="iwkukqh">
       <li className="li1" id="i2n7rsh">
        1 tbsp butter
       </li>
       <li className="li1" id="i2uoy1b">
        2 pods cardamom
       </li>
       <li className="li1" id="ia8hmzz">
        1-inch cinnamon
       </li>
       <li className="li1" id="id3lo0i">
        1 pod black cardamom
       </li>
       <li className="li1" id="i7jmt62">
        3 cloves
       </li>
       <li className="li1" id="ivv4b09">
        1 onion sliced
       </li>
       <li className="li1" id="ijb76jd">
        3 clove garlic
       </li>
       <li className="li1" id="ikygoxx">
        1 inch ginger chopped
       </li>
       <li className="li1" id="iu8objj">
        2 tomato chopped
       </li>
       <li className="li1" id="ikez003">
        1 cup water
       </li>
       <li className="li2" id="i3mza7b">
        1 tsp salt
       </li>
      </ul>
     </p>
    </div>
   </div>
  </div>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1" id="i8mp1fk">
   <div className="col mt-4 pb-5" id="ifb8rcb">
    <p className="mt-4" id="i31t61h">
     For curry
     <br/>
    </p>
    <p id="igywhlb">
     <ul className="ul1" id="ibhnudd">
      <li className="li1" id="il555xn">
       1 tbsp butter
      </li>
      <li className="li1" id="ir5ehp8">
       ½ tsp shahi jeera
      </li>
      <li className="li1" id="i4s3vwi">
       1 bay leaf
      </li>
      <li className="li1" id="iwkmfl8">
       ¼ tsp turmeric
      </li>
      <li className="li1" id="io8bcbg">
       1 tsp Kashmiri red chilli powder
      </li>
      <li className="li1" id="isp240g">
       ¼ cup cream/malai
      </li>
      <li className="li1" id="i6i5x78">
       15 cubes paneer/cottage cheese
       <a href="https://hebbarskitchen.com/make-paneer-home-prepare-paneer-milk/">
       </a>
      </li>
      <li className="li1" id="iqyd2tl">
       few threads saffron / kesar
      </li>
      <li className="li1" id="ir8tz2c">
       ½ tsp kasuri methi crushed
      </li>
      <li className="li1" id="i336erh">
       ¼ tsp garam masala
       <br/>
      </li>
     </ul>
    </p>
    <div id="igr05zp">
     Instructions
     <br/>
    </div>
    <p id="ic5luiq">
     <ol className="ol1" id="i4q2l1c">
      <li className="li1" id="ih2xl1e">
       firstly, in a kadai heat 1 tbsp butter and saute 2 pods cardamom, 1 inch cinnamon,1 pod black cardamom and 3 cloves.
      </li>
      <li className="li1" id="imj6jqg">
       now add 1 onion, 3 clove garlic and 1 inch ginger.
      </li>
      <li className="li1" id="i2iysnj">
       saute slightly until onion softens.
      </li>
      <li className="li1" id="iju0dur">
       Furthermore, add 2 tomatoes and saute slightly.
      </li>
      <li className="li1" id="iaitvey">
       also, add 1 cup water and 1 tsp salt. mix well.
      </li>
      <li className="li1" id="i3y8lod">
       cover and boil for 20 minutes or until it softens completely.
      </li>
      <li className="li1" id="i1s9so7">
       cool completely and transfer to a blender. blend to smooth paste without adding any water.
      </li>
      <li className="li1" id="ijcb4wg">
       sieve the puree making sure the puree is smooth and silky. keep aside.
      </li>
      <li className="li1" id="ih38lq5">
       in a large kadai heat 1 tbsp butter and saute ½ tsp shahi jeera and 1 bay leaf.
      </li>
      <li className="li1" id="i5ccrip">
       keeping flame on low add ¼ tsp turmeric and 1 tsp chilli powder.
      </li>
      <li className="li1" id="i25py9s">
       saute slightly until the spices turn aromatic.
      </li>
      <li className="li1" id="ihxb23s">
       add in the prepared tomato-onion puree and mix well.
      </li>
      <li className="li1" id="ig7xjrk">
       Furthermore, add ¼ cup cream and mix until everything is well combined.
      </li>
      <li className="li1" id="iw6b1nx">
       add in 15 cubes of paneer, and a few threads of saffron and mix well.
      </li>
      <li className="li1" id="iuvh0u6">
       cover and simmer for 5 minutes or until flavours are absorbed well.
      </li>
      <li className="li1" id="ip6xzq2">
       now add ½ tsp kasuri methi and ¼ tsp garam masala. mix well.
      </li>
      <li className="li1" id="i38h5ex">
       finally, enjoy shahi paneer with roti or garlic naan.
      </li>
     </ol>
    </p>
   </div>
  </div>
 </div>
</body>

    </>
  );
};
shahiPaneerPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default shahiPaneerPage;
