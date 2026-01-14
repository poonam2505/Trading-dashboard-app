import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import DoughnutChart from "./DoughnutChart";

const WatchList = () => {
  const { setWatchlist } = useContext(GeneralContext);

  const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input type="text" placeholder="Search eg: infy, reliance" />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          const isDown = stock.isDown;

          return (
            <li key={index}>
              <div className="item">
                <p className={isDown ? "down" : "up"}>{stock.name}</p>

                <div className="item-info">
                  <span>{stock.price}</span>
                  {isDown ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                </div>
              </div>

              <div className="actions">
                <Tooltip
                  title="Buy"
                  placement="top"
                  arrow
                  TransitionComponent={Grow}
                >
                  <button
                    className="buy"
                    onClick={() => setWatchlist(stock)}
                  >
                    BUY
                  </button>
                </Tooltip>

                <Tooltip
                  title="Sell"
                  placement="top"
                  arrow
                  TransitionComponent={Grow}
                >
                  <button className="sell">SELL</button>
                </Tooltip>

                <Tooltip
                  title="Analytics"
                  placement="top"
                  arrow
                  TransitionComponent={Grow}
                >
                  <button className="analytics">
                    <BarChartOutlined />
                  </button>
                </Tooltip>

                <Tooltip
                  title="More"
                  placement="top"
                  arrow
                  TransitionComponent={Grow}
                >
                  <button className="more">
                    <MoreHoriz />
                  </button>
                </Tooltip>
              </div>
            </li>
          );
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;
