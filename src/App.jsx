import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOfers,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className=" p-0">
    <Nav />
    <section className=" xl:paddin-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className=" ml-8 ">
      <PopularProducts />
    </section>
    <section className=" padding  ">
      <SuperQuality />
    </section>
    <section className=" padding-x py-10 ">
      <Services />
    </section>
    <section className=" pt-0 sm:px-16 px-8 sm:pb-24 pb-12 ">
      <SpecialOfers />
    </section>
    <section className=" bg-pale-blue padding  ">
      <CustomerReviews />
    </section>
    <section className=" padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className=" bg-black pt-14 padding-x sm:px-16 px-8 pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
