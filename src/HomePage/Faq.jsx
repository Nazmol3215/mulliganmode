import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="container mt-5">
      <Accordion activeKey={activeKey} onSelect={handleToggle}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is your return policy?</Accordion.Header>
          <Accordion.Body>
            We offer a 30-day return policy on all items. Please keep the
            original packaging.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How long does shipping take?</Accordion.Header>
          <Accordion.Body>
            Shipping typically takes 3-5 business days depending on your
            location.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you offer international shipping?</Accordion.Header>
          <Accordion.Body>
            Yes, we ship internationally to most countries. Shipping costs may
            vary.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
