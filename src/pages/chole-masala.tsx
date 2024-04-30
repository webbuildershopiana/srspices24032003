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

const choleMasalaPage = ({ 
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
    <body id="iq3mz3">
 <div className="container" id="ibyd6b">
  <div className="container mt-4" id="io2b2t">
   <div id="it1lbf">
    Chole Masala
   </div>
   <div className="row row-cols-1 row-cols-md-2" id="ih6yap">
    <div className="col" id="ionhfo">
     <img alt="Image" className="img-fluid" id="i9jjra" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
    </div>
    <div className="col" id="iixf7c">
     <div id="i257wzx">
      Ingredients
     </div>
     <p className="mt-4" id="i79o72">
      For pressure cooking white chickpeas
     </p>
     <p id="iua4ow">
      <ul className="ul1" id="itk2mqq">
       <li className="li1" id="i8d83gm">
        1 cup dried white chickpeas (garbanzo beans, kabuli chana or safed chole) - 200 grams
       </li>
       <li className="li1" id="it4apn7">
        3 cups water - for soaking chickpeas
       </li>
       <li className="li1" id="iz0qy4d">
        2.5 to 3 cups water - for pressure cooking the chickpeas
       </li>
       <li className="li1" id="idylasi">
        2 to 3 dried amla or Indian gooseberry or 1 black tea bag, optional
       </li>
       <li className="li2" id="ih3hllk">
        ½ teaspoon salt or add as required
       </li>
      </ul>
     </p>
    </div>
   </div>
  </div>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1" id="i0j4tn">
   <div className="col mt-4 pb-5" id="ibota8">
    <p className="mt-4" id="iurhfz">
     Ingredients for gravy
     <br/>
    </p>
    <p id="imfh7d">
     <ul className="ul1" id="i0x9v9r">
      <li className="li1" id="ifgshzm">
       <span className="s1" id="i07wc61">
        ⅓
       </span>
       cup finely chopped onions or 1 medium-sized
      </li>
      <li className="li1" id="icn0ura">
       ½ cup finely chopped tomatoes or 1 medium-sized
      </li>
      <li className="li1" id="iwzm2z1">
       ½ teaspoon
       <a href="https://www.vegrecipesofindia.com/ginger-garlic-paste-recipe/">
       </a>
       or Ginger Garlic Paste 2 to 3 small garlic cloves + ½ inch ginger, crushed to a paste in a mortar-pestle
      </li>
      <li className="li1" id="irbqpmm">
       ¼ teaspoon turmeric powder (ground turmeric)
      </li>
      <li className="li1" id="ikrm3zu">
       ½ teaspoon red chili powder or cayenne pepper
      </li>
      <li className="li1" id="i2wat5i">
       ¼ teaspoon Garam Masala
       <a href="https://www.vegrecipesofindia.com/garam-masala-recipe-garam-masala-powder/">
       </a>
       - optional
      </li>
      <li className="li1" id="ikt5z8n">
       ¾ to 1 teaspoon amchur powder (dry mango powder), optional and only to be added when you do not have dry pomegranate seeds
      </li>
      <li className="li1" id="ivr2964">
       2 to 3 green chilies - slit
      </li>
      <li className="li1" id="in0dgpg">
       1 to 1.25 cups water or the stock in which the chickpeas were cooked
      </li>
      <li className="li1" id="ir3j3qp">
       1.5 to 2 tablespoons oil
      </li>
      <li className="li2" id="ih0l2zd">
       salt as required
      </li>
     </ul>
    </p>
    <p className="mt-4" id="i18iaos">
     Spices for chana masala powder
     <br/>
    </p>
    <p id="ivqea39">
     <ul className="ul1" id="iab06ug">
      <li className="li1" id="izujuin">
       2 black cardamoms
      </li>
      <li className="li1" id="ifympc8">
       1 inch cinnamon
      </li>
      <li className="li1" id="itye22d">
       3 to 4 black peppercorns
      </li>
      <li className="li1" id="ilns12p">
       2 cloves
      </li>
      <li className="li1" id="iihkbw8">
       1 tej patta (Indian bay leaf) - medium sized
      </li>
      <li className="li1" id="ijps3iz">
       ¼ teaspoon carom seeds (ajwain)
      </li>
      <li className="li1" id="ihqg01n">
       1 teaspoon cumin seeds
      </li>
      <li className="li1" id="i8nnq0n">
       1 teaspoon coriander seeds
      </li>
      <li className="li1" id="imy05lx">
       1 teaspoon fennel seeds
      </li>
      <li className="li1" id="itpyp4n">
       ½ teaspoon dry pomegranate seeds
      </li>
      <li className="li2" id="izlgnel">
       1 to 2 kashmiri dry red chilies
      </li>
     </ul>
    </p>
    <p className="mt-4" id="itru7s4">
     For garnishing
     <br/>
    </p>
    <p id="iv1ub4c">
     <ul className="ul1" id="ihyhgs4">
      <li className="li1" id="idvvdds">
       2 to 3 tablespoons chopped coriander leaves (cilantro)
      </li>
      <li className="li1" id="iqmy6ek">
       ½ to 1 inch ginger - julienne
      </li>
      <li className="li1" id="iu2ud3m">
       1 medium onion sliced or chopped
      </li>
      <li className="li1" id="i5eaufr">
       1 medium tomato sliced or chopped
      </li>
      <li className="li2" id="i2du3ed">
       1 lemon or lime, sliced or quartered
      </li>
     </ul>
    </p>
    <div id="ii6c8l">
     Instructions
     <br/>
    </div>
    <p className="mt-4" id="itt6nq">
     Soaking and cooking white chickpeas
     <br/>
    </p>
    <p id="ihp77f">
     <ol className="ol1" id="iqt1wri">
      <li className="li1" id="iji9njh">
       Rinse the chickpeas a couple of times in fresh water. Then soak them in water overnight or for 8 to 9 hours. Add enough amount of water as the chickpeas increase in size after soaking it. Later drain the water and again rinse the soaked chickpeas with fresh water.
      </li>
      <li className="li1" id="ihwc7iv">
       To give a dark color to the chickpeas, traditionally dried amla (Indian gooseberries) are added. These also give a faint sourness to the stock. If you do not have dried amla, then add 1 black tea bag.
      </li>
      <li className="li1" id="ijiwa6y">
       In a 3-litre stovetop pressure cooker add the chickpeas along with the 3 to 4 dried amla pieces or 1 black tea bag. Taj tea bags work very well. Then add water.
      </li>
      <li className="li2" id="ivsla2r">
       Season with salt and pressure cook the chickpeas for 12 to 15 whistles on medium heat. The chickpeas should be cooked well and softened. The chickpeas should be soft when you mash it with a spoon or eat it. The chickpeas should not give you a bite when you eat it.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="iqrz4p"/>
    <p id="irnnem">
     Dry roasting spices
     <br/>
    </p>
    <p id="iohern">
     <ol className="ol1" id="iba7dk3">
      <li className="li1" id="irh2f42">
       In a pan, take all the whole spices for the "chole masala powder" mentioned above and on a low heat begin to roast them.
      </li>
      <li className="li1" id="ii6os4e">
       Stir often and roast the spices till they get extra browned. Don't burn them. You have to go beyond a point roasting them even after they become fragrant and they get more browned than what is the norm usually.
      </li>
      <li className="li1" id="ib1p01w">
       Let these roasted spices cool and then grind or powder them finely in a coffee grinder or in a dry grinder.
      </li>
      <li className="li2" id="ih399o5">
       By now the chana will be cooked. You will see a darker brown shade in the safed (white chana). Remove the amla pieces which would have softened by now or the tea bag from the stock.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="it76rj"/>
    <p id="ik0xyn">
     Making chana masala
     <br/>
    </p>
    <p id="ia9qbc">
     <ol className="ol1" id="iexpf1o">
      <li className="li1" id="iiqb6n7">
       Heat oil in a pan or kadai. Add ginger-garlic paste and saute for few seconds or till their raw aroma goes away.
      </li>
      <li className="li1" id="iyaurrz">
       Then add chopped onions and saute stirring often till the onions turn translucent or light brown.
      </li>
      <li className="li1" id="ito0ozl">
       Add tomatoes and saute stirring often till they soften and the oil starts to leave the sides of the onion and tomato mixture.
      </li>
      <li className="li1" id="ics6085">
       Lower the heat and then add all of the powdered chole masala that we ground, together with the red chili powder, turmeric powder and garam masala powder (optional).
      </li>
      <li className="li1" id="ixxv60l">
       Stir and mix the dry ground spices and then add slit green chilies
      </li>
      <li className="li1" id="iz9a122">
       Add the cooked chickpeas. Mix well.
      </li>
      <li className="li1" id="irf0105">
       Add salt according to taste. Then add about 1 to 1.25 cups of the stock in which the chickpeas was cooked. You can also add water instead.
      </li>
      <li className="li2" id="i9xc9r6">
       Stir and cover the pan with a lid.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="ifqlqe"/>
    <p id="i5frh8">
     Cooking chole masala
     <br/>
    </p>
    <p id="i50w3v">
     <ol className="ol1" id="igwwi3z">
      <li className="li1" id="i13ch5d">
       Simmer on a low to medium heat. You can also cook the chana masala without the lid.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="ir3jdrr">
       The gravy will thicken and reduce. Mash a few chickpeas as this helps in thickening the gravy.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="icuasr8">
       Simmer till you get the consistency you prefer. The consistency of this curry is not thin, but medium consistency or semi-dry. For thick or semi-dry consistency add less water.
      </li>
      <li className="li1" id="iev2dng">
       <b>
        If
       </b>
       <b>
        you have not added dry pomegranate seeds while roasting the spices, then you need to add amchur powder (dry mango powder) now.
       </b>
       Mix and stir well.
      </li>
      <li className="li1" id="iqozr9h">
       Serve the Punjabi chana masala with kulcha, bhatura, poori, roti, naan, bread with a side of sliced onions, tomatoes and lemon or lime wedges.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="ixz26v5">
       While serving garnish with coriander leaves and ginger julienne.
      </li>
      <li className="li2" id="ibgk8nt">
       This Chole Masala also tastes good with steamed rice or jeera rice or saffron rice.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="i3lt5r"/>
    <div id="iojaxvi">
     Notes
     <br/>
    </div>
    <p id="i4y83l">
     Recipe Notes
     <br/>
    </p>
    <p id="iv0m6a">
     <ol className="ol1" id="icwxd65">
      <li className="li1" id="iwq8uv7">
       For dried chickpeas ensure that they are fresh and within their shelf period. Old or aged chickpeas will take a lot of time to cook and also don't taste good.
      </li>
      <li className="li1" id="ien70es">
       If you don't have dry mango powder (amchur) or dried pomegranate seeds then add lime or lemon juice towards the end once the dish is complete.
      </li>
      <li className="li1" id="i0bqvgt">
       You can also use 3 cups of canned chickpeas and add them once the tomatoes and ground spices are sautéed well.
      </li>
      <li className="li1" id="iexzo78">
       You can skip making the chana masala powder from scratch and add 2 to 3 tablespoons of packaged chana masala powder instead.
       <span className="Apple-converted-space">
       </span>
      </li>
     </ol>
    </p>
    <hr className="my-4" id="i0aq8z"/>
    <p id="i6upgf">
     Cooking Chickpeas In Pan or Pot:
     <br/>
    </p>
    <p id="ilzc12">
     <ol className="ol1" id="ifzph7g">
      <li className="li1" id="igj6y5g">
       You have to take enough water in the pot while cooking the chickpeas. It takes a lot of time though. For 1.5 to 2 cups of soaked & drained chickpeas, you can take about 4 to 5 cups of water.
      </li>
      <li className="li1" id="ix5kd39">
       Adding a pinch of baking soda in the water along with salt, also helps in the cooking process and the chickpeas become really soft when cooked.
      </li>
      <li className="li1" id="ie8uxuu">
       You can add about 1 teaspoon of salt while cooking the chickpeas. A little less salt is also alright. I usually add less salt.
      </li>
      <li className="li2" id="ibg8z2b">
       Cover the pot and cook the chickpeas. If the water starts to become frothy, then remove the lid and cook chickpeas for some minutes. Remove the scum if there is any while cooking the chickpeas.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="if7u2sh"/>
    <p id="ibzcy8m">
     Nutrition
     <br/>
    </p>
    <p className="p1" id="i21kdrr">
     Calories:
     <span className="s1" id="iggu5qm">
      239
     </span>
     <span className="s2" id="igrx60k">
      kcal
     </span>
     | Carbohydrates:
     <span className="s1" id="ivw6ho6">
      37
     </span>
     <span className="s2" id="i5rlcyh">
      g
     </span>
     | Protein:
     <span className="s1" id="iri13we">
      10
     </span>
     <span className="s2" id="igdyyo6">
      g
     </span>
     | Fat:
     <span className="s1" id="imwe256">
      7
     </span>
     <span className="s2" id="ia10evh">
      g
     </span>
     | Saturated Fat:
     <span className="s1" id="i7npkvh">
      1
     </span>
     <span className="s2" id="ijq1axk">
      g
     </span>
     | Sodium:
     <span className="s1" id="iicl2tq">
      786
     </span>
     <span className="s2" id="iru5c0k">
      mg
     </span>
     | Potassium:
     <span className="s1" id="in2eouh">
      614
     </span>
     <span className="s2" id="id5qa7x">
      mg
     </span>
     | Fiber:
     <span className="s1" id="igocmqy">
      11
     </span>
     <span className="s2" id="i44vm59">
      g
     </span>
     | Sugar:
     <span className="s1" id="iaaadii">
      9
     </span>
     <span className="s2" id="in497nz">
      g
     </span>
     | Vitamin A:
     <span className="s1" id="izvzba4">
      592
     </span>
     <span className="s2" id="i8aysmq">
      IU
     </span>
     | Vitamin B1 (Thiamine):
     <span className="s1" id="i2k93vl">
      1
     </span>
     <span className="s2" id="is3esrb">
      mg
     </span>
     | Vitamin B2 (Riboflavin):
     <span className="s1" id="i02ojfi">
      1
     </span>
     <span className="s2" id="igzkpkg">
      mg
     </span>
     | Vitamin B3 (Niacin):
     <span className="s1" id="i4zy62y">
      1
     </span>
     <span className="s2" id="ilrx0bl">
      mg
     </span>
     | Vitamin B6:
     <span className="s1" id="inrni23">
      1
     </span>
     <span className="s2" id="iq0ckoz">
      mg
     </span>
     | Vitamin C:
     <span className="s1" id="ilpttah">
      38
     </span>
     <span className="s2" id="ijw7meh">
      mg
     </span>
     | Vitamin E:
     <span className="s1" id="ibgoaal">
      2
     </span>
     <span className="s2" id="iceppkv">
      mg
     </span>
     | Vitamin K:
     <span className="s1" id="i3snwjg">
      11
     </span>
     <span className="s2" id="iari5g5">
      µg
     </span>
     | Calcium:
     <span className="s1" id="i8koh3r">
      83
     </span>
     <span className="s2" id="itd853v">
      mg
     </span>
     | Vitamin B9 (Folate):
     <span className="s1" id="i52jvpm">
      243
     </span>
     <span className="s2" id="iityy69">
      µg
     </span>
     | Iron:
     <span className="s1" id="ikacyde">
      4
     </span>
     <span className="s2" id="icrbkvb">
      mg
     </span>
     | Magnesium:
     <span className="s1" id="igr47y9">
      68
     </span>
     <span className="s2" id="ikksw2t">
      mg
     </span>
     | Phosphorus:
     <span className="s1" id="itqojhf">
      178
     </span>
     <span className="s2" id="ikcgonr">
      mg
     </span>
     | Zinc:
     <span className="s1" id="iw2tjgh">
      2
     </span>
     <span className="s2" id="izz5i0j">
      mg
     </span>
    </p>
   </div>
  </div>
 </div>
</body>

    </>
  );
};
choleMasalaPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default choleMasalaPage;
