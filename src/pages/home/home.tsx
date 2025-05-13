import { useEffect, useRef } from "react";
import useBrevoTracker from "../../hooks/useBrevoTracker";

export const Home = () => {
  const { identify, customEvent, trackLink, page } = useBrevoTracker();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    page("page", {
      name: "Home page",
    });
  }, []);

  const handleIdentify = () => {
    identify("atussupov+test@cinemo.com", "Aby Tussupov");
  };

  const handleCustomEvent = () => {
    customEvent("custom_event", {
      action: "clicked_button",
      label: "Home CTA",
    });
  };

  const handleLinkClick = () => {
    trackLink(linkRef.current, {
      title: "External Link",
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleIdentify}>Identify User</button>
      <button onClick={handleCustomEvent}>Trigger Custom Event</button>
      <a
        href="https://example.com"
        ref={linkRef}
        onClick={handleLinkClick}
        target="_blank"
        rel="noreferrer"
      >
        External Link (tracked)
      </a>
    </div>
  );
};
