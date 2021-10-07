import type { NextPage } from 'next'
import Header from '../components/NavBar'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'

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

        Designed for the future

        Introducing an extensible editor
        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
        change the looks of a blog.

        Robust content management
        Flexible content management enables users to easily move through posts. Increase the usability of your blog
        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.

        State of the Art Infrastructure
        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.

        Free, open, simple
        Blogr is a free and open source application backed by a large community of helpful developers. It supports
        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

        Powerful tooling
        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites.

        Product

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