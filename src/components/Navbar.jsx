import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      if (loggedUser) {
        setUser(loggedUser);
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

    
  
  return (
    <section className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md bg-success">
          <a href="/" className="navbar-brand">
            <b>KILLIHOMEESSENTIALS</b>
          </a>

          <div className="navbar-nav">
            <a href="/" className="nav-link">GetProducts🍉</a>
            <a href="/addproduct" className="nav-link">Add products➕</a>

            {/* ======================================================= */}
            {user ? (
              <>
                <span className="nav-link">
                  Welcome {user.username}
                </span>
                <button onClick={logout} className="btn btn-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/signin" className="nav-link">Signin 👤 </a>
                <a href="/signup" className="nav-link">Signup 👤 </a>
              </>
            )}
            {/* ======================================================= */}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;