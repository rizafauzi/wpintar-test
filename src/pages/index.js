import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '../config/client'
import { Helmet } from 'react-helmet'

import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import Layout from '../components/templates/Layout'
import TripSection from '../components/organisms/TripSection'
import PostSection from '../components/organisms/PostSection'
import Benefit from '../components/organisms/Benefit'

import "../styles/global.scss"

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Waroeng Pintar Test</title>
        <meta name="author" content="Riza Fauzi" />
        <meta name="keywords" content="Waroeng Pintar, Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div>
        <Header />
        <Layout>
          <Benefit />
          <TripSection />
          <PostSection />
        </Layout>
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default Home