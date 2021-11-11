import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Layout from "../components/Layout/Layout";
import ResultsCard from "../components/ResultsCard";

export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guestNumber } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <Layout location={location} range={range} numberOfGuests={guestNumber}>
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {guestNumber} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Room and Beds</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <ResultsCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  star={star}
                  description={description}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
