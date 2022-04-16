import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function About() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>The Mission Statement</Accordion.Header>
        <Accordion.Body>
          Red Hat's mission statement—"to be the catalyst in communities of
          customers, contributors, and partners creating better technology the
          open source way"—is a guiding beacon for everyone who makes us what we
          are. And as you read the Book of Red Hat, you won't be surprised to
          learn that the statement itself came to life the open source way. More
          than 400 Red Hatters collaborated on the statement to refine it, hone
          it, and ensure it spoke precisely and powerfully about our role as
          enablers and stewards of open source software. It's as compelling
          today as it was in 2009, when we revealed it to the world.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>The Marketing Pitch</Accordion.Header>
        <Accordion.Body>
          Make money selling free software? In the 1990s, when Red Hat was in
          its infancy, it was a wild notion. Few people understood how it could
          work. Why would someone choose open source software over proprietary
          alternatives? The idea needed clear—and convincing—explaining. And few
          people were better at it than Red Hat co-founder Bob Young. A former
          typewriter salesman, Bob knew how to make the benefits of open source
          resonate with people who had never heard of it. "Would you buy a car
          with the hood welded shut?" he asked during a ZDNet interview in May
          2000—a powerful (rhetorical) question that emphasized the benefit of
          being able to inspect and tinker with the tools we use. The Book of
          Red Hat reprints part of the interview transcript—a testament to the
          enduring impact of Bob's pitches.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>The Leap of Faith</Accordion.Header>
        <Accordion.Body>
          The open source software powering Red Hat's solutions has changed
          dramatically since our early days. And Red Hat's business model has
          evolved just as much. In the Book of Red Hat, you'll read more about
          our early ventures selling boxed copies of software on retail shelves.
          "Our open source development model was innovative," the book says,
          "but our distribution and business models were conventional." That
          changed in 2002 with the introduction of Red Hat Enterprise Linux—and
          a shift to the subscription-based revenue model that broke with
          industry norms. It's still in place today. You'll find many more of
          the milestones that shaped Red Hat in the Book of Red Hat.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
