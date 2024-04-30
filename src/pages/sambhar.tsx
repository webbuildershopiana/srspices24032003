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

const sambharPage = ({ 
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
    <body id="i5rbyyz">
 <div className="container" id="i88ph58">
  <div className="container mt-4" id="i49h7pa">
   <div id="iimou8u">
    Sambhar
   </div>
   <div className="row row-cols-1 row-cols-md-2">
    <div className="col" id="in2qbbk">
     <img alt="Image" className="img-fluid" id="imsemtu" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
    </div>
    <div className="col" id="if6s5fx">
     <div id="iki82ig">
      Ingredients
     </div>
     <p className="mt-4" id="izqhxmu">
      For tamarind pulp
      <br/>
     </p>
     <p id="ipu5rhb">
      <ul className="ul1" id="in8atmu">
       <li className="li1" id="i8hdmtt">
        1 tablespoon tamarind
       </li>
       <li className="li2" id="i585y12">
        <span className="s1" id="ihd54ce">
         ⅓
        </span>
        cup hot water
       </li>
      </ul>
     </p>
     <p className="mt-4" id="ipixyy7">
      For cooking dal
      <br/>
     </p>
     <p id="ilj3upb">
      <ul className="ul1" id="icqbw8u">
       <li className="li1" id="imzt12j">
        ½ cup tur dal or arhar dal (pigeon pea lentils) - 100 grams
       </li>
       <li className="li1" id="i5s377f">
        ¼ teaspoon turmeric powder (ground turmeric)
       </li>
       <li className="li2" id="iwsch9j">
        1.5 to 1.75 cups water or add as required
       </li>
      </ul>
     </p>
    </div>
   </div>
  </div>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1" id="idor16q">
   <div className="col mt-4 pb-5" id="i5wno3g">
    <p className="mt-4" id="i5lcbcg">
     For cooking vegetables
     <br/>
    </p>
    <p id="iwt8bn2">
     <ul className="ul1" id="igml0tf">
      <li className="li1" id="ia0ox26">
       1 to 1.5 cups chopped vegetables like okra, french beans, potatoes, small round brinjals, pumpkin
      </li>
      <li className="li1" id="ie8i32y">
       1 to 2 drumsticks - scraped and chopped in 3 to 4-inch sticks.
      </li>
      <li className="li1" id="idr6j35">
       6 to 7 pearl onions (sambar onions) or 1 small to medium onion, thickly sliced
      </li>
      <li className="li1" id="ic0rudf">
       1 tomato - small to medium, quartered or diced
      </li>
      <li className="li1" id="ikah9ok">
       ¼ teaspoon turmeric powder (ground turmeric)
      </li>
      <li className="li1" id="iaquyo9">
       ½ teaspoon kashmiri red chili powder - optional
      </li>
      <li className="li1" id="i3lgpa5">
       salt as required
      </li>
      <li className="li1" id="ir8se7p">
       1.5 to 2 cups water or add as required
      </li>
     </ul>
    </p>
    <p className="mt-4" id="io0lfvx">
     Important ingredient
     <br/>
    </p>
    <p id="i1arijo">
     <ul className="ul1" id="ixokkh5">
      <li className="li1" id="ifzk5ew">
       1 to 1.5 tablespoons Sambar Powder
       <a href="https://www.vegrecipesofindia.com/sambar-powder-recipe-homemade-sambar-powder/">
       </a>
      </li>
     </ul>
    </p>
    <p className="mt-4" id="it0a3ej">
     For tempering
     <br/>
    </p>
    <p id="ix9x4mn">
     <ul className="ul1" id="in8uxnh">
      <li className="li1" id="ifc4sdo">
       2 tablespoons sesame oil (gingelly oil), can also use coconut oil or sunflower oil or ghee
      </li>
      <li className="li1" id="i13j3mv">
       ½ teaspoon mustard seeds
      </li>
      <li className="li1" id="iskirug">
       1 to 2 dry red chillies - halved and seeds removed
      </li>
      <li className="li1" id="iu217u6">
       10 to 12 curry leaves
      </li>
      <li className="li1" id="i8fi7kh">
       2 pinch asafoetida (hing)
      </li>
      <li className="li2" id="ix9r0sg">
       5 to 6 fenugreek seeds (methi seeds) - optional
      </li>
     </ul>
    </p>
    <p className="mt-4" id="ie0drki">
     For garnish
     <br/>
    </p>
    <p id="iq10wze">
     <ul className="ul1" id="i31zlsj">
      <li className="li1" id="i5nqamz">
       1 tablespoon chopped coriander leaves (cilantro) - optional
      </li>
     </ul>
    </p>
    <div id="i127p11">
     Instructions
     <br/>
    </div>
    <p className="mt-4" id="iqgamf5">
     Making tamarind pulp
     <br/>
    </p>
    <p id="iwyh0af">
     <ol className="ol1" id="i3s1jdo">
      <li className="li1" id="i5mxm67">
       Soak the tamarind in hot water for 20 to 30 minutes.
      </li>
      <li className="li2" id="i82plng">
       Once the tamarind gets soft, then squeeze the tamarind in the water itself. Discard the strained tamarind and keep the tamarind pulp aside.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="i0hfptm">
     Cooking lentils
     <br/>
    </p>
    <p id="il1pxux">
     <ol className="ol1" id="imdip6o">
      <li className="li1" id="ip2mopw">
       Rinse tuvar dal a couple of times in water.
      </li>
      <li className="li1" id="ipkrqsk">
       Drain all the water and add the dal in a 2 liter pressure cooker. Also add ¼ teaspoon turmeric powder.
      </li>
      <li className="li1" id="ijdrs2l">
       Add 1.5 to 1.75 cups of water and mix. Cover and pressure cook dal for 7 to 8 whistles or 9 to 10 minutes on medium heat.
      </li>
      <li className="li1" id="igpcivj">
       When the pressure settles down on its own, open the lid and check the dal. The dal should be completely cooked and mushy.
      </li>
      <li className="li2" id="i89kzc1">
       Mash the deal with a spoon or wired whisk. Cover and keep aside. You can see the consistency of dal in the pic below.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="il2wq22">
     Cooking vegetables
     <br/>
    </p>
    <p id="ikm6zu6">
     <ol className="ol1" id="i0gd1iv">
      <li className="li1" id="ipesn0i">
       When the dal is pressure cooking – rinse, peel, and chop the vegetables.
      </li>
      <li className="li1" id="ii5i4pf">
       Take the chopped vegetables in a pan or pot. Also, add 6 to 7 pearl onions or 1 small to medium onion (thickly sliced) and 1 small to medium tomato (quartered).
      </li>
      <li className="li1" id="iotydri">
       Sprinkle turmeric powder, Kashmiri red chili powder, and salt as per taste. Adding Kashmiri red chili powder is optional and can be skipped.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="ixb9f4k">
       Add 1.5 to 2 cups of water and stir.
      </li>
      <li className="li1" id="i9ajwdq">
       Keep the pan on a stovetop and begin to cook vegetables on a medium-low to medium flame. In between do check when the vegetables are cooking.
      </li>
      <li className="li2" id="ie142i3">
       Cook till the vegetables are almost done. Ensure that you don’t overcook the vegetables.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="i4j08ix"/>
    <p id="i5nkxjl">
     Making sambar
     <br/>
    </p>
    <p id="i42y17h">
     <ol className="ol1" id="innr10z">
      <li className="li1" id="i3h43t5">
       Once the vegetables are almost cooked, then add the tamarind pulp and 1 to 1.5 tablespoons of sambar powder. Mix well.
      </li>
      <li className="li1" id="i22wxtk">
       Add the mashed dal. Mix again very well.
      </li>
      <li className="li1" id="iaybvqk">
       Simmer on a medium-low heat till the sambar comes to a boil.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li2" id="iy60z9d">
       You will see a frothy layer on top when the sambar begins boiling. At this step switch off the heat. Cover and set aside.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="i5h86wm"/>
    <p id="iq8l4ki">
     Tempering
     <br/>
    </p>
    <p id="iidckvo">
     <ol className="ol1" id="iphae7i">
      <li className="li1" id="ib1hws9">
       In a small pan or tadka pan, heat 2 tablespoons of gingelly oil. Add ½ tsp mustard seeds.
      </li>
      <li className="li1" id="ixqi3ef">
       Let the mustard seeds crackle.
      </li>
      <li className="li1" id="i7ccv1j">
       Then add 1 to 2 dry red chilies (halved and seeds removed).
      </li>
      <li className="li1" id="izgyvhx">
       Immediately add 10 to 12 curry leaves, 5 to 6 fenugreek seeds (methi seeds), and 2 pinches of asafoetida (hing). Be careful as the oil sputters while adding curry leaves.
      </li>
      <li className="li1" id="idnam6d">
       Fry them till the red chilies change color and the curry leaves become crisp.
      </li>
      <li className="li1" id="igymqxk">
       Immediately add this tempering mixture to the hot sambar.
      </li>
      <li className="li1" id="ifu4c9i">
       Cover the pan with its lid for 4 to 5 minutes, so that the aroma and flavors from the tempering mixture get infused with the sambar.
      </li>
      <li className="li2" id="ie3irmm">
       Serve sambar hot. You can garnish it with a few coriander leaves if you prefer. It can also be served with steamed rice, idli, dosa, medu vada, or uttapam.
       <span className="Apple-converted-space">
       </span>
      </li>
     </ol>
    </p>
    <hr className="my-4" id="ig34hfr"/>
    <p id="i7jmzrl">
     Serving Suggestions
     <br/>
    </p>
    <p id="i6q2ayb">
     <ol className="ol1" id="iapoul3">
      <li className="li1" id="ibp27ii">
       Serve sambar
       <b>
       </b>
       with steamed rice, idli, dosa or medu vada or uttapam.
      </li>
      <li className="li2" id="i0w4l1a">
       Vary the consistency of sambar keeping in mind the dish you want to serve it with. For example - a medium to slightly thin sambar is served with idli, dosa and medu vada. Sambar with a medium to thick consistency is served with steamed rice.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="iop5d5f"/>
    <p id="if808o8">
     Storage and Leftovers
     <br/>
    </p>
    <p id="i0or2t1">
     <ol className="ol1" id="i5pagx3">
      <li className="li1" id="iwsq03g">
       Store any leftovers in the refrigerator for a day only. Note that the consistency will thicken after refrigeration. Add some water and mix to get your desired consistency while reheating in a pan.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="ijvav0x"/>
    <div id="ikmund9">
     Notes
     <br/>
    </div>
    <p id="i4ooucl">
     <ol id="i3kjuo9">
      <li className="li1" id="ipztvou">
       <b>
        Sambar Powder:
       </b>
       The sambar powder can make or break your sambar. Use the best sambar powder. It can be homemade or from your favorite brand. Sambar powder is easily available online.
      </li>
      <li className="li1" id="iyl2c0g">
       <b>
        Vegetables:
       </b>
       The mix of various vegetables adds plenty of their unique flavor and taste to sambar. Thus depending on the type of vegetables used, your sambar recipe will taste different every time. I prefer to add a mix of drumsticks, brinjals, pumpkin or ash gourd, pearl onions (shallots), carrots, and okra. Feel free to mix and match the veggies from the list mentioned in the post.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="ixyewaz">
       <b>
        Lentils:
       </b>
       Try to use fresh and preferably unpolished tuvar dal for the best flavor and health reasons. The fresher the dal is the better it tastes and cooks faster. For faster cooking, you can opt to soak the lentils in water for 30 to 60 minutes.
      </li>
      <li className="li1" id="iwvg4ge">
       <b>
        Cooking Lentils:
       </b>
       The lentils can be cooked in an Instant Pot or pan on the stovetop. Add water as needed. The lentils should be softened and mushy.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="iy7plbe">
       <b>
        Tamarind:
       </b>
       I suggest using fresh tamarind. If you use aged tamarind, then it will be darker in color and more sour. So add a bit less of the dark tamarind than what is mentioned in this recipe.
      </li>
      <li className="li1" id="i6o13nt">
       <b>
        Cooking Vegetables:
       </b>
       Always cook the vegetables till they are done but whole. They should not break or become mush in the sambar. So when cooking, add vegetables which cook slower first and cook them for a few minutes. Then add vegetables which cook faster. Note that The vegetables can also be steamed in a steamer or pressure cooker or Instant pot.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="ilas26b">
       <b>
        Oils:
       </b>
       Both gingelly oil (raw sesame oil) and edible coconut oil give a really good taste in sambar. If you do not have these oils, then you can use sunflower oil or peanut oil or even ghee
      </li>
      <li className="li1" id="i1c0wc4">
       <b>
        Frying spices:
       </b>
       While doing the tempering or tadka, always fry on a low heat and stir regularly. The spices and herbs cook fast, so you have to be attentive. If they get burned, then discard them and make a new tempering. Never add a burnt tempering in sambar as it will ruin the taste.
      </li>
      <li className="li1" id="i5vdffn">
       <b>
        Consistency:
       </b>
       Change the consistency of your sambar by adding less or more water. However, do not add too much water and make it thin as then the flavors get diluted. For serving with rice you can make a thick sambar and for serving with idli or dosa, you can make a medium consistency sambar.
      </li>
      <li className="li1" id="iy63pdw">
       <b>
        Balancing sourness:
       </b>
       In case if you find the taste of sambar more sour, then you can always balance the sour taste by adding a bit of jaggery.
      </li>
      <li className="li1" id="iwlci57">
       <b>
        Variations:
       </b>
       A few crushed garlic cloves can also be added to the tempering. This imparts a different flavor in sambar. A bit of jaggery can also be added to give a slight sweeter taste.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="iyu7z2z"/>
    <p id="i2jy8pm">
     Nutrition
     <br/>
    </p>
    <p className="p1" id="ighum1v">
     <p className="p1" id="i85nbcy">
      Calories:
      <span className="s1" id="ip11vi1">
       265 kcal
      </span>
      | Carbohydrates:
      <span className="s1" id="iidjw28">
       38
      </span>
      <span className="s2" id="i5k8d2k">
       g
      </span>
      | Protein:
      <span className="s1" id="ii7bzsy">
       11
      </span>
      <span className="s2" id="icf3soi">
       g
      </span>
      | Fat:
      <span className="s1" id="i8botnj">
       8
      </span>
      <span className="s2" id="i5wbcxz">
       g
      </span>
      | Saturated Fat:
      <span className="s1" id="i15smhz">
       1
      </span>
      <span className="s2" id="i5mpnro">
       g
      </span>
      | Sodium:
      <span className="s1" id="irkthrw">
       60
      </span>
      <span className="s2" id="i0793wb">
       mg
      </span>
      | Potassium:
      <span className="s1" id="i18y1pl">
       700
      </span>
      <span className="s2" id="ixscubt">
       mg
      </span>
      | Fiber:
      <span className="s1" id="iot7ri9">
       13
      </span>
      <span className="s2" id="ibydt0t">
       g
      </span>
      | Sugar:
      <span className="s1" id="igq9m61">
       8
      </span>
      <span className="s2" id="iqhilnc">
       g
      </span>
      | Vitamin A:
      <span className="s1" id="iy3e0xo">
       4125 IU
      </span>
      | Vitamin C:
      <span className="s1" id="ixbs139">
       108.7
      </span>
      <span className="s2" id="ivu9lw1">
       mg
      </span>
      | Calcium:
      <span className="s1" id="i0jm1u9">
       81
      </span>
      <span className="s2" id="iie943j">
       mg
      </span>
      | Iron:
      <span className="s1" id="iqdlxyd">
       4.1
      </span>
      <span className="s2" id="ik2f8ux">
       mg
      </span>
     </p>
    </p>
   </div>
  </div>
 </div>
</body>

    </>
  );
};
sambharPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default sambharPage;
