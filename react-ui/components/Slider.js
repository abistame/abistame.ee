import cc from 'classcat';
import styles from './Slider.module.scss';

export default () => (
  <div className={cc(["col", styles.gutter])}>
    <label>Abivajajate kaugus</label>
    <div className={styles.track}>
      <div className={styles.trackFill} style={{width: '50%'}}>
        <div className={styles.trackCursor} style={{left: '50%'}} />
      </div>
    </div>
    <div className={cc(["row", styles.legend])}>
      <span>Lähemal</span>
      <span>Kaugemal</span>
    </div>
  </div>
);
