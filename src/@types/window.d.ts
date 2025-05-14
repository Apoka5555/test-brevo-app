type SendinblueAPI = {
  track: (event: string, data?: Record<string, unknown>) => void;
  push: (args: unknown[] | (() => void)) => void;
  identify: (data: {
    identifiers: Record<string, string>;
    attributes?: Record<string, unknown>;
  }) => void;
  // @deprecated
  trackLink: (
    link: HTMLElement | null,
    properties?: Record<string, unknown>
  ) => void;
};

interface Window {
  Brevo: SendinblueAPI;
}
