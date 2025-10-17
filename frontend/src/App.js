- import { BrowserRouter, Routes, Route } from "react-router-dom";
+ import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
-   <BrowserRouter basename="/Portfolio">
+   <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
-   </BrowserRouter>
+   </HashRouter>
  );
}
