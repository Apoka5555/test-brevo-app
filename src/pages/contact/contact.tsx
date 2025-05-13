import React, { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    if (window.Brevo) {
      window.Brevo.track("page", {
        name: "Contact",
      });
    }
  }, []);

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Send us a message — this page view is tracked.</p>
    </div>
  );
};
