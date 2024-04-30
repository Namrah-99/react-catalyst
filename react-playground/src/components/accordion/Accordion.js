import "./Accordion.css";
import { useState } from "react";
const faqs = [
  {
    title: "Your Account",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Payment & Pricing",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Returns & Refunds",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Shipping & Delivery",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Viewing & Tracking",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
];

export default function AccordionMain() {
  const [currentOpen, setCurrentOpen] = useState(0);
  return (
    <div className="accordion-container">
      <div className="accordion-wrapper">
        <h1 className="accordion-main-title">Shopping Help</h1>
        {faqs.map((faq, index) => (
          <Accordion
            currentOpen={currentOpen}
            onCurrenOpen={setCurrentOpen}
            title={faq.title}
            num={index}
            key={faq.title}
          >
            {faq.text}
          </Accordion>
        ))}
      </div>
    </div>
  );
}
function Accordion({ currentOpen, onCurrenOpen, children, title, num }) {
  const isOpen = currentOpen === num;

  function handleToggle(num) {
    onCurrenOpen(isOpen ? null : num);
  }
  return (
    <div className="accordion-item" onClick={() => handleToggle(num)}>
      <div className="accordion-title">
        <p className="accordion-number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="accordion-titles">{title}</p>
        <p className="accordion-icon">{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen ? <div className="accordion-content">{children}</div> : null}
    </div>
  );
}
