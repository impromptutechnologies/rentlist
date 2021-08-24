import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import config from '../../config';

import css from './Logo.module.css';
import DesktopLogoImage from './saunatime-logo.png';
import MobileLogoImage from './saunatime-logo.png';

const Logo = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  const logoImage = isMobile ? MobileLogoImage : DesktopLogoImage;

  return (
    <img
      className={classes}
      src={DesktopLogoImage}
      alt={config.siteTitle}
      {...rest}
    />
  );
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
