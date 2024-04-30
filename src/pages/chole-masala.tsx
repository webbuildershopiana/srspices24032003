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
    <body id="ihfvzob">
 <div className="container" id="i4nd15n">
  <div className="container mt-4">
   <div id="i2kawri">
    Chole Masala
   </div>
   <div className="row row-cols-1 row-cols-md-2">
    <div className="col">
     <img alt="Image" className="img-fluid" id="ic2puzn" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
    </div>
    <div className="col">
     <div id="izv8mon">
      Ingredients
     </div>
     <p className="mt-4" id="i0dr7rq">
      For pressure cooking white chickpeas
     </p>
     <p id="ibtt8qo">
      <ul className="ul1" id="icq4hqi">
       <li className="li1" id="i8jcxrl">
        1 cup dried white chickpeas (garbanzo beans, kabuli chana or safed chole) - 200 grams
       </li>
       <li className="li1" id="ikko8ra">
        3 cups water - for soaking chickpeas
       </li>
       <li className="li1" id="iagpuhh">
        2.5 to 3 cups water - for pressure cooking the chickpeas
       </li>
       <li className="li1" id="ipr5in7">
        2 to 3 dried amla or Indian gooseberry or 1 black tea bag, optional
       </li>
       <li className="li2" id="ihxzm14">
        ½ teaspoon salt or add as required
       </li>
      </ul>
     </p>
    </div>
   </div>
  </div>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1">
   <div className="col mt-4 pb-5">
    <p className="mt-4" id="is48qmq">
     Ingredients for gravy
     <br/>
    </p>
    <p id="imz7c2o">
     <ul className="ul1" id="i2z6hkm">
      <li className="li1" id="io4ygci">
       <span className="s1" id="iepftec">
        ⅓
       </span>
       cup finely chopped onions or 1 medium-sized
      </li>
      <li className="li1" id="iyojq92">
       ½ cup finely chopped tomatoes or 1 medium-sized
      </li>
      <li className="li1" id="iv44ccg">
       ½ teaspoon
       <a href="https://www.vegrecipesofindia.com/ginger-garlic-paste-recipe/">
       </a>
       or Ginger Garlic Paste 2 to 3 small garlic cloves + ½ inch ginger, crushed to a paste in a mortar-pestle
      </li>
      <li className="li1" id="i02ae17">
       ¼ teaspoon turmeric powder (ground turmeric)
      </li>
      <li className="li1" id="ij651hw">
       ½ teaspoon red chili powder or cayenne pepper
      </li>
      <li className="li1" id="iack4cl">
       ¼ teaspoon Garam Masala
       <a href="https://www.vegrecipesofindia.com/garam-masala-recipe-garam-masala-powder/">
       </a>
       - optional
      </li>
      <li className="li1" id="irod043">
       ¾ to 1 teaspoon amchur powder (dry mango powder), optional and only to be added when you do not have dry pomegranate seeds
      </li>
      <li className="li1" id="iqfaw09">
       2 to 3 green chilies - slit
      </li>
      <li className="li1" id="ic4qr91">
       1 to 1.25 cups water or the stock in which the chickpeas were cooked
      </li>
      <li className="li1" id="i73ykpg">
       1.5 to 2 tablespoons oil
      </li>
      <li className="li2" id="ilqerai">
       salt as required
      </li>
     </ul>
    </p>
    <p className="mt-4" id="i1vrx2g">
     Spices for chana masala powder
     <br/>
    </p>
    <p id="i78setl">
     <ul className="ul1" id="ippde6w">
      <li className="li1" id="i5dn0qu">
       2 black cardamoms
      </li>
      <li className="li1" id="iqmpfea">
       1 inch cinnamon
      </li>
      <li className="li1" id="iqypz7l">
       3 to 4 black peppercorns
      </li>
      <li className="li1" id="ix8p742">
       2 cloves
      </li>
      <li className="li1" id="i556h9p">
       1 tej patta (Indian bay leaf) - medium sized
      </li>
      <li className="li1" id="ihe2vij">
       ¼ teaspoon carom seeds (ajwain)
      </li>
      <li className="li1" id="i6ms0ly">
       1 teaspoon cumin seeds
      </li>
      <li className="li1" id="ifmuos8">
       1 teaspoon coriander seeds
      </li>
      <li className="li1" id="igz3rlh">
       1 teaspoon fennel seeds
      </li>
      <li className="li1" id="i6pfvlx">
       ½ teaspoon dry pomegranate seeds
      </li>
      <li className="li2" id="ik0my65">
       1 to 2 kashmiri dry red chilies
      </li>
     </ul>
    </p>
    <p className="mt-4" id="i310pbr">
     For garnishing
     <br/>
    </p>
    <p id="ib86b5u">
     <ul className="ul1" id="i86n22q">
      <li className="li1" id="iag1xpm">
       2 to 3 tablespoons chopped coriander leaves (cilantro)
      </li>
      <li className="li1" id="if19duv">
       ½ to 1 inch ginger - julienne
      </li>
      <li className="li1" id="iold021">
       1 medium onion sliced or chopped
      </li>
      <li className="li1" id="iiu7skp">
       1 medium tomato sliced or chopped
      </li>
      <li className="li2" id="ivc389x">
       1 lemon or lime, sliced or quartered
      </li>
     </ul>
    </p>
    <div id="idr6ph9">
     Instructions
     <br/>
    </div>
    <p className="mt-4" id="iqs83nf">
     Soaking and cooking white chickpeas
     <br/>
    </p>
    <p id="it41gb3">
     <ol className="ol1" id="igado0b">
      <li className="li1" id="ifo22g1">
       Rinse the chickpeas a couple of times in fresh water. Then soak them in water overnight or for 8 to 9 hours. Add enough amount of water as the chickpeas increase in size after soaking it. Later drain the water and again rinse the soaked chickpeas with fresh water.
      </li>
      <li className="li1" id="i5q5vld">
       To give a dark color to the chickpeas, traditionally dried amla (Indian gooseberries) are added. These also give a faint sourness to the stock. If you do not have dried amla, then add 1 black tea bag.
      </li>
      <li className="li1" id="imiauqv">
       In a 3-litre stovetop pressure cooker add the chickpeas along with the 3 to 4 dried amla pieces or 1 black tea bag. Taj tea bags work very well. Then add water.
      </li>
      <li className="li2" id="iipjz1v">
       Season with salt and pressure cook the chickpeas for 12 to 15 whistles on medium heat. The chickpeas should be cooked well and softened. The chickpeas should be soft when you mash it with a spoon or eat it. The chickpeas should not give you a bite when you eat it.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="i4y1dqt">
     Dry roasting spices
     <br/>
    </p>
    <p id="i674uq8">
     <ol className="ol1" id="iw5khax">
      <li className="li1" id="idphrbd">
       In a pan, take all the whole spices for the "chole masala powder" mentioned above and on a low heat begin to roast them.
      </li>
      <li className="li1" id="ibxqstc">
       Stir often and roast the spices till they get extra browned. Don't burn them. You have to go beyond a point roasting them even after they become fragrant and they get more browned than what is the norm usually.
      </li>
      <li className="li1" id="i96dwyk">
       Let these roasted spices cool and then grind or powder them finely in a coffee grinder or in a dry grinder.
      </li>
      <li className="li2" id="ink5n3q">
       By now the chana will be cooked. You will see a darker brown shade in the safed (white chana). Remove the amla pieces which would have softened by now or the tea bag from the stock.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="i6x2nqj">
     Making chana masala
     <br/>
    </p>
    <p id="ixgawun">
     <ol className="ol1" id="ilsxkqj">
      <li className="li1" id="io1nqil">
       Heat oil in a pan or kadai. Add ginger-garlic paste and saute for few seconds or till their raw aroma goes away.
      </li>
      <li className="li1" id="iyl451x">
       Then add chopped onions and saute stirring often till the onions turn translucent or light brown.
      </li>
      <li className="li1" id="ia7u7al">
       Add tomatoes and saute stirring often till they soften and the oil starts to leave the sides of the onion and tomato mixture.
      </li>
      <li className="li1" id="ip7x7gt">
       Lower the heat and then add all of the powdered chole masala that we ground, together with the red chili powder, turmeric powder and garam masala powder (optional).
      </li>
      <li className="li1" id="iqplafu">
       Stir and mix the dry ground spices and then add slit green chilies
      </li>
      <li className="li1" id="isgqjeg">
       Add the cooked chickpeas. Mix well.
      </li>
      <li className="li1" id="iciqcg2">
       Add salt according to taste. Then add about 1 to 1.25 cups of the stock in which the chickpeas was cooked. You can also add water instead.
      </li>
      <li className="li2" id="i98oudf">
       Stir and cover the pan with a lid.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="i9scdj4">
     Cooking chole masala
     <br/>
    </p>
    <p id="i8pjjhd">
     <ol className="ol1" id="i8acxik">
      <li className="li1" id="iacy2tf">
       Simmer on a low to medium heat. You can also cook the chana masala without the lid.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="ibzsiek">
       The gravy will thicken and reduce. Mash a few chickpeas as this helps in thickening the gravy.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="ie40o85">
       Simmer till you get the consistency you prefer. The consistency of this curry is not thin, but medium consistency or semi-dry. For thick or semi-dry consistency add less water.
      </li>
      <li className="li1" id="ix5ynqh">
       <b>
        If
       </b>
       <b>
        you have not added dry pomegranate seeds while roasting the spices, then you need to add amchur powder (dry mango powder) now.
       </b>
       Mix and stir well.
      </li>
      <li className="li1" id="inzqrtk">
       Serve the Punjabi chana masala with kulcha, bhatura, poori, roti, naan, bread with a side of sliced onions, tomatoes and lemon or lime wedges.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="iez6rhi">
       While serving garnish with coriander leaves and ginger julienne.
      </li>
      <li className="li2" id="i2h4v4h">
       This Chole Masala also tastes good with steamed rice or jeera rice or saffron rice.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <div id="iqjxknq">
     Notes
     <br/>
    </div>
    <p id="iarggyl">
     Recipe Notes
     <br/>
    </p>
    <p id="i0qyt9a">
     <ol className="ol1" id="iyxwmph">
      <li className="li1" id="iopjtdi">
       For dried chickpeas ensure that they are fresh and within their shelf period. Old or aged chickpeas will take a lot of time to cook and also don't taste good.
      </li>
      <li className="li1" id="i03vj5l">
       If you don't have dry mango powder (amchur) or dried pomegranate seeds then add lime or lemon juice towards the end once the dish is complete.
      </li>
      <li className="li1" id="ivvofrh">
       You can also use 3 cups of canned chickpeas and add them once the tomatoes and ground spices are sautéed well.
      </li>
      <li className="li1" id="i39eelu">
       You can skip making the chana masala powder from scratch and add 2 to 3 tablespoons of packaged chana masala powder instead.
       <span className="Apple-converted-space">
       </span>
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="ikyd2lc">
     Cooking Chickpeas In Pan or Pot:
     <br/>
    </p>
    <p id="i945ohk">
     <ol className="ol1" id="i3k39u2">
      <li className="li1" id="ibdsqqt">
       You have to take enough water in the pot while cooking the chickpeas. It takes a lot of time though. For 1.5 to 2 cups of soaked & drained chickpeas, you can take about 4 to 5 cups of water.
      </li>
      <li className="li1" id="idppkim">
       Adding a pinch of baking soda in the water along with salt, also helps in the cooking process and the chickpeas become really soft when cooked.
      </li>
      <li className="li1" id="iflhakm">
       You can add about 1 teaspoon of salt while cooking the chickpeas. A little less salt is also alright. I usually add less salt.
      </li>
      <li className="li2" id="i4mbb4g">
       Cover the pot and cook the chickpeas. If the water starts to become frothy, then remove the lid and cook chickpeas for some minutes. Remove the scum if there is any while cooking the chickpeas.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="iwqgof6">
     Nutrition
     <br/>
    </p>
    <p className="p1" id="ikes4ir">
     Calories:
     <span className="s1" id="icb0zwh">
      239
     </span>
     <span className="s2" id="il2jtgu">
      kcal
     </span>
     | Carbohydrates:
     <span className="s1" id="i1149mp">
      37
     </span>
     <span className="s2" id="i0pr80w">
      g
     </span>
     | Protein:
     <span className="s1" id="ig5nbs1">
      10
     </span>
     <span className="s2" id="i1g1r96">
      g
     </span>
     | Fat:
     <span className="s1" id="i0rjrxp">
      7
     </span>
     <span className="s2" id="i08mrpj">
      g
     </span>
     | Saturated Fat:
     <span className="s1" id="il53h0g">
      1
     </span>
     <span className="s2" id="i6emk39">
      g
     </span>
     | Sodium:
     <span className="s1" id="ix25wh4">
      786
     </span>
     <span className="s2" id="idz3v64">
      mg
     </span>
     | Potassium:
     <span className="s1" id="i1748mw">
      614
     </span>
     <span className="s2" id="iqwpyjo">
      mg
     </span>
     | Fiber:
     <span className="s1" id="irvilfh">
      11
     </span>
     <span className="s2" id="ibyphvl">
      g
     </span>
     | Sugar:
     <span className="s1" id="ih94sw3">
      9
     </span>
     <span className="s2" id="i07owwt">
      g
     </span>
     | Vitamin A:
     <span className="s1" id="iv85d8i">
      592
     </span>
     <span className="s2" id="iayuv19">
      IU
     </span>
     | Vitamin B1 (Thiamine):
     <span className="s1" id="i52l5iq">
      1
     </span>
     <span className="s2" id="i6yxfrk">
      mg
     </span>
     | Vitamin B2 (Riboflavin):
     <span className="s1" id="ihud7cg">
      1
     </span>
     <span className="s2" id="ijy29bb">
      mg
     </span>
     | Vitamin B3 (Niacin):
     <span className="s1" id="i3tlf13">
      1
     </span>
     <span className="s2" id="ivljql3">
      mg
     </span>
     | Vitamin B6:
     <span className="s1" id="itu5r96">
      1
     </span>
     <span className="s2" id="igfjfz3">
      mg
     </span>
     | Vitamin C:
     <span className="s1" id="in4h7tc">
      38
     </span>
     <span className="s2" id="ismiu0x">
      mg
     </span>
     | Vitamin E:
     <span className="s1" id="itn7h1s">
      2
     </span>
     <span className="s2" id="ip9cumx">
      mg
     </span>
     | Vitamin K:
     <span className="s1" id="i0iro86">
      11
     </span>
     <span className="s2" id="ixpk3cj">
      µg
     </span>
     | Calcium:
     <span className="s1" id="iixdcep">
      83
     </span>
     <span className="s2" id="iei85bz">
      mg
     </span>
     | Vitamin B9 (Folate):
     <span className="s1" id="i293i3x">
      243
     </span>
     <span className="s2" id="ihj0nun">
      µg
     </span>
     | Iron:
     <span className="s1" id="idf80pn">
      4
     </span>
     <span className="s2" id="i8zt9ri">
      mg
     </span>
     | Magnesium:
     <span className="s1" id="i13wmnv">
      68
     </span>
     <span className="s2" id="i2crgvq">
      mg
     </span>
     | Phosphorus:
     <span className="s1" id="it2ln3n">
      178
     </span>
     <span className="s2" id="ijqor4s">
      mg
     </span>
     | Zinc:
     <span className="s1" id="i1igt5c">
      2
     </span>
     <span className="s2" id="i5vrnyg">
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
