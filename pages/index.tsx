import { SHomePage } from "./style";
import Invesment from "../components/invesment";
import MutilField from "../components/mutil-field";
import FounderTeam from "../components/founder-team";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import AnswerQuestion from "../components/answer-question";

export default function Home() {
  return (
    <>
      <SHomePage className="container">
        <Header />
        <Banner />
      </SHomePage>
      <Invesment />
      <MutilField />
      <AnswerQuestion />
      <FounderTeam />
      <Footer />
    </>
  );
}
