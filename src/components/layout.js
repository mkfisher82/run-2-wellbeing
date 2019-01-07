import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

// import Header from './header';
import Footer from './footer';
import './style.scss';
import './normalise.scss';

import Favicon from '../images/r2wb-favicon.png';

const Page = styled.div`
  margin: 0px auto;
  /* width: 100vw; */
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Page>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'The run 2 wellbeing website' },
            { name: 'keywords', content: 'running, wellbeing, mental health' },
            { name: 'viewport', content: 'width=device-width' },
            { name: 'google-site-verification', content: 'UeaKXdCgblOxP54PXFqr4j8OpPAAuJglUKtJ9UrOfVM' },
            // Facebook Opengraph
            { name: 'og:url', content: 'https://www.run2wellbeing.co.nz' },
            { name: 'og:type', content: 'website' },
            { name: 'og:title', content: 'Run 2 Wellbeing' },
            { name: 'og:description', content: 'Fitness coaching for mind and body' },
            {
              name: 'og:image',
              content:
                'https://www.run2wellbeing.co.nz/static/kalen-emsley-99660-unsplash-c_scale,w_1920-a2f4a979bb92c202a0d72fb5c04889ac.jpeg',
            },
            { name: 'og:image:alt', content: 'Running hills as the sunrises' },
            { name: 'og:image:type', content: 'image/jpeg' },
            { name: 'og:image:width', content: '1920' },
            { name: 'og:image:height', content: '700' },
          ]}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` }]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Header /> */}
        {children}
        <Footer />
      </Page>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
