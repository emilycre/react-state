import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorDisplay.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.salmon} onClick={() => selectColorHandler('salmon')}>Salmon.</button>
      <button className={styles.yellow} onClick={() => selectColorHandler('yellow')}>Yellow.</button>
      <button className={styles.blue} onClick={() => selectColorHandler('blue')}>Blue-ish.</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
