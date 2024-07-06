import BarChart from "./BarChart";
import NewLineChart from "./NewLineChart";
import { useState } from "react";

export default function DisplayGraphs(){

    const activeButtton = "rounded-3 px-3 bg-black text-white border-black border-1";
    const nonActiveButton = "rounded-3 px-3 border-black border-1"
    const [currentChart, setCurrentChart] = useState("linechart");
    
  function changeChart(chart) {
    setCurrentChart(chart);
  }

    return (
        <>
            <div className="flex gap-3 justify-center">
        <button className={currentChart === "linechart" ? activeButtton : nonActiveButton} onClick={() => changeChart("linechart")}>LineChart</button>
        <button className={currentChart === "barchart" ? activeButtton : nonActiveButton} onClick={() => changeChart("barchart")}>BarChart</button>
      </div>
      <div id="charts" className="h-64 mt-3 w-full flex justify-center ">
        <div className="w-[70%] flex justify-center object-cover">
            {currentChart === "linechart" && <NewLineChart />}
            {currentChart === "barchart" && <BarChart />}
        </div>
      </div>
        </>
    )
}