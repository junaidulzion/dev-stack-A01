// import Banner from "./components/banner"
import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies/Technologies";
import type { ttype } from "./types/technologyType";
import Footer from "./components/Footer";

const technologyFetch = async(): Promise<ttype[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {

 const technologyPromise = technologyFetch();

  return (
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={<h2>Loading...</h2>}>
      <Technologies technologyPromise = {technologyPromise}></Technologies>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
