import About from "./About";
import ThreeScene from "../../src/ThreeScene";
import { Helmet } from "react-helmet";

const about = () => {
  return (
    <div>
      <Helmet>
        <title>
          Excellis IT | Full Stack Development, Digital Marketing, and BPO
          company
        </title>
        <meta
          name="description"
          content="Excellis IT is a trusted Full Stack Development, Digital Marketing, CAD, and BPO company in Kolkata, India that help business to the top of success through technology and innovative solution. "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="" />
        <link rel="canonical" href="https://www.excellisit.com/about/" />
      </Helmet>

      <ThreeScene />
      <About />
    </div>
  );
};

export default about;
