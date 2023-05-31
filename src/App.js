import { useMemo, useState } from "react";
import 'bulma/css/bulma.css'
import '../src/App.css'
import image1 from "./images/fitness.jpg"
import image2 from './images/cartoon-character-beautiful-girl-pink-260nw-2053104443 (1).jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export default function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1 className="hero is-primary"> BMI CALCULATOR</h1>
      <div className="flex">
       <div>
       <p className="para">Body mass index (BMI) estimates body fat. Your BMI is based on your height and weight. When you enter your height and weight into a BMI calculator, you’ll get a number. That number is one way to gauge if you have a healthy or unhealthy weight.</p>
       <div className="flex1">
        <img src={image2} />
       <div className="box ">
        <h1 className="calcbmi">Calculate BMI</h1>
       <div className="input-section">
        <p class="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
       </div>
       </div>
       
     
      
       </div>
       <div className="image1" >
       <img src={image1}/>
      </div>
      
      </div>
    <div className="tableflex">
      <table class="table is-bordered is-striped  is-hoverable ">
  <thead>
    <tr>
      <th>SI no</th>
      <th>BMI</th>
      
      <th>Weight status</th>
    </tr>
  </thead>
  <tfoot></tfoot>
  <tbody>
    <tr>
      <th>1</th>
      <td>Below 18.5</td>
      <td>Underweight</td>
      
    </tr>
    <tr>
      <th>2</th>
      <td>18.5 – 24.9</td>
      <td>Normal or Healthy Weight</td>
      
    </tr>
    <tr>
      <th>3</th>
      <td>25.0 – 29.9</td>
      <td>25.0 – 29.9</td>
      
    </tr>
    <tr>
      <th>3</th>
      <td>30.0 and above</td>
      <td>Obese</td>
      
    </tr>
    </tbody>
  </table>
  <p className="description">
  For adults over the age of 20, a healthy BMI is between 18.5 and 24.5. Anything below is too low and could mean a person is underweight, and anything over is too high and could mean a person is overweight or obese (30 to 39.9). Some extra factors do need to be considered when calculating a person's Body Mass Index, however – some sportsmen and sportswomen, for example, have a BMI that suggests they are overweight due to muscle weighing more than fat.

A high BMI means a person's chances of getting heart disease, kidney disease, diabetes, having high blood pressure, having a stroke or getting certain cancers is increased, so keeping your BMI score healthy is very important. If you're wondering what the easiest ways to keep your BMI around the ideal level (18.5-24.5), see our top tips below. And don't worry, it's not rocket science...
  </p>
      </div>
  <div>
  <h1 style={{
    fontWeight:800,
    textAlign: 'center' ,
    marginBottom: '30px',
    fontSize: '30px',
  }}>REDUCE YOUR DAILY CALORIE INTAKE</h1>
<p style={{
  textAlign: 'center' ,
  marginBottom: '50px',
  marginLeft: '50px',
  marginRight: '50px',
  color: 'rgb(227, 89, 89)',
  fontSize: '20px',
}}>The basic rule of lowering your BMI, and to maintain a healthy weight generally, is to consume the same or slightly less calories than you burn. Use a calories calculator to work out roughly how many calories a day you use (you will need to enter details of your exercise routine and your working environment) and then stick to eating only that amount, or a little less if you want to lose weight overall.</p>

<h1 style={{
    fontWeight:800,
    textAlign: 'center' ,
    marginBottom: '30px',
    fontSize: '30px',
  }}>CUT DOWN ON SALT</h1>
<p style={{
  textAlign: 'center' ,
  marginBottom: '50px',
  marginLeft: '50px',
  marginRight: '50px',
  color: 'rgb(227, 89, 89)',
  fontSize: '20px',
}}>Reduce your sodium intake by cutting out processed foods (crisps, ready meals etc.), which will also help you cut down your intake of fatty foods, and steer clear of the salt shaker. To season your food use herbs and spices instead.</p>

<h1 style={{
    fontWeight:800,
    textAlign: 'center' ,
    marginBottom: '30px',
    fontSize: '30px',
  }}>GET YOUR HEART PUMPING</h1>
<p style={{
  textAlign: 'center' ,
  marginBottom: '50px',
  marginLeft: '50px',
  marginRight: '50px',
  color: 'rgb(227, 89, 89)',
  fontSize: '20px',
}
}>Burn up your body's excess fat by taking part in regular cardio workouts. Cardiovascular exercises are perfect for melting fat as they use fat as the main source of fuel, which carbs and protein used to a lesser extent. Running, fast-paced cycling and walking, and rowing are all great examples of cardio exercises that will help the fat fall off.</p>
  </div>
  <footer class="footer is-primary">
  <div class="content has-text-centered">
    <p>
      <strong>VE creations</strong> by <a href="#">Elvis Thomas</a> 
     <div><a href="#"><FaInstagram/><FaFacebook/><FaTwitter/></a> </div>
    </p>
  </div>
</footer>
     
    </main>
  );
}
