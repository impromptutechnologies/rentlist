import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AbouthostguestPage.module.css';
import image from './about-us-1056.jpg';

const FAQPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="FAQPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQPage',
        description: 'Frequently Asked Questions',
        name: 'FAQ page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>More Info</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>

            <div className={css.contentMain}>


              <h3 className={css.subtitle}>Find a space catered to your needs.</h3>

              <p>
                Rentlist offers you a platform through which you can reach thousands of yoga
                practitioners. Offering private yoga classes through Rentlist offers you a
                possibility to grow your customer base and earn some extra income on top of your
                regular classes.
              </p>

              <h3 className={css.subtitle}>Passive income via your unused space.</h3>

              <p>
                Rentlist offers you a platform through which you can reach thousands of yoga
                practitioners. Offering private yoga classes through Rentlist offers you a
                possibility to grow your customer base and earn some extra income on top of your
                regular classes.
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
