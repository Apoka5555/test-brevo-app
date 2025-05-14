import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    if (window.Brevo) {
      window.Brevo.track("page", {
        name: "About page",
      });
    }
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>This page is tracked using Brevo's page event.</p>
    </div>
  );
};
