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

const shahiBiryaniPage = ({ 
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
    <body id="idnzw0n">
 <div className="container" id="idgwqu5">
  <div className="container mt-4" id="iv6ydyu">
   <div id="iw9jadd">
    Shahi Biryani
   </div>
   <div className="row row-cols-1 row-cols-md-2">
    <div className="col" id="iopa63s">
     <img alt="Image" className="img-fluid" id="iehn7ag" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
    </div>
    <div className="col" id="i2icezd">
     <div id="iw51gqc">
      Ingredients
     </div>
     <p className="mt-4" id="izyc493">
      SHAHI MASALA - MAKES 3/4 CUP
      <br/>
     </p>
     <p id="icbd0kq">
      <ul className="ul1" id="i67f8bo">
       <li className="li1" id="i9e54jg">
        ¼ cup Dried Coconut Flakes
       </li>
       <li className="li1" id="i9qse9z">
        3 pieces of Dried whole red chilies
       </li>
       <li className="li1" id="i58augz">
        1 teaspoon Fennel seeds saunf
       </li>
       <li className="li1" id="ipgiy4b">
        1 teaspoon Cumin seeds (Jeera)
       </li>
       <li className="li1" id="izw073e">
        4 pieces of Cloves
       </li>
       <li className="li1" id="icf0wu3">
        2 pieces of Black Cardamom
       </li>
       <li className="li1" id="i207lxz">
        1½ teaspoon Coriander seeds
       </li>
       <li className="li1" id="izdttbl">
        1 tablespoon Almonds
       </li>
       <li className="li1" id="i7d2sbv">
        1 tablespoon Cashews
       </li>
       <li className="li2" id="ixuhd6y">
        1 teaspoon Poppy Seeds khus-khus
       </li>
      </ul>
     </p>
    </div>
   </div>
  </div>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1" id="ijteb7o">
   <div className="col mt-4 pb-5" id="itx9rsl">
    <p className="mt-4" id="iljojxs">
     SAUCE/GRAVY INGREDIENTS
     <br/>
    </p>
    <p id="ic4qajs">
     <ul className="ul1" id="ixmh82f">
      <li className="li1" id="i75crgd">
       1 large Onion, finely chopped
      </li>
      <li className="li1" id="i20lqmt">
       2 cloves of Garlic
      </li>
      <li className="li1" id="i3hm62g">
       1 teaspoon Ginger paste
      </li>
      <li className="li1" id="igth0c2">
       3 tablespoons Tomato puree
      </li>
      <li className="li1" id="i8enxli">
       2 tablespoons Cream
      </li>
      <li className="li1" id="i5lvr4y">
       2 teaspoons Garam Masala Powder
      </li>
      <li className="li2" id="iz74e9w">
       2 tablespoons Ghee or Oil
      </li>
     </ul>
    </p>
    <p className="mt-4" id="i8wtioo">
     FRESH VEGGIES
     <br/>
    </p>
    <p id="i5qgntd">
     <ul className="ul1" id="iyw3nn9">
      <li className="li1" id="i1jfc2q">
       ¼ cup Carrots rinsed and diced
      </li>
      <li className="li1" id="idb7nwi">
       ¼ cup Green beans rinsed and diced
      </li>
      <li className="li1" id="iujnxxb">
       1 medium-sized Red Bell pepper rinsed and sliced
      </li>
      <li className="li1" id="i75h3rq">
       ¼ cup Cabbage rinsed and shredded
      </li>
      <li className="li2" id="iikduaz">
       - - Salt to taste
      </li>
     </ul>
    </p>
    <p className="mt-4" id="ijzvuen">
     FOR RICE
     <br/>
    </p>
    <p id="i5ng143">
     <ul className="ul1" id="iuctwcu">
      <li className="li1" id="i8c9vdh">
       1 cup Long Grain Basmati Rice
      </li>
      <li className="li1" id="i09thib">
       2 pieces of Black Cardamom
      </li>
      <li className="li1" id="i0pid1p">
       2 pieces of Green Cardamom (Hari Elaichi)
      </li>
      <li className="li1" id="iwlfr21">
       4 pieces of Cloves (Laung)
      </li>
      <li className="li1" id="ixw1lxz">
       2 sticks of Cinnamon (Dalchini)
      </li>
      <li className="li1" id="ifdqcxk">
       1 piece of Star Anise (Chakra Phool)
      </li>
      <li className="li1" id="ijg1vu1">
       1 teaspoon Cumin seeds
      </li>
      <li className="li1" id="ii0j04z">
       1 large Onion, sliced
      </li>
      <li className="li1" id="i8k2lcp">
       ½ cup Chopped cilantro leaves
      </li>
      <li className="li1" id="ikjdruf">
       3 tablespoons Chopped Mint leaves
      </li>
      <li className="li1" id="i2w28kk">
       1¼ cups Water
      </li>
      <li className="li1" id="i4gk6kl">
       - - Salt to taste
      </li>
      <li className="li1" id="ildfs39">
       2 tablespoons Oil
      </li>
     </ul>
    </p>
    <p className="mt-4" id="i8mainx">
     OTHER INGREDIENTS TO FINISH THE DISH
     <br/>
    </p>
    <p id="irzyjle">
     <ul className="ul1" id="izotagh">
      <li className="li1" id="i52v27f">
       3 small Onions, thinly sliced
      </li>
      <li className="li1" id="is8ro9u">
       1 teaspoon Cornstarch
      </li>
      <li className="li1" id="i11i9u7">
       ¼ cup Mixed nuts (Cashews, almonds, raisins)
      </li>
      <li className="li1" id="isfb85m">
       - - Oul for Frying
      </li>
      <li className="li1" id="inxzu9e">
       3 tablespoons Milk to sprinkle on rice
      </li>
      <li className="li1" id="igkdb9c">
       2 tablespoons Chopped cilantro leaves - to garnish
      </li>
     </ul>
    </p>
    <div id="icxxjsm">
     Instructions
     <br/>
    </div>
    <p className="mt-4" id="ibyo1jf">
     SHAHI MASALA
     <br/>
    </p>
    <p id="inaav1g">
     <ol className="ol1" id="i31aaaa">
      <li className="li1" id="isrq3u4">
       Add all the spices listed under "SHAHI MASALA" to a heavy-bottomed pan. Sauté them for 2-3 minutes over medium heat until lightly brown. Keep stirring frequently to avoid burning the spices. Take the pan off the flame and allow the spices to cool completely.
      </li>
      <li className="li2" id="i5qejhg">
       Once cooled, transfer the spices to a blender and blend until powdered. Set it aside.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="idag1y1">
     PREPARING VEGGIES
     <br/>
    </p>
    <p id="i7r8q68">
     <ol className="ol1" id="i2oaimw">
      <li className="li1" id="itrhxe1">
       Heat oil in a heavy-bottomed pan. Add the ginger-garlic paste and sauté over medium heat for a few seconds.
      </li>
      <li className="li1" id="itp530f">
       Add chopped onions and sauté for about 3-4 minutes until the onions are translucent.
      </li>
      <li className="li1" id="i4u5q5s">
       Add diced beans and carrots to the pan.
      </li>
      <li className="li1" id="i08l4eh">
       Pour in tomato puree.
      </li>
      <li className="li1" id="i1i1ang">
       Add salt + 3 tablespoons of water and mix it well.
      </li>
      <li className="li1" id="i7f4uop">
       Cover and cook the veggies until they are tender and al dente, which means it is firm enough to bite. Do not overcook them, as they may turn mushy and look unpleasing. Feel free to add veggies of your choice.
      </li>
      <li className="li1" id="i1oxr26">
       Pour in cream and mix.
      </li>
      <li className="li1" id="ic4ujqk">
       Add 3 tablespoons + 1 teaspoon of shahi masala that was prepared earlier in the recipe. Mix until all the ingredients are well blended.
      </li>
      <li className="li1" id="ioqnhj3">
       <b>
        <i>
         Tip
        </i>
       </b>
       — Store the remaining Shahi masala for future use in a cool, dry place.
      </li>
      <li className="li2" id="ibibtyg">
       Add bell pepper and cabbage and cook for a minute. Take it off the flame and set it aside.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="ia1khwa">
     PREPARING RICE
     <br/>
    </p>
    <p id="ijelnti">
     <ol className="ol1" id="iueunmv">
      <li className="li1" id="i42ckqu">
       Sort through the rice to remove all the pebbles and gritty things.
      </li>
      <li className="li1" id="iussq2e">
       Rinse and rub rice thoroughly until the water runs clear. Drain and set it aside.
      </li>
      <li className="li1" id="ih1bvrg">
       Heat oil in a heavy-bottomed pan and add the whole spices.
      </li>
      <li className="li1" id="izdfmqf">
       Add onions and sauté until golden brown.
      </li>
      <li className="li1" id="ibrarn5">
       Add water, rinsed rice, and salt. Give it a good stir and bring it to a boil.
      </li>
      <li className="li1" id="i3tp1um">
       Add chopped mint leaves and cilantro leaves.
      </li>
      <li className="li1" id="ibj7auq">
       <b>
        <i>
         Tip
        </i>
       </b>
       — When the rice is cooked in spiced water, it absorbs water and gains flavor and aroma.
      </li>
      <li className="li1" id="i4d38m8">
       Gently mix the rice and parboil it (halfway cooked) for 4-6 minutes in hot water. The rice should be 70% cooked, which means it breaks with slight pressure when pressed between the fingers. If it breaks instantly when pressed, then you have overcooked the rice. Do not proceed with this rice, as you will end up with sticky biryani.
      </li>
      <li className="li1" id="iny65nf">
       Once the rice is parboiled, turn the heat off. Remove the rice from the pan and drain it in the strainer. Let the rice stand in the sieve for 2-3 minutes until all the extra water is drained.
      </li>
      <li className="li2" id="i4jg9mr">
       <b>
        <i>
         Tip
        </i>
       </b>
       — Do not cover the rice; let it dry for a few minutes. The rice is now ready to be used for veg biryani which needs further cooking.
      </li>
     </ol>
    </p>
    <hr className="my-4"/>
    <p id="izgqirp">
     ASSEMBLING PULAO
     <br/>
    </p>
    <p id="iuajgiu">
     <ol className="ol1" id="i4pgpcw">
      <li className="li1" id="ij8qdsg">
       Slice or cut onions in rings. Dust with cornflour.
      </li>
      <li className="li1" id="iejj2et">
       Shake off the excess cornflour and fry onions in hot oil until crunchy and crispy. Set it on a paper towel to drain extra oil.
      </li>
      <li className="li1" id="i15ryzq">
       Same way, fry the nuts. Add 1 tablespoon ghee and roast all the nuts. Roast for 2-3 minutes, stirring often. Remove from heat and set it aside.
      </li>
      <li className="li1" id="i81kvqo">
       Time to assemble shahi pulao. Take a handi or a deep dish pan. Drizzle oil or ghee at its base.
      </li>
      <li className="li1" id="ibjkv6k">
       Add a layer of parboiled rice at the base.
      </li>
      <li className="li1" id="is73g9p">
       Top it with a layer of sautéed veggies.
      </li>
      <li className="li1" id="icj9i3e">
       Again layer it with parboiled rice. Spread it evenly all over the veggies. The sautéed veggies should be covered with a generous layer of rice. Keep repeating the layering until all the veggies and rice are used. Sprinkle milk on top.
      </li>
      <li className="li1" id="i3mrsb4">
       Top the final layer with fried onions and nuts.
      </li>
      <li className="li1" id="i97sibu">
       Layer this delicious biryani with chopped cilantro leaves, and finally, top with some fried nuts.
      </li>
      <li className="li1" id="inqjubf">
       Cover the handi/pan and seal the cover with dough. Before closing the pot, add milk or water to the layered biryani. Dum, cook for 10-15 minutes until rice is cooked thoroughly.
       <span className="Apple-converted-space">
       </span>
      </li>
      <li className="li1" id="iioh451">
       Once the desired cooking time is done, remove the dough and uncover the pan.
      </li>
      <li className="li1" id="ipalhyc">
       Fluff the cooked rice with a fork.
      </li>
      <li className="li2" id="ityzz01">
       Serve hot, along with your favorite raita or chutney.
      </li>
     </ol>
    </p>
    <hr className="my-4" id="ik1j8sh"/>
    <p id="iu9mci2">
     Nutrition
     <br/>
    </p>
    <p className="p1" id="ibf32x7">
     <p className="p1" id="i1ewqcc">
      Calories:
      <span className="s1" id="i8d8ulf">
       323
      </span>
      <span className="s2" id="ihjis33">
       kcal
      </span>
      | Carbohydrates:
      <span className="s1" id="i49x1el">
       34
      </span>
      <span className="s2" id="icfamfz">
       g
      </span>
      | Protein:
      <span className="s1" id="ihy57dg">
       5
      </span>
      <span className="s2" id="ihkxrek">
       g
      </span>
      | Fat:
      <span className="s1" id="iaidd9f">
       18
      </span>
      <span className="s2" id="ivuh0nj">
       g
      </span>
      | Saturated Fat:
      <span className="s1" id="ifdotkk">
       7
      </span>
      <span className="s2" id="ii9jhtm">
       g
      </span>
      | Cholesterol:
      <span className="s1" id="i2wt2zl">
       20
      </span>
      <span className="s2" id="is5kyvr">
       mg
      </span>
      | Sodium:
      <span className="s1" id="itn7fm6">
       23
      </span>
      <span className="s2" id="ivjp2ju">
       mg
      </span>
      | Potassium:
      <span className="s1" id="idg6aj3">
       246
      </span>
      <span className="s2" id="iii0vno">
       mg
      </span>
      | Fiber:
      <span className="s1" id="izt5by6">
       3
      </span>
      <span className="s2" id="ix2bwd8">
       g
      </span>
      | Sugar:
      <span className="s1" id="io7jzuf">
       3
      </span>
      <span className="s2" id="iv1k3pc">
       g
      </span>
      | Vitamin A:
      <span className="s1" id="isl1bzu">
       1050
      </span>
      <span className="s2" id="it2n8vl">
       IU
      </span>
      | Vitamin C:
      <span className="s1" id="iiaqwz4">
       5.6
      </span>
      <span className="s2" id="ic8s2tf">
       mg
      </span>
      | Calcium:
      <span className="s1" id="ipzc2k3">
       61
      </span>
      <span className="s2" id="ibo894k">
       mg
      </span>
      | Iron:
      <span className="s1" id="i6qvtwg">
       1.9
      </span>
      <span className="s2" id="isw18x7">
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
shahiBiryaniPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default shahiBiryaniPage;
