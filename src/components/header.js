import { Switch } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../productContext";


const Header = (props) => {
    const { productArray, setProductArray } = useContext(ProductContext);
  
    return (
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/login" activeClassName="active" className="nav-link" aria-current="page">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" activeClassName="active" className="nav-link" aria-current="page">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/addproduct" activeClassName="active" className="nav-link" aria-current="page">
                Add Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" activeClassName="active" className="nav-link" aria-current="page">
                dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/chart" activeClassName="active" className="nav-link" aria-current="page">
                chart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/deposits" activeClassName="active" className="nav-link" aria-current="page">
                deposits
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/listItems" activeClassName="active" className="nav-link" aria-current="page">
                listItems
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders" activeClassName="active" className="nav-link" aria-current="page">
                orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/title" activeClassName="active" className="nav-link" aria-current="page">
                Title
              </NavLink>
            </li>
            
            
            <li className="nav-item">
            <h2>{productArray.length}</h2>
          </li>
          <li className="nav-item">
            <Switch
              checked={props.lightTheme}
              onChange={(e) => props.setLightTheme(e.target.checked)}
            ></Switch>
          </li>
        </ul>
      </header>
    </div>
  );
    };
export default Header;