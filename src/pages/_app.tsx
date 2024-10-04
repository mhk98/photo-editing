import React, { Suspense, useEffect } from "react";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/font-awesome/css/all.min.css";

// custom icons
import "public/glyphter/css/photodit.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// main css
import "@/styles/main.scss";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/app/store";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense>
     <Provider store={store}>
     <Component {...pageProps} />

     </Provider>
    </Suspense>
  );
}