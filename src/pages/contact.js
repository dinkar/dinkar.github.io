/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Header} from 'components';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Contact = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h1>Contact</h1>
        <p>TODO: Add a contact page here :)</p>
      </Content>
    </Wrapper>
  </Layout>
);

export default Contact;
