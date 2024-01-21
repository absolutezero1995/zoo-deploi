import React from "react";
import "./RatesItem.css";

interface RateItemProps {
  rate: {
    name: string;
    price: string;
  };
}

const RatesItem: React.FC<RateItemProps> = ({ rate }): JSX.Element => {
  let url;
  switch (rate.name) {
    case "Adult weekday":
      url = "https://img3.goodfon.ru/wallpaper/big/b/e0/orangutang-obezyana-fon.jpg";
      break;
    case "Children weekday":
      url = "https://i1.wallbox.ru/wallpapers/small/201730/zivotnoe-obezana-detenys-simpanze.jpg";
      break;
    case "Adult weekend":
      url = "https://wallbox.ru/wallpapers/main2/201715/149184428258ebbcbabb0ec1.19152999.jpg";
      break;
    case "Children weekend":
      url = "https://cs7.pikabu.ru/post_img/2018/04/24/11/1524595635195471732.jpg";
      break;
    default:
      break;
  }

  const backgroundStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className="rate-card-container" style={backgroundStyle}>
      <h2 className="rate-card-text-h2">{rate.name}</h2>
      <h2 className="rate-card-text-h2 less">{`${rate.price} ₽`}</h2>
    </div>
  );
}

export default RatesItem;
