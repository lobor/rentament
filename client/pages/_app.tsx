import { useRouter } from 'next/router';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useEffect, useState } from 'react';

import 'antd/dist/antd.css';
import '../styles/globals.css';
import { Spin } from 'antd';
import LayoutApp from '../layout';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.70:4000',
});

const authLink = setContext((_, { headers }) => {
  // eslint-disable-next-line no-undef
  const token = window.localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRouteChangeStartLoading = () => {
    setLoading(true);
  };
  const handleRouteChangeEndLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStartLoading);
    router.events.on('routeChangeComplete', handleRouteChangeEndLoading);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStartLoading);
      router.events.off('routeChangeComplete', handleRouteChangeEndLoading);
    };
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <LayoutApp title={Component.title} extra={Component.extra}>
        <Spin size="large" tip="Loading..." wrapperClassName="spinPage" spinning={loading}>
          <Component {...pageProps} />
        </Spin>
      </LayoutApp>
    </ApolloProvider>
  );
}

export default MyApp;
