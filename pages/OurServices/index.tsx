import MainServices from "./MainServices";
import ThreeScene from "../../src/ThreeScene";
import { Helmet } from "react-helmet";

const services = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Services | Excellis IT</title>
        <meta
          name="description"
          content="We provide a vast range of services for our clients. Our services include IT services, Digital marketing services, BPO services and CAD services"
        />
        <link rel="canonical" href="https://www.excellisit.com/OurServices" />
      </Helmet>

      <ThreeScene />
      <MainServices />
    </div>
  );
};

export default services;
