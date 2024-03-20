import { STATIC_CONTENT } from '@/lib/constants/static-content';
import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { displayHeaderSearchAtom } from '@/store/display-header-search-atom';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useEffect, useState } from 'react';
import SearchWithSuggestion from '@/components/ui/search/search-with-suggestion';
import { useHelloBar, useSettings } from '@/framework/settings';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import HelloBar from '../hello-bar/hello-bar';
import BottomHeader from '../bottom-header/bottom-header';
import { logoPlaceholder } from '@/lib/placeholders';
import Link from '@/components/ui/link';

const CartCounterIconButton = dynamic(
  () => import('@/components/cart/cart-counter-icon-button'),
  { ssr: false }
);
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const HeaderMinimal = ({ layout }: { layout: string }) => {
  const router = useRouter();
  
  const [_, setDisplayHeaderSearch] = useAtom(displayHeaderSearchAtom);
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();
  const { data:hellobarData, isLoading, error } = useHelloBar();

  const {
    settings: { displaySearchBox, storeName, allowOnlinePurchase, displayStoreName, logo },
  } = useSettings();

  useEffect(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);

  return (
    <header className={cn('site-header-with-search sticky top-0 z-50 h-auto header-bg-color')}>
      <div
        className={cn(
          'z-50 flex w-full flex-col items-center justify-between transition-transform duration-300',
          {
            'px-5 lg:!px-12 xl:px-16': layout === 'compact',
          }
        )}
      >

        {hellobarData &&
          <HelloBar/>
        }

        <div className="flex w-full items-center justify-between ltr:lg:pl-12 ltr:lg:pr-8 rtl:lg:pr-12 rtl:lg:pl-8 px-4 lg:pt-4 lg:pb-4 lg:py-0 py-3">
          <div className="flex items-center lg:w-auto relative">

            {displayStoreName ?
              <div className='flex items-center lg:w-auto '>
                <Logo className="mx-auto lg:mx-0" />
              </div> :
              <Link href="/">
                <div className="flex items-center w-60 relative">
                  <img src={logo ?? logoPlaceholder} className="min-h-[4rem] max-h-[4rem] min-w-[4rem] max-w-[16rem]" alt="Logo" />
                </div>
              </Link>
            }

            {storeName && displayStoreName ? (
              <Link href="/">
                <h2 className="mx-4 text-xl font-semibold tracking-wide header-text-color">
                  {storeName}
                </h2>
              </Link>
            ) : null}
            {/* <ul className="hidden shrink-0 items-center space-x-7 ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto rtl:space-x-reverse lg:flex 2xl:space-x-10"> */}
            {/* <StaticMenu /> */}
            {/* <li className="hidden lg:inline-block xl:hidden">
                <Link
                  href={`${router.asPath}/search`}
                  className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
                >
                  {STATIC_CONTENT['text-search']}
                </Link>
              </li> */}
            {/* </ul> */}
          </div>


          {/* {isHomePage && displaySearchBox ? (
            <>
              {displayMobileHeaderSearch && (
                <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:hidden">
                  <SearchWithSuggestion
                    label={STATIC_CONTENT['text-search-label']}
                    variant="minimal"
                    seeMore={true}
                  />
                </div>
              )}

              {layout === 'compact' || 'jewe' && (
                <div className="mx-auto hidden lg:block w-full px-8 xl:flex xl:w-6/12 xl:px-10 xl:rtl:w-4/12 2xl:rtl:w-5/12">
                  <SearchWithSuggestion
                    label={STATIC_CONTENT['text-search-label']}
                    variant="minimal"
                    seeMore={true}
                  />
                </div>
              )}
            </>
          ) : <></>} */}

          <div className="hidden shrink-0 items-center space-x-9 rtl:space-x-reverse lg:flex">
            {/* <GroupsDropdownMenu variant="minimal" /> */}
            {allowOnlinePurchase && <CartCounterIconButton />}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* <Link
                href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
                variant="button"
                target="_blank"
              >
                {STATIC_CONTENT['text-become-seller']}
              </Link> */}
              {isAuthorize ? <AuthorizedMenu minimal={true} /> : <JoinButton />}
            </div>
          </div>
        </div>
        {/* <div className="w-full">
          <ul className="flex hidden shrink-0 flex-wrap items-center space-x-7 ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto rtl:space-x-reverse lg:flex 2xl:space-x-10">
            <StaticMenu />
          </ul>
        </div> */}
        <BottomHeader layout="jewe" variables={layout}></BottomHeader>
      </div>
    </header>
  );
};

export default HeaderMinimal;
