import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';

import css from './ListingPage.module.css';

/*const getCertificateInfo = (certificateOptions, key) => {
  return certificateOptions.find(c => c.key === key);
};*/

const SectionHeading = props => {
  const {
    richTitle,
    //listingCertificate,
    //certificateOptions,
    //{showCertificate ? <span>{certificate.label}</span> : null}
    //
    showContactUser,
    onContactUser,
  } = props;

  //const certificate = getCertificateInfo(certificateOptions, listingCertificate);
  //const showCertificate = certificate && !certificate.hideFromListingInfo;
  //{showCertificate ? <span className={css.separator}>•</span> : null}

  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          {showContactUser ? (
            <span className={css.contactWrapper}>
              <InlineTextButton
                rootClassName={css.contactLink}
                onClick={onContactUser}
                enforcePagePreloadFor="SignupPage"
              >
                <FormattedMessage id="ListingPage.contactUser" />
              </InlineTextButton>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
