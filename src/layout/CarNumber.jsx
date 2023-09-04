import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarNumber } from '../stores/carNumber';
import { setCarNumber } from '../stores/carNumber';

const CarNumber = () => {

   const { number } = useSelector(state => state.carNumber);

   const dispatch = useDispatch();
   const countryCityCodes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35",
      "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53",
      "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "85", "90", "99"];

   const numberMiddleCode = ["A", "B", "C", "D", "E", "F", "Z", "H", "i", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X"];
   const [intervalID, setIntervalID] = useState(null);
   const [rangeValue, setRangeValue] = useState(2500);

   // ////Generating car Number
   function generateCarNumber() {
      ///GETTING CITY CODE HERE ----- 
      let cityCodeRandom = Math.floor(Math.random() * countryCityCodes.length);
      let cityCode = countryCityCodes[cityCodeRandom];

      ///GETTING NUMBER MIDDLE CODE HERE ----- 
      let firstNumberLetterRandom = Math.floor(Math.random() * numberMiddleCode.length);
      let firstLetter = numberMiddleCode[firstNumberLetterRandom];

      let secondNumberLetterRandom = Math.floor(Math.random() * numberMiddleCode.length);
      let secondLetter = numberMiddleCode[secondNumberLetterRandom];

      ///GETTING THREE LENGTH CODE HERE ----- 
      let threeLengthNumberRandom = Math.floor(Math.random() * 1000) + 1;
      let threeLengthNumber = threeLengthNumberRandom.toString().length === 1 ?
         `00${threeLengthNumberRandom.toString()}` : threeLengthNumberRandom.toString().length === 2 ?
            `0${threeLengthNumberRandom.toString()}` : threeLengthNumberRandom.toString();

      ////SETTING CAR NUMBER TO STATE
      let carNumberDone = `${cityCode}-${firstLetter}${secondLetter}-${threeLengthNumber.toString()}`;
      dispatch(setCarNumber(carNumberDone));
   }

   useEffect(() => {
      generateCarNumber()
   }, []);

   function startInterval() {
      if (!intervalID) {
         let id = setInterval(() => {
            generateCarNumber();
         }, rangeValue);
         setIntervalID(id)
      }
   }

   function stopInterval() {
      clearInterval(intervalID);
      setIntervalID(null)
   }

   return (
      <div className="carNumber_section">
         <div className="carNumber_main__wrapper">
            <div className="carNumber_layer">
               <div className="carNumber_layer__inner">
                  <div className="carNumber_countrySign">
                     <img src={require('../asset/flag.png')} width={150} alt="" />

                     <div className="carNumber_countryName__wrapper">
                        <div className="carNumber_countryName__wrapper_inner">
                           <h1>AZ</h1>
                        </div>
                     </div>
                  </div>

                  <div className="carNumber_textWrapper">
                     <h1>{number}</h1>
                  </div>
               </div>
            </div>

            <div className="buttonWrapper">
               <button onClick={() => generateCarNumber()}>GENERATE NEW ONE</button>
               <span>{rangeValue} millisecond</span> <br />
               <input type="range" min={50} max={5000} step={50} defaultValue={2500} onChange={(e) => setRangeValue(Number(e.target.value))} /><br />
               <button onClick={() => startInterval()} value="start" disabled={!intervalID ? false : true}>START GENERATING</button>
               <button onClick={() => stopInterval()} value="stop">STOP GENERATING</button>
            </div>
         </div>
      </div>
   )
}

export default CarNumber