import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="navigation-menu">
      <ul>
        <li>
          <h3><Link to="/">DASHBOARD</Link></h3>
        </li>
        <li><Link to="/users">USERS LIST</Link></li>
        <li><Link to="/add-user">ADD</Link></li>
        <li><Link to="/delete-user">DELETE</Link></li>
        <li><Link to="/edit-user">EDIT</Link></li>
      </ul>
    </div>
  );
}
