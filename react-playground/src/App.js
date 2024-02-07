import "./App.css";
import DateCounterMain from "./components/date-counter/DateCounter";
import ProfileCardMain from "./components/profile-card/ProfileCard";
import FlashCardsMain from "./components/flash-cards/FlashCards";
import AccordionMain from "./components/accordion/Accordion";
import TipCalculatorMain from "./components/tip-calculator/TipCalculator";
import StepsMain from "./components/steps/MultiStepsForm";
import PizzaMenuMain from "./components/pizza-menu/PizzaMenu";
import FarAwayTravelListMain from "./components/far-away-travel-list/FarAwayTravelList";
export default function App() {
  return (
    <div className="main-div-container layout">
      <div className="span0">
        <h1 className="components-header">React Components</h1>
      </div>
      <div className="span1">
        <h1 className="components-header"> Pizza Menu </h1>
        <PizzaMenuMain />
      </div>
      <div className="span2">
        <h1 className="components-header"> Profile Card </h1>
        <ProfileCardMain />
      </div>
      <div className="span3">
        <h1 className="components-header"> Date Counter </h1>
        <DateCounterMain />
      </div>
      <div className="span4">
        <h1 className="components-header">Flash Cards</h1>
        <FlashCardsMain />
      </div>
      <div className="span5">
        <h1 className="components-header">Multip Step Form</h1>
        <StepsMain />
      </div>
      <div className="span6">
        {/* <h1 className="components-header">Tip Calculator</h1> */}
        <TipCalculatorMain />
      </div>
      <div className="span7">
        <h1 className="components-header">Accordion</h1>
        <AccordionMain />
      </div>
      <div className="span8">
        <h1 className="components-header">Far Away Travel List</h1>
        <FarAwayTravelListMain />
      </div>
      <div className="span9">
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
