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
    identify("atussupov+test@cinemo.com", {
      firstName: "Abylaikhan",
      lastName: "Tussupov",
    });
  };

  const handleCustomEvent = () => {
    customEvent("custom_event", {
      action: "clicked_button",
      label: "Home CTA",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (linkRef.current) {
      // NOT recommended to use this way in React app as it's working with DOM element directly
      trackLink(linkRef.current, {
        title: "External Link",
      });
    } else {
      // recommended way
      customEvent("link clicked", {
        title: "External Link",
        url: href,
      });
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleIdentify}>Identify User</button>
      <button onClick={handleCustomEvent}>Trigger Custom Event</button>
      <a
        id="download_casestudy_a"
        href="https://example.com"
        ref={linkRef}
        onClick={handleLinkClick}
        target="_blank"
      >
        External Link (tracked)
      </a>
    </div>
  );
};
