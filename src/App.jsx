import { useEffect, useState } from "react";
import { Card } from "./components";
import { fetchData } from "./utils";
import {
  japan1,
  japan2,
  japan3,
  japan4,
  japan5,
  japan6,
  japan7,
} from "./assets";

function App() {
  const DayOfWeek = () => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const adjustedDayOfWeek = (dayOfWeek + 6) % 7;

    return adjustedDayOfWeek;
  };

  const [advice, setAdvice] = useState("");
  const images = [japan1, japan2, japan3, japan4, japan5, japan6, japan7];
  const image = images[DayOfWeek()];

  const getNewQuote = async () => {
    const response = await fetchData();
    setAdvice(response.data.slip.advice);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-center items-center h-full">
        <Card advice={advice} getNewQuote={getNewQuote} />
      </div>
    </div>
  );
}

export default App;
