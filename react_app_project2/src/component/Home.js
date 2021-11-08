import Dance from "../home/Dance";
import Masks from "../home/Masks";
import Sections from "../home/Sections";
import Service from "../home/Service";
import Slider from "../home/Slider";
function Home() {
  return (
    <div>
      <Slider />
      <Sections />
      <Masks />
      <Dance />
      <Service />
    </div>
  );
}

export default Home;
