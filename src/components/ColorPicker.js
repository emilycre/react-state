import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.salmon} onClick={() => selectColorHandler('salmon')}>Salmon.</button>
      <button className={styles.gold} onClick={() => selectColorHandler('gold')}>Yellow.</button>
      <button className={styles.teal} onClick={() => selectColorHandler('teal')}>Blue-ish.</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
