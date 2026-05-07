import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const Gallery = dynamic(
  () => import("@/components/gallery/MainSection")
);

const Home = () => {
  return (
    <PageBox>
      <Gallery id="gallery" />
    </PageBox>
  );
};

export default Home;
