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

import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';

import { authorizationAtom } from '@/store/authorization-atom';

import { useAtom } from 'jotai';

//[[UI_IMPORT]]
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
   const [isAuthorize] = useAtom(authorizationAtom);
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
      
 <div>
  Main page
 </div>




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

     
