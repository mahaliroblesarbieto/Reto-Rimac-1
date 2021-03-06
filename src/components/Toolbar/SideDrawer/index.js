import React from 'react';

import PropTypes from 'prop-types';
import Logo from '../../Logo';
import NavBar from '../NavBar';
import styles from './SideDrawer.module.css';
import Backdrop from '../../common/Backdrop';

const sideDrawer = ({ open, close }) => {
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }
  return (
    <>
      <Backdrop show={open} clicked={close} />
      <div className={attachedStyles.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavBar />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;

sideDrawer.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
