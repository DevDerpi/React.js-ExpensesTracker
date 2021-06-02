import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Expense Tracker</div>
      <nav>
        <ul>
          <li>
            <Link to="/Expenses">Expenses</Link>
          </li>
          <li>
            <Link to="/NewExpense">Add New Expense</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
