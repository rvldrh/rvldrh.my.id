import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const Certificate = dynamic(
  () => import("@/components/certificate/MainSection")
);

const Home = () => {
  return (
    <PageBox>
      <Certificate id="certificate" />
    </PageBox>
  );
};

export default Home;
