import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";

function App({ Component, pageProps, ...rest }: AppProps) {
  <style jsx global>{`
    :root {
      /* ... */
    }
  `}</style>;

  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
