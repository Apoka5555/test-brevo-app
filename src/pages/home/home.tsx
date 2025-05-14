import { useEffect, useRef, useState } from "react";
import useBrevoTracker from "../../hooks/useBrevoTracker";

export const Home = () => {
  const { identify, customEvent, trackLink, page } = useBrevoTracker();
  const linkRef = useRef<HTMLAnchorElement>(null);

  const [eventCounts, setEventCounts] = useState({
    identify: 0,
    customEvent: 0,
    trackLink: 0,
    pageView: {
      home: 0,
    },
  });

  useEffect(() => {
    page("page", {
      name: "Home page",
    });
    setEventCounts((prev) => ({
      ...prev,
      pageView: { ...prev.pageView, home: prev.pageView.home + 1 },
    }));
  }, []);

  const handleIdentify = () => {
    identify("atussupov+test@cinemo.com", {
      firstName: "Abylaikhan",
      lastName: "Tussupov",
    });
    setEventCounts((prev) => ({ ...prev, identify: prev.identify + 1 }));
  };

  const handleCustomEvent = () => {
    customEvent("custom_event", {
      action: "clicked_button",
      label: "Home CTA",
    });
    setEventCounts((prev) => ({ ...prev, customEvent: prev.customEvent + 1 }));
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (linkRef.current) {
      // NOT recommended to use this way in React app as it's working with DOM element directly
      trackLink(linkRef.current, {
        title: "External Link",
      });
      setEventCounts((prev) => ({ ...prev, trackLink: prev.trackLink + 1 }));
    } else {
      // recommended way
      customEvent("link clicked", {
        title: "External Link",
        url: href,
      });
      setEventCounts((prev) => ({
        ...prev,
        customEvent: prev.customEvent + 1,
      }));
    }
  };

  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="content">
        <button onClick={handleIdentify}>Identify User</button>
        <button onClick={handleCustomEvent}>Trigger Custom Event</button>
        <a
          id="download_casestudy_a"
          href="https://example.com"
          ref={linkRef}
          onClick={handleLinkClick}
          target="_blank"
        >
          External Link
        </a>
      </div>

      <div className="event-counters">
        <h2>Event Counters</h2>
        <p>Identify Event Triggered: {eventCounts.identify} times</p>
        <p>Custom Event Triggered: {eventCounts.customEvent} times</p>
        <p>Home page viewed: {eventCounts.pageView.home} times</p>
        <p>
          View logs here:{" "}
          <a href="https://automation.brevo.com/log/events" target="_blank">
            Brevo Events Logs
          </a>
        </p>
      </div>
    </div>
  );
};
