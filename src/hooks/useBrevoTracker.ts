const useBrevoTracker = () => {
  const isAvailable = typeof window !== "undefined" && window.Brevo;

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (isAvailable) {
      window.Brevo.push(["page", name, properties]);
    }
  };

  const identify = (
    email: string,
    name?: string,
    attributes?: Record<string, unknown>
  ) => {
    // attributes example:
    // FIRSTNAME: name,
    // LASTNAME: "Doe",
    // AGE: 32,
    // GENDER: "FEMALE",

    if (isAvailable) {
      window.Brevo.push(function () {
        window.Brevo.identify({
          identifiers: {
            email_id: email /*required*/,
          },
          attributes,
        });
      });
    }
  };

  const trackLink = (
    link: HTMLElement | null,
    properties: Record<string, unknown>
  ) => {
    if (isAvailable) {
      window.Brevo.push([
        "trackLink",
        link /* mandatory */,
        properties /* optional */,
      ]);
    }
  };

  const customEvent = (
    eventName: string,
    properties: Record<string, unknown>,
    data?: Record<string, unknown>
  ) => {
    if (isAvailable) {
      window.Brevo.push([
        "track",
        eventName /* mandatory */,
        properties /* optional */,
        data /* optional */,
      ]);
    }
  };

  return {
    page,
    identify,
    trackLink,
    customEvent,
    isAvailable,
  };
};

export default useBrevoTracker;
