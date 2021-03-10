drawBarChart = (data, options, element) => {
  let newChart = document.createElement(element);
  let chartStyle = {
    width: options.width,
    height: options.height,
    display: 'block'
  };
  Object.assign(newChart, chartStyle);


  document.body.insertAdjacentElement('afterbegin', newChart);
};

drawTitle = () => {

}

drawBars = () => {

}

drawNumbers = () => {

}



const data = [1,2,3,4,5];
const options = {
  width: 600,
  height: 400,
  barColor: 'green',
  labelColor: 'white',
  barSpacing: 20,
  titleFontSize: 14,
  titleColor: 'white',
  yAxis: [0,25,50,75,100]
};
const element = 'div.chart';
