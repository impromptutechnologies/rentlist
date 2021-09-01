import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';

import css from './SectionHowItWorks.module.css';

const SectionYe = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionYe.titleLineOne" />
        <br />
        <FormattedMessage id="SectionYe.titleLineTwo" />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionYe.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionYe.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionYe.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionYe.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionYe.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionYe.part3Text" />
          </p>
        </div>
      </div>
      <div className={css.createListingLink}>
        <OwnListingLink listing={currentUserListing} listingFetched={currentUserListingFetched}>
          <FormattedMessage id="SectionYe.createListingLink" />
        </OwnListingLink>
      </div>
    </div>
      
  );
};

SectionYe.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionYe.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionYe;
