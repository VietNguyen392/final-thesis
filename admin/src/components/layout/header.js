import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate,Link} from 'react-router-dom';
import { logout, reset } from '../../redux/feature/auth/authSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userName=user.user.name
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/home');
    
  };


  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          Hello {userName.toUpperCase()}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className=" btn btn-outline-primary" onClick={onLogout}  >
                Logout  <i className="fas fa-sign-out-alt "></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
