import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
// import Loader from "../../components/Loader";
import Layout from "../../layout";
import Category from "./Category/Categories";

const Landing = () => {
  return (
    <div className="">
      <Layout header={<Header />} footer={<Footer />}>
        <div className="">
          <Category />
        </div>
      </Layout>
    </div>
  );
};

export default Landing;
