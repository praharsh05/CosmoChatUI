import { BarChart } from "@mui/x-charts/BarChart";
import data1 from "../constants/data1.json";
import data2 from "../constants/data2.json";
import { Container, Typography } from "@mui/material";

// This module aims to render a bar chart recording the
// chat activities so far by user

function Activity() {
  // parse local dummy data
  // arrange data into an array

  let data = [data1, data2];
  // console.log(data);

  const extractX = (arr) => {
    let timeStamps = [];
    arr.forEach((datum) => {
      let dateObj = new Date(datum.timestamp);
      let year = dateObj.getFullYear();
      let month = dateObj.getMonth() + 1;
      let day = dateObj.getDate();
      timeStamps.push(String(year) + "-" + String(month) + "-" + String(day));
    });
    return timeStamps;
  };

  const extractY = (arr) => {
    let count = [];
    arr.forEach((datum) => {
      let length = datum.conversation.length * 2;
      count.push(length);
    });
    return count;
  };

  // Initialize the data
  let timeSeries = extractX(data);
  let counts = extractY(data);
  // console.log(timeSeries);
  // console.log(counts);

  return (
    <Container>
      <Typography>The stats you had with ScottishGPT are: </Typography>
      <BarChart
        xAxis={[{ scaleType: "band", data: timeSeries }]}
        series={[{ data: counts }]}
        width={700}
        height={800}
      />
    </Container>
  );
}

export default Activity;
