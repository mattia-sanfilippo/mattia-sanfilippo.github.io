/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  Hello!<br />My name is Mattia Sanfilippo and this is my developer blog.<br />
                  I&rsquo;m from Turin, Italy, but that doesn&rsquo;t matter because now thanks to the online communities it&rsquo;s easy to be in touch with people from all over the world.<br />
                  I&rsquo;ll tell you a little about my career.<br />I started immediately after graduating in computer science to work for a consulting company in the automotive sector.<br />
                  I have been a fullstack developer for a long time, and I have been involved in both functional analysis and actual development, but also the deployment on our customers&rsquo; servers!<br />
                </p>

                <p>
                  In the last year in that company I have also been able to develop an entire app for Android devices, managing both the mobile and backend part.<br />
                  On my own, I wanted to follow a nanodegree at Udacity.<br />
                  After four years, I decided I wanted to specialize in Frontend development, so I started taking courses on the most used frameworks (or libraries) such as React, Angular and Vue.js.<br />
                  So I started taking various courses on Egghead, FrontendMasters and Coursera. I highly recommend subscribing to these e-learning platforms, especially the first two if you want to improve your skills and excel in development and soft skills.<br />

                  Subsequently, after getting involved again, I wanted to take the opportunity to join the Oval team, a platform that allows you to accumulate and invest your money with caution.<br />
                  The project interested me very much and I couldn&rsquo;t wait to get started!<br />

                  There I really learned a lot, from mastering React Native to perfecting skills in JavaScript, TypeScript and functional programming in general.<br />
                </p>

                <p>
                  After almost a year, I was offered to join a team at H-FARM, a very large company with an unrivaled campus of innovation and culture.<br />
                  I currently work here at H-FARM and continue to develop in JavaScript, particularly in the Frontend and mobile area with React Native.<br />
                  How will my story continue? I&rsquo;ll find out just by trying to improve myself and my skills, experimenting and learning from mistakes day by day.<br />

                  Thanks for coming to read this far. I hope I haven&rsquo;t annoyed you too much and have given you enough information about my career.<br />

                  See you soon!<br />
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
