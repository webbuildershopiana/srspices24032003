import Card from '@/components/ui/cards/card';

import Seo from '@/components/seo/seo';

import DashboardLayout from '@/layouts/_dashboard';

// import MyReports from '@/components/reports/report-view';

import { useModalAction } from '@/components/ui/modal/modal.context';

import { useSettings } from '@/framework/settings';

import { useLogin } from '@/framework/user';

import { LoginUserInput } from '@/types';

import { useTranslation } from 'next-i18next';

import { useRouter } from 'next/router';

import * as yup from 'yup';

import { Form } from '@/components/ui/forms/form';

import Button from '@/components/ui/button';

import Link from 'next/link';

import Alert from '@/components/ui/alert';

import GeneralLayout from '@/components/layouts/_general';

import { useEffect } from 'react';




const loginFormSchema = yup.object().shape({
  username: yup.string().required('error-mobilenumber-required').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  password: yup.string().required('error-password-required').min(4, 'Must be exactly 4 digits').max(4, 'Must be exactly 4 digits'),
  email: yup.string().email('error-email-format').optional(),
});

const LoginPage = () => {
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
  const { t } = useTranslation('common');
  const router = useRouter();
  const { openModal } = useModalAction();
  const isCheckout = router.pathname.includes('checkout');
  const { mutate: login, isLoading, serverError, setServerError } = useLogin();

  // const {
  //   settings: {
  //     allowGuestUser
  //   },
  // } = useSettings();

  function onSubmit({ username, password }: LoginUserInput) {
    login({
      username,
      password,
    });
  }
  return (
    <>
    <Alert
        variant="error"
        message={serverError && t(serverError)}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      />
      <body>
 <section id="iw89uw">
  <div className="container px-4 py-5" id="i5eq82">
   <div id="ihzm6k">
    Account Login
   </div>
   <div id="i4uvyf">
    Hey, Enter your details to get sign in
    <br/>
    to your account.
   </div>
   <div id="iso4iq">
    <Form<LoginUserInput>
        onSubmit={onSubmit}
        validationSchema={loginFormSchema} id="iozt1i">
     {({ register, formState: { errors } }) => (
                <>
                <div className="mb-3"><input aria-describedby="emailHelp" className="form-control" id="exampleInputEmail1" name="username" placeholder="Mobile Number" required="" type="number" {...register('username')}/></div>
<div className="mb-3"><input className="form-control" id="exampleInputPassword1" name="password" placeholder="Passcode" required="" type="password" {...register('password')}/></div>
<div action-type="sign-in" button-type="auth" id="ite2ir"><button id="icjiqs" type="button">Sign In</button></div>
<div className="d-flex gap-4 pt-4" id="ijtia8"><a className="text-decoration-none" id="ilqvag">forgot pin</a><div action-type="register" button-type="auth" id="if34n6"><button onClick={() => openModal('REGISTER')} id="iigfqr" type="button">Register</button></div></div>
                </>
                )}
    </Form>
   </div>
  </div>
 </section>
</body>



    </>
  );
};
LoginPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default LoginPage;

     
