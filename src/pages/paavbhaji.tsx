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

const paavbhajiPage = ({ 
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
 <div className="container mt-4" id="io2b2t">
  <div className="row row-cols-1 row-cols-md-2" id="ih6yap">
   <div className="col">
    <img alt="Image" className="img-fluid" id="i9jjra" src="https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg"/>
   </div>
   <div className="col" id="iixf7c">
    <div id="it1lbf">
     Ingredients
    </div>
    <p id="iua4ow">
     ❖ 24 ounces pizza dough, divided
     <br/>
     ❖ 1/2 cup all-purpose flour, for dusting
     <br/>
     ❖ About 1 cup pesto
     <br/>
     ❖ 2-3 cups grated mozzarella/provolone cheese
     <br/>
     ❖ 1 cup roasted or confit garlic cloves
     <br/>
     ❖ 4 red skinned potatoes, very thinly sliced
     <br/>
     ❖ 1/2 teaspoon Italian seasoning
     <br/>
     ❖ Olive oil
     <br/>
     ❖ Kosher salt and freshly ground black pepper
     <br/>
     ❖ Crushed red pepper flakes
    </p>
   </div>
  </div>
 </div>
 <div className="container" id="ibyd6b">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1" id="i0j4tn">
   <div className="col mt-4" id="ibota8">
    <div id="ii6c8l">
     Method
    </div>
    <p id="itt6nq">
     Step 1
    </p>
    <p id="ihp77f">
     Place a pizza stone in the lower third of the oven and preheat to 500°. Allow the stone to heat for at least half an hour before baking pizzas.
    </p>
    <p id="irnnem">
     Step 2
    </p>
    <p id="iohern">
     Allow the pizza dough to come to room temperature. On a lightly-floured work surface, form the dough into two large balls, collecting the sides and tucking them under to create a smooth outer surface. Cover the dough with a damp towel and allow to rest for at least 20 minutes.
    </p>
    <p id="ik0xyn">
     Step 3
    </p>
    <p id="ia9qbc">
     Meanwhile, blanch the potato slices in boiling water until just cooked through, anywhere between 1 – 2 minutes. Drain and allow to cool slightly before drying the slices with paper towels and coating them with a touch of olive oil, a pinch of Italian seasoning and kosher salt.
    </p>
    <p id="i5frh8">
     Step 4
    </p>
    <p id="i50w3v">
     Generously dust a wooden peel or the back of a sheet pan with flour or cornmeal. With lightly-floured hands, press the dough with your fingertips to form a flattened disk. Lift the dough up and use the back of your knuckles to stretch and thin-out the dough into a circle with a diameter of 12-inches. Be careful to preserve the edge of the dough if you want a light, chewy crust. Carefully position the stretched dough onto the prepared peel or baking sheet.
    </p>
    <p id="i4y83l">
     Step 5
    </p>
    <p id="iv0m6a">
     Using a large spoon, spread an even layer of the pesto onto the dough and carefully spread it to within 1/2-inch of the edge, being careful to leave a sauce free edge. Top with an even layer of the grated mozzarella/provolone cheese followed by slices of parboiled potatoes and roasted garlic cloves. Top with a light sprinkling of a bit more mozzarella, season with salt to taste and a pinch of red pepper flakes. Lightly brush the exposed crust with a bit of olive oil (or leftover garlic) oil to promote browning.
    </p>
    <p id="i6upgf">
     Step 6
    </p>
    <p id="ilzc12">
     Carefully slide the pizza onto the preheated stone and bake until the crust is crisped and golden and the cheese is bubbling and just beginning to brown, about 6-7 minutes. Remove the pizza from the oven and allow it to rest for a few minutes before slicing.
    </p>
   </div>
  </div>
 </div>
</body>

    </>
  );
};
paavbhajiPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default paavbhajiPage;
