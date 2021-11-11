import Head from "next/head";
import Banner from "../components/Banner";
import LargeCard from "../components/LargeCard";
import Layout from "../components/Layout/Layout";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <Layout>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />

      <main className="max-w-7xl mx-auto py-8 px-8 bg-gray-100 shadow-lg sm:px-16">
        <div className="bg-white p-4 shadow-sm rounded-lg">
          <section className="pt-6">
            <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map(({ location, img, distance }) => (
                <SmallCard
                  key={location}
                  img={img}
                  distance={distance}
                  location={location}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

            <div className="flex p-3 -ml-3 space-x-4 overflow-scroll scrollbar-hide">
              {cardsData?.map(({ img, title }) => (
                <MediumCard key={title} img={img} title={title} />
              ))}
            </div>
          </section>

          <section>
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="The Greatest Outdoors"
              description="Wishlists curated by Airbnb"
              buttonText="Get Inspired"
            />
          </section>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
