import styles from "./index.css";
import Link from "umi/link";

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <ul>
        <li>
          <Link to={`/users`}>User</Link>
        </li>
        <li>
          <Link to={`/goods`}>Product</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
    </div>
  );
}
