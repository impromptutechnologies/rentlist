import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';
import { NamedLink } from '..';

import css from './SectionHowItWorks.module.css';

const SectionTwoSided = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
        <br />
        <FormattedMessage id="SectionHowItWorks.titleLineTwo" />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part3Text" />
          </p>
        </div>
      </div>
      <div>
      <NamedLink
          name="AbouthostguestPage"
          className={css.heroButton}
        >
          <FormattedMessage id="SectionYe.button" />
        </NamedLink>
      </div>
      <div className={css.createListingLink}>
        <OwnListingLink listing={currentUserListing} listingFetched={currentUserListingFetched}>
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </OwnListingLink>
      </div>
    </div>
  );
};

SectionTwoSided.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionTwoSided.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionTwoSided;
