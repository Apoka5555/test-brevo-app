const useBrevoTracker = () => {
  const page = (name: string, properties?: Record<string, unknown>) => {
    window.Brevo.push(["page", name, properties]);
  };

  const identify = (email: string, attributes?: Record<string, unknown>) => {
    window.Brevo.push(function () {
      window.Brevo.identify({
        identifiers: {
          email_id: email, // required
        },
        attributes,
      });
    });
  };

  const trackLink = (
    link: HTMLElement | null,
    properties: Record<string, unknown>
  ) => {
    console.log("link", link);

    window.Brevo.push([
      "trackLink",
      link, // required
      properties, // optional
    ]);

    // window.Brevo.trackLink(link, properties);
  };

  const customEvent = (
    eventName: string,
    properties: Record<string, unknown>,
    data?: Record<string, unknown>
  ) => {
    window.Brevo.push([
      "track",
      eventName, // required
      properties, // optional
      data, // optional
    ]);
  };

  return {
    page,
    identify,
    trackLink,
    customEvent,
  };
};

export default useBrevoTracker;
