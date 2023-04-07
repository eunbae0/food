import '@/styles/globals.css';
import 'reset-css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { createStore } from 'redux';
import { persistedReducer, wrapper } from '@/modules';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const persistor = persistStore(createStore(persistedReducer));
  return (
    <SWRConfig value={{ shouldRetryOnError: false }}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Head>
            <title>Food</title>
            <meta name="description" content="food share" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <div className="global">
            <Component {...props.pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </SWRConfig>
  );
}
