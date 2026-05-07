import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const CV = dynamic(
  () => import("@/components/cv/MainSection")
);

const Home = () => {
  return (
    <PageBox>
      <CV />
    </PageBox>
  );
};

export default Home;
