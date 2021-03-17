drawBarChart = (data, options, element) => {
  const newChart = document.createElement(element);
  newChart.classList.add('chart');
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
  height: 500,
  barColor: 'green',
  labelColor: 'white',
  barSpacing: 20,
  titleFontSize: 14,
  titleColor: 'white',
  yAxis: [0,25,50,75,100]
};
const element = 'div';

{/* <div class = 'chart'>
<h1 class = 'title'>Bar Chart</h1>
<ul class = 'numbers'>
  <li><span>100</span></li>
  <li><span>75</span></li>
  <li><span>50</span></li>
  <li><span>25</span></li>
  <li><span>0</span></li>
</ul>
<ul class = 'bars'>
  <li><div class = 'bar' data-percent = 60></div><span>foccfdso</span></li>
  <li><div class = 'bar' data-percent = 40></div><span>Entry 2</span></li>
  <li><div class = 'bar' data-percent = 80></div><span>Entry 3</span></li>
  <li><div class = 'bar' data-percent = 100></div><span>Entry 5</span></li>
  <li><div class = 'bar' data-percent = 100></div><span>Entry 5</span></li>
</ul>
</div>

<script type = 'text/javascript'>
$(barAnimation = () => {
  $('.bar').each(function(){
    $(this).animate({'height': $(this).data('percent') + '%'}, 1500);
  });
});
</script> */}
