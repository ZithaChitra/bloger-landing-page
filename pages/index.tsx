import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Header from '../components/NavBar'
import Content from '../components/Content'
import Footer from '../components/Footer'

interface cState {
  isToggleOn: boolean
}

export class Home extends Component {

  state: cState = {
    isToggleOn: false
  };

  handleToggleClick = () => {
    this.setState((prevState: cState) => {
      return { isToggleOn: !prevState };
    });
  }

  handleBackdropClick = () => {
    this.setState({ isToggleOn: false });
  }

  render() {



    return (
      <div>
        <Header />
        <Content />
        <Footer />

        {/* Product
        
        Overview
        Pricing
        Marketplace
        Features
        Integrations

        Company

        About
        Team
        Blog
        Careers

        Connect

        Contact
        Newsletter
        LinkedIn

        Login
        Sign Up

        A modern publishing platform
        Grow your audience and build your online brand

        Start for Free
        Learn More


        <div className="attribution">
          Challenge by
          <Link href="https://www.frontendmentor.io?ref=challenge">
            <a>Frontend Mentor</a>
          </Link>
          Coded by
          <Link href='/#'>
            <a>Zitha Chitra</a>.
          </Link>
        </div> */}
      </div>
    )
  }
}

export default Home