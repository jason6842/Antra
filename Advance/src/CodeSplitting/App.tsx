import { Link, Outlet, Route, Routes } from "react-router-dom";
// import Home from './Home'
// import Store from './Store'
// import About from './About'
import React, { Suspense } from "react";

// Home Page isn't in the source folder until it is called
const Home = React.lazy(() => wait(1000).then(() => import("./Home"))); // Returns a promise
const Store = React.lazy(() => wait(1000).then(() => import("./Store"))); // Returns a promise
const About = React.lazy(() =>
  import("./About").then((module) => {
    return { default: module.About }; // renaming out import, so .default is About
  })
); // Returns a promise

// Once downloaded once, you don't have to download it anymore

function CodeSplittingApp() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      {/* Everything within Suspense has a chance of being lazy loaded */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default CodeSplittingApp;
