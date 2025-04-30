import React, { Suspense, useState, useTransition } from "react";
import { lazyLoad } from "./lazyLoad.ts";
// import { sum } from "./sum";
// import AdminData from "./AdminData";

// const AdminData = React.lazy(() =>
//   wait(1000).then(() =>
//     import("./AdminData.tsx").then((module) => {
//       return { default: module.AdminData };
//     })
//   )
// );

const AdminData = lazyLoad("./AdminData.tsx", "AdminData");

function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1>Home</h1>
      {/* This imports the sum function from sum.ts when the button is clicked */}
      <button
        onClick={() => {
          import("./sum.ts").then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          startTransition(() => {
            setIsAdmin((prev) => !prev);
          });
        }}
      >
        Toggle Admin
      </button>
      {isPending && "Loading"}
      <Suspense fallback={<h2>Loading...</h2>}>
        {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  );
}

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default Home;
