# Test Brevo App

This project is a React application designed to test the tracking capabilities of the Brevo tool. The application encapsulates the tracking logic within a custom hook, `useBrevoTracker`, ensuring that components remain decoupled from the tracking implementation.

## Features

- **Encapsulated Tracking Logic**: The `useBrevoTracker` hook handles all tracking-related functionality, such as identifying users, tracking page views, custom events, and link clicks.
- **Component Independence**: Components simply call the functions provided by the `useBrevoTracker` hook to track events. They do not need to know the underlying tracking logic or the specific tool being used.
- **Future-Proof Design**: The tracking tool can be replaced or updated in the future without requiring changes to the components, as the logic is centralized in the hook.

## How It Works

1. **Tracking Hook**: The `useBrevoTracker` hook provides methods for:

   - Tracking page views (`page`)
   - Identifying users (`identify`)
   - Tracking custom events (`customEvent`)
   - Tracking link clicks (`trackLink`)

2. **Component Usage**: Components call the hook's methods to trigger tracking events. For example:

   - A button click can trigger a custom event.
   - A page load can trigger a page view event.

3. **Decoupled Architecture**: The components are unaware of the specific tracking tool (Brevo in this case). This abstraction allows for easy replacement of the tracking tool in the future.

## Example Usage

### Hook Implementation

The `useBrevoTracker` hook is implemented in [`src/hooks/useBrevoTracker.ts`](src/hooks/useBrevoTracker.ts).

### Component Example

Here is an example of how a component uses the hook:

```tsx
import { useEffect } from "react";
import useBrevoTracker from "../../hooks/useBrevoTracker";

export const Home = () => {
  const { page, customEvent } = useBrevoTracker();

  useEffect(() => {
    page("Home Page", { title: "Welcome to the Home Page" });
  }, []);

  const handleButtonClick = () => {
    customEvent("button_click", { label: "Home CTA" });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};
```
