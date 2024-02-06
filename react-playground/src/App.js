import "./App.css";
import DateCounterMain from "./components/date-counter/date-counter";
import ProfileCardMain from "./components/profile-card/profile-card-main";
import FlashCardsMain from "./components/flash-cards/flash-cards";
import AccordionMain from "./components/accordion/accordion";
import TipCalculatorMain from "./components/tip-calculator/tip-calculator";
import StepsMain from "./components/steps/steps";
export default function App() {
  return (
    <div className="main-div-container layout">
      <div class="span0">
        <h1>React Components</h1>
      </div>
      <div class="span1">
        <ProfileCardMain />
      </div>
      <div class="span2">
        <DateCounterMain />
      </div>
      <div class="span3">
        <FlashCardsMain />
      </div>
      <div class="span4">
        <StepsMain />
      </div>
      <div class="span5">
        <TipCalculatorMain />
      </div>
      <div class="span6">
        <AccordionMain />
      </div>
    </div>
  );
}
