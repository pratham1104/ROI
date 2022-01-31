import React, {useState} from 'react';
import './Roi.css'

export default function Roi() {

const [show, hide] = useState(true);






  return <div className='container'>
  <div className="content">
      <h2>ROI Calculator</h2>
      <div className='toggle'>
       
      <label className="switch">
  <input type="checkbox" />
  <span className ="slider round"></span>
</label>

</div>
<div className='input_one'>
<input type="text" placeholder='hello' value="0.00 USD"></input>
<p>- CAKE 0.000</p>
</div>
<div className='radio_one'>
   <input className='radio_input' type='radio' name='money' value='option1' id="radio1" checked= {true}></input>
   <label className='radio_label' for='radio1'>$1000</label>
   <input className='radio_input' type='radio' name='money' value='option2' id="radio2"></input>
   <label className='radio_label' for='radio2'>$100</label>
  
   
</div>

<div className="timeframe">
    <p><b>Timeframe</b></p>
    <div className='radio_two'>
   <input className='radio_input' type='radio' name='time' value='Day1' id="time1" ></input>
   <label className='radio_label' for='time1'>1 Day</label>
   <input className='radio_input' type='radio' name='time' value='Day7' id="time2"></input>
   <label className='radio_label' for='time2'>7 Days</label>
   <input className='radio_input' type='radio' name='time' value='Day30' id="time3"></input>
   <label className='radio_label' for='time3'>30 Days</label>
   <input className='radio_input' type='radio' name='time' value='Year1' id="time4"></input>
   <label className='radio_label' for='time4'>1 Year</label>
   <input className='radio_input' type='radio' name='time' value='Year5' id="time5"></input>
   <label className='radio_label' for='time5'>5 Years</label>
  
   
</div>

</div>

<div className="enable">
   <b>Enable Accelerated APY</b>
   <label className="switch">
<input type="checkbox" />
<span className ="slider round"></span>
</label>
</div>

  <div className='select' >  <p>Select Tier</p>
 
    <div className='radio_three'>
   <input className='radio_input' type='radio' name='tiers' value='tier1' id="tier1" ></input>
   <label className='radio_label' for='tier1'>1 Day</label>
   <input className='radio_input' type='radio' name='tiers' value='tier2' id="tier2"></input>
   <label className='radio_label' for='tier2'>7 Days</label>
   <input className='radio_input' type='radio' name='tiers' value='tier3' id="tier3"></input>
   <label className='radio_label' for='tier3'>30 Days</label>
   <input className='radio_input' type='radio' name='tiers' value='tier4' id="tier4"></input>
   <label className='radio_label' for='tier4'>1 Year</label>
   <input className='radio_input' type='radio' name='tiers' value='tier5' id="tier5"></input>
   <label className='radio_label' for='tier5'>5 Years</label>
  
   
</div>
    </div>

<div className="current_rates">
    <p>ROI at current rates</p>
    <input placeholder='hello' value="0.00 USD"></input>
    <p>-0.000 CAKE + 0.000000 DON</p>
</div>

<div className='details' >
    <p className='one' onClick={() => hide(!show)}><b>Hide Details ^</b></p>
 
    {show ? <div className='rate'>
        <div className='APY'><p><b>APY</b></p>
        <p className='rating'>9.0%</p></div>
    <ul>
        <li>Calculated based on current rates.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita blanditiis accusantium cum, distinctio magni commodi nemo provident fugiat pariatur beatae dolorum eum vero, inventore, quos dolores fugit similique necessitatibus dolore.</li>
    </ul>
    </div>  : null}


</div>
<div>
    {/* <button className='but' onClick={() => hide(!show)}>hello</button> */}
</div>
  </div>
  </div>;
}
