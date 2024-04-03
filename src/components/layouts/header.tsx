
import { STATIC_CONTENT } from '@/lib/constants/static-content';
import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { displayHeaderSearchAtom } from '@/store/display-header-search-atom';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useEffect } from 'react';
import GroupsDropdownMenu from './menu/groups-menu';
import Link from '@/components/ui/link';
import { useRouter } from 'next/router';
import SearchWithSuggestion from '../ui/search/search-with-suggestion';
import Head from "next/head"
import { logoPlaceholder } from '@/lib/placeholders'; 
import { useHelloBar, useSettings } from '@/framework/settings';
import HelloBar from '../hello-bar/hello-bar';
const Search = dynamic(() => import('@/components/ui/search/search'));

const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = ({ layout }: { layout: string }) => {
  const router = useRouter();
  const {
    settings: { storeName , favicon, displayStoreName, logo},
  } = useSettings();

  
  const [displayHeaderSearch, setDisplayHeaderSearch] = useAtom(
    displayHeaderSearchAtom
  );
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();
  useEffect(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  const isFlattenHeader =
    !displayHeaderSearch && isHomePage && layout !== 'modern';

  const favico = favicon ? favicon : logoPlaceholder.src;
  
  return ( 
    <header className={cn('site-header-with-search sticky top-0 z-50 h-auto')}>
    <div data-gjs-type="ui-header" id="i2ook"><nav className="w-100 navbar navbar-expand-lg navbar-light py-4" id="i4cze"><div className="container-fluid" id="i760k"><Link className="navbar-brand" href="/index" id="iwn4j" link-type="page" name="index" page="page://Fgelthl8WxI1Pwnu" slug="index"><span id="i1uae">SR</span><span id="ik4vzt">Spices</span></Link><div className="hamburger1"><span className="bar1"></span><span className="bar1"></span><span className="bar1"></span></div><div className="collapse navbar-collapse" id="collapseId"><div className="navbar-nav" id="i4ty2"><Link className="nav-item nav-link active" href="/index" id="ip927" link-type="page" name="index" page="page://Fgelthl8WxI1Pwnu" slug="index">Home</Link><Link className="nav-item nav-link active" href="/recipe" id="isoymy" link-type="page" name="Recipe" page="page://uEy3N9ExMi39fiYEqFiaU" slug="recipe">Recipe</Link><Link className="nav-item nav-link active" href="/about-page" id="igio6" link-type="page" name="About Page" page="page://wAW6gTheuhIDxBMwTTu" slug="about-page">About Us</Link><Link className="nav-item nav-link active" href="/contact-page" id="icpyl" link-type="page" name="Contact page" page="page://So8kNVmmIIQJXeWaO9jL" slug="contact-page">Contact</Link><div className="nav-item dropdown"><div className="dropdown-menu"><a className="dropdown-item" href="#">Inbox</a><a className="dropdown-item" href="#">Sent</a><a className="dropdown-item" href="#">Drafts</a></div></div></div><div className="navbar-nav ms-auto" id="iuulh"><div action-type="add-cart" button-type="cart" id="iaq3o"><button id="ic5ei" type="button">Cart</button></div><div action-type="sign-in" button-type="auth" id="it5xwp">
                    {
                      isAuthorize ? <AuthorizedMenu minimal={true} /> :
                        <Link href={'/login'}>
                          Login
                        </Link>
                    }

                    {/* {isAuthorize ?  : <JoinButton />} */}
                  </div></div></div></div></nav></div>
    </header>
  );
};

export default Header;
