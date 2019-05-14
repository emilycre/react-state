import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <section className={styles.ColorPicker}>
        <button className={styles.salmon} onClick={this.selectColor.bind(null, 'salmon')}>Salmon.</button>
        <button className={styles.yellow} onClick={this.selectColor.bind(null, 'yellow')}>Yellow.</button>
        <button className={styles.blue} onClick={this.selectColor.bind(null, 'blue')}>Blue-ish.</button>
        <div className={styles[color]}></div>
      </section>
    );
  }
}
