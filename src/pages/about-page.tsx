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

const aboutPagePage = ({ 
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
    <body id="iay7cg">
 <section id="id4qdo">
  <div className="container" id="iiizmr">
   <div className="row row-cols-1 row-cols-md-1" id="ico88e">
    <div className="col" id="ip9sgb">
     <div id="iab172">
      Home / About
     </div>
     <div id="ibi21g">
      About Us
     </div>
     <div className="col gap-4 mt-2" id="iy6538">
      <a className="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" href="#!" id="i8vi2v" role="button">
       Shop Now
      </a>
     </div>
    </div>
   </div>
  </div>
 </section>
 <section id="ix47iq">
  <div className="text-black container px-lg-5 px-md-0 px-4 pt-5 pb-sm-5 pb-3" id="iykmua">
   <h2 className="fs-1" id="ia0vli">
    About SR BRAND.
   </h2>
  </div>
  <section className="container-fluid p-5" id="i693rd">
   <div className="container">
    <div className="row" id="ixzjw4">
     <div className="col-md-8 col-12" id="ig8xim">
      <div className="d-flex flex-column justify-content-center px-sm-5 px-2 text-black py-4" id="isjvag">
       <h4 id="i4wsyr">
        Company's Journey
       </h4>
       <p className="mt-2" id="i6cg7i">
        SR BRAND, a division of Lakshay Impex, has been a trusted name in the spice and dry fruits industry for over a decade. With a commitment to quality and authenticity, we have established ourselves as a leading supplier of top-tier spices that capture the true essence of Indian flavors. Our journey began with a vision to bring the best of Indian spices to households worldwide, and today, we continue to uphold that promise with every product we offer.
       </p>
      </div>
     </div>
     <div className="col-md-4 col-12 p-0">
      <img alt="About-Image" className="img-fluid w-100 h-100" id="iyysg4" src="https://d1ne4tihfhyh93.cloudfront.net/files/srspices24032003/ASSET/WhatsApp Image 2024-06-07 at 16.50.48 (6).jpeg"/>
     </div>
    </div>
   </div>
  </section>
  <section className="container-fluid p-5" id="isdx4f">
   <div className="container">
    <div className="row row-cols-md-2" id="iv0ven">
     <div className="col-md-4 col-12 p-0" id="i996v9">
      <img alt="About-Image" className="img-fluid w-100" id="iyqb33" src="https://d1ne4tihfhyh93.cloudfront.net/files/srspices24032003/ASSET/WhatsApp Image 2024-06-07 at 16.50.47 (1).jpeg"/>
     </div>
     <div className="col-md-8 col-12" id="izgqtr">
      <div className="d-flex flex-column justify-content-center px-sm-5 px-2 text-black py-4" id="i6rzzq">
       <h4 id="iiic4n">
        Purpose and Goals
       </h4>
       <p className="mt-2" id="i5o5jg">
        At SR BRAND, our purpose is simple yet profound - to deliver the finest quality spices that truly embody the rich heritage and tradition of Indian cuisine. We strive to delight our customers with products that not only meet but exceed their expectations, setting a new standard for excellence in the industry. Our goal is to become the go-to choice for anyone looking for authentic Indian spices that elevate their culinary creations to new heights.
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
  <section className="container-fluid p-5" id="i0acr9">
   <div className="container">
    <div className="row" id="i0avof">
     <div className="col-md-8 col-12" id="icu16o">
      <div className="d-flex flex-column justify-content-center px-sm-5 px-2 text-black py-4" id="irtd3l">
       <h4 id="ibirzl">
        Introduction to the Team
        <br/>
       </h4>
       <p className="mt-2" id="id5q7e">
        Behind every successful product is a dedicated team of individuals who are passionate about what they do. At SR BRAND, our team consists of experienced professionals who bring a wealth of knowledge and expertise. From sourcing the best raw materials to ensuring stringent quality control measures, our team is committed to delivering nothing but the best to our customers.
        <br/>
       </p>
      </div>
     </div>
     <div className="col-md-4 col-12 p-0">
      <img alt="About-Image" className="img-fluid w-100 h-100" id="iril7u" src="https://d1ne4tihfhyh93.cloudfront.net/files/srspices24032003/ASSET/WhatsApp Image 2024-06-07 at 16.50.47 (2).jpeg"/>
     </div>
    </div>
   </div>
  </section>
  <section className="container-fluid p-5" id="il5mfd">
   <div className="container">
    <div className="row row-cols-md-2" id="i8ysrb">
     <div className="col-md-4 col-12 p-0" id="i7yfpj">
      <img alt="About-Image" className="img-fluid w-100 h-100" id="igps46" src="https://d1ne4tihfhyh93.cloudfront.net/files/srspices24032003/ASSET/WhatsApp Image 2024-06-07 at 16.50.47 (3).jpeg"/>
     </div>
     <div className="col-md-8 col-12" id="ih0w1h">
      <div className="d-flex flex-column justify-content-center px-sm-5 px-2 text-black py-4" id="isendl">
       <h4 id="ipzbef">
        Offerings
        <br/>
       </h4>
       <p className="mt-2" id="i359yw">
        Our offerings at SR BRAND extend beyond just spices - we also provide a wide range of dry fruits and blended spices that cater to a variety of culinary needs. What sets us apart is our unique manufacturing process, where we carefully control the temperature to preserve the natural flavors and aromas of the ingredients. We take care of proper hygiene by wearing gloves, caps, and boot covers etc. We have a manufacturing plant of  60000 sq feet area, With a capacity to supply over 600 metric tons of goods daily, we ensure a seamless and efficient delivery of our products to customers worldwide.
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
  <section className="container-fluid p-5" id="iosvap">
   <div className="container">
    <div className="row" id="ifhevn">
     <div className="col-md-8 col-12" id="i3oie2">
      <div className="d-flex flex-column justify-content-center px-sm-5 px-2 text-black py-4" id="i72apr">
       <h4 id="iihfoj">
        Customer Opinions
        <br/>
       </h4>
       <p className="mt-2" id="izqjoj">
        Our top priority is customer satisfaction, and we take great pride in the positive feedback and reviews we receive. Customers rave about our products' unmatched quality and taste, praising the authentic flavors and freshness that set us apart from the competition. Their testimonials serve as a testament to our dedication to excellence and our unwavering commitment to customer satisfaction.
        <br/>
       </p>
      </div>
     </div>
     <div className="col-md-4 col-12 p-0">
      <img alt="About-Image" className="img-fluid w-100 h-100" id="i5kzv9" src="https://d1ne4tihfhyh93.cloudfront.net/files/srspices24032003/ASSET/WhatsApp Image 2024-04-29 at 2.35.49 PM.jpeg"/>
     </div>
    </div>
   </div>
  </section>
  <section className="container-fluid p-5" id="isn0yts">
   <div className="container">
    <div className="row row-cols-md-2" id="icbqh2z">
     <div className="col-md-4 col-12 p-0" id="iqzl9p">
      <img alt="About-Image" className="img-fluid w-100 h-100" id="ikff6t" src="https://d1ne4tihfhyh93.cloudfront.net/files/srspices24032003/ASSET/WhatsApp Image 2024-04-29 at 2.35.48 PM.jpeg"/>
     </div>
     <div className="col-md-8 col-12" id="izgse1h">
      <div className="d-flex flex-column justify-content-center px-sm-5 px-2 text-black py-4" id="ihk6nah">
       <h4 id="igxgiak">
        Achievements
        <br/>
       </h4>
       <p className="mt-2" id="i1w6sua">
        Over the years, SR BRAND has garnered numerous accolades and awards for our exceptional products and services. From industry recognition to the loyal customer base, our achievements reflect our continuous efforts to push the boundaries of quality and innovation. We are honored to be recognized as a leading player in the spice industry and remain committed to surpassing our past achievements in the years to come.
        <br/>
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
  <section className="container-fluid p-5" id="ig387bq">
   <div className="container">
    <div className="row" id="ibqgg6s">
     <div className="col-md-8 col-12" id="i89yi9k">
      <div className="d-flex flex-column justify-content-center px-sm-5 px-2 text-black py-4" id="ittwu7y">
       <h4 id="i1nb2jq">
        Call to Action
        <br/>
       </h4>
       <p className="mt-2" id="i9pgalr">
        Experience the true essence of Indian spices with SR BRAND. Explore our wide range of products and elevate your culinary creations to new heights. Whether you're a home cook or a professional chef, our authentic flavors and premium-quality ingredients are sure to impress. Join the SR BRAND family today and discover a world of exquisite flavors that will leave your taste buds craving more.
        <br/>
       </p>
      </div>
     </div>
     <div className="col-md-4 col-12 p-0">
      <img alt="About-Image" className="img-fluid w-100 h-100" id="iki4cq" src="https://d1ne4tihfhyh93.cloudfront.net/files/srspices24032003/ASSET/WhatsApp Image 2024-06-07 at 16.50.48 (3).jpeg"/>
     </div>
    </div>
   </div>
  </section>
  <section className="container-fluid bg-white" id="io8jq9">
   <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 px-5 py-5 border border-black d-flex align-items-center flex-column text-black text-center">
     <span>
      <svg className="bi bi-geo-alt" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
       <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z">
       </path>
       <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
       </path>
      </svg>
     </span>
     <strong className="fs-4">
      Address
     </strong>
     <p className="mt-3">
      500 Terry Francine St. San Francisco, CA 94158
     </p>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 px-5 py-5 border border-black d-flex align-items-center flex-column text-black text-center">
     <span>
      <svg className="bi bi-telephone" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
       <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
       </path>
      </svg>
     </span>
     <strong className="fs-4">
      Phone
     </strong>
     <p className="mt-3">
      123-456-7890
     </p>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 px-5 py-5 border border-black d-flex align-items-center flex-column text-black text-center">
     <span>
      <svg className="bi bi-envelope" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
       <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z">
       </path>
      </svg>
     </span>
     <strong className="fs-4">
      Email
     </strong>
     <p className="mt-3">
      info@mysite.com
     </p>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 px-5 py-5 border border-black d-flex align-items-center flex-column text-black text-center">
     <span>
      <svg className="bi bi-hand-thumbs-up" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
       <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z">
       </path>
      </svg>
     </span>
     <strong className="fs-4">
      Connect
     </strong>
     <div className="mt-3 d-flex w-100 justify-content-evenly">
      <a className="text-black" href="#">
       <svg className="bi bi-facebook" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
        </path>
       </svg>
      </a>
      <a className="text-black" href="#">
       <svg className="bi bi-twitter" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
        </path>
       </svg>
      </a>
      <a className="text-black" href="#">
       <svg className="bi bi-linkedin" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
        </path>
       </svg>
      </a>
      <a className="text-black" href="#">
       <svg className="bi bi-instagram" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
        </path>
       </svg>
      </a>
     </div>
    </div>
   </div>
  </section>
 </section>
</body>

    </>
  );
};
aboutPagePage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default aboutPagePage;
