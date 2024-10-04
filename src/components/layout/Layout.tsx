import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HeaderOne from "./Header/HeaderOne";
import HeaderTwo from "./Header/HeaderTwo";
import HeaderThree from "./Header/HeaderThree";
import FooterOne from "./Footer/FooterOne";
import FooterTwo from "./Footer/FooterTwo";
import ScrollProgressBtn from "./ScrollProgressBtn/ScrollProgressBtn";

type LayoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps) => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const router = useRouter();

  let additionalClasses = " ";

  if (router.pathname === "/index-dark") {
    additionalClasses = " home-dark";
  }

  if (router.pathname === "/index-two-dark") {
    additionalClasses = " home-two-dark";
  }

  const combinedClasses = `${additionalClasses} my-app`;

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Photodit | Clipping Path Service React NextJs Template</title>
        <meta name="keywords" content="photodit, image editing, edit, react" />
        <meta
          name="description"
          content="Clipping Path Service React NextJs Template"
        />
      </Head>
      <div className={`${combinedClasses}${openNav ? " body-active" : " "}`}>
        {header === 1 && (
          <HeaderOne
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 2 && (
          <HeaderTwo
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 3 && (
          <HeaderThree
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        <main>{children}</main>
        {footer === 1 && <FooterOne />}
        {footer === 2 && <FooterTwo />}
        <ScrollProgressBtn />
      </div>
    </Fragment>
  );
};

export default Layout;
