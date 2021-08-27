import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutContainer } from './style';

const Layout = ({ children }) => (
  <LayoutContainer className='font'>
    <Header />
      {children}
    <Footer />
  </LayoutContainer>
);

export default Layout;