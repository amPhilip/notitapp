import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import notes from "./images/notes.png";
const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = "notitApp";
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="landing">
      <nav className="top">
        <h2>NotitApp</h2>
        <div>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button variant="contained" href="/register">
            Sign Up
          </Button>
        </div>
      </nav>
      <div className="landing-inner">
        <div className="landing__img">
          <h1>Notit-App</h1>
          <div className="image__logo">
            <img
              src={notes}
              alt='<a href="https://www.flaticon.com/free-icons/notes" title="notes icons">Notes icons created by Freepik - Flaticon</a>'
            />
          </div>
        </div>
        <div className="p__text">
          <p>
            Notit App is a <strong>Productivity App</strong> that gives a User
            seamless experience with a focus in a User Organising their Thoughts
            and Process in a <strong>Kanban System.</strong> It provides a real
            live preview feature to help you concentrate on the content itself.
            It Provides <strong>Collaboration</strong> with other Users. Want
            some help Just invite In Other Users to your Project Board, It's
            That Simple.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
