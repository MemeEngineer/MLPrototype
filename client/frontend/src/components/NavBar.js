import {NavLink} from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "Black",
    textDecoration: "none",
    color: "White",
  };

function NavBar(){
    return(
        <nav style= {{display: 'flex', justifyContent: 'center'}}>
        <NavLink
        to="/"
        exact = "true"
        style={({ isActive }) => ({
          ...linkStyles,
          background: isActive ? 'Red' : 'Black',
        })}
       
      >
        About
      </NavLink>
       
    </nav>

    )
}
export default NavBar;
