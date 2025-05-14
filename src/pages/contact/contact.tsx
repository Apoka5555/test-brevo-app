import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    if (window.Brevo) {
      window.Brevo.track("page", {
        name: "Contact page",
      });
    }
  }, []);

  return (
    <div>
      <h1>Contact Page</h1>
      <p>This page is tracked using Brevo's page event.</p>
    </div>
  );
};
