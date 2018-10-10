import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header';
import Footer from '../components/footer';
import './style.scss';
import './normalise.scss';

import Favicon from '../images/r2wb-favicon.png';

const Page = styled.div`
  margin: 0px auto;
`;

const Content = Page.extend``;

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
          ]}
          link={[
            {rel: 'shortcut icon', type: 'image/png', href: `${Favicon}`}
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header/>
        <Content>
          {children}
        </Content>
        <Footer />
      </Page>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
