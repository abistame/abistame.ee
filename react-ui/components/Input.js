import cc from "classcat";
import styles from "./Input.module.scss";

export default React.forwardRef(
  ({ primaryPlaceholder, multiline, large, ...props }, ref) => {
    const inputProps = {
      ref,
      ...props,
      className: cc([
        styles.input,
        { [styles.inputPrimaryPlaceholder]: primaryPlaceholder,[styles.large]: large }
      ])
    };
    return multiline ? <textarea {...inputProps} /> : <input {...inputProps} />;
  }
);
