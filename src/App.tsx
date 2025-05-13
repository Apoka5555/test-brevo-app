import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
// import CookieConsent from "react-cookie-consent";
import { Navigation } from "./components/navigation";

// const loadBrevoScript = () => {
//   if (document.getElementById("brevo-script")) return;
//   const script = document.createElement("script");
//   script.src = `https://sibautomation.com/sa.js?key=${
//     import.meta.env.VITE_BREVO_CLIENT_KEY
//   }`;
//   script.async = true;
//   script.id = "brevo-script";
//   document.body.appendChild(script);
// };

function App() {
  // const handleAcceptCookies = () => {
  //   loadBrevoScript();
  // };

  return (
    <Router>
      {/* <CookieConsent enableDeclineButton onAccept={handleAcceptCookies}>
        We use cookies to enhance your experience.
      </CookieConsent> */}

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
