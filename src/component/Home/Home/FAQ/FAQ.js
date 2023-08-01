import React from 'react';
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FAQ = () => {
    return (
        <div className='mb-5'>
      <h1 className="text-center text-style my-5">Frequently Asked Questions</h1>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  HOW LONG IS A TYPICAL SWIM LESSON?
                </Accordion.Header>
                <Accordion.Body>
                  Crawl, walk, run, swim. That’s the order a parent ⏤ whether a
                  proficient lap swimmer or one still deathly afraid of the
                  water ⏤ should think about their child’s physical milestones.
                  Few life skills are as important as the ability to survive in
                  the water.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  HOW MANY INSTRUCTORS ARE THERE PER STUDENT FOR GROUP LESSONS?
                </Accordion.Header>
                <Accordion.Body>
                  Imagine teaching in front of a sea of children, desks stacked
                  so closely together you have to creatively maneuver yourself
                  to move about the classroom. With an abundance of students,
                  it's difficult to find the capacity or time to truly focus on
                  each individual's strengths and weaknesses, tailor teaching
                  according to their needs, or know how to push each one
                  uniquely toward success.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  DO I HAVE TO GET IN THE WATER WITH MY CHILD DURING LESSONS?
                </Accordion.Header>
                <Accordion.Body>
                  Learning to swim should be a priority for every family. It's
                  an important life skill that can play a key role in helping to
                  prevent drowning―a top cause of death among children.
                  Children, and their parents, need to learn how to swim to help
                  keep time in the water safe and fun!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  WILL MY CHILD BE ABLE TO SWIM AFTER COMPLETING THE COURSE?
                </Accordion.Header>
                <Accordion.Body>
                  The best age for your child to begin the process of learning
                  to swim is as close to 6mo as possible. The sooner your child
                  begins to learn to swim, the sooner they will learn be safe in
                  the water.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  DO YOU OFFER SEMI-PRIVATE OR PRIVATE SWIM LESSON?
                </Accordion.Header>
                <Accordion.Body>
                  If you opt for private swim lessons, then you will have
                  one-on-one instruction. It will just be you with our swim
                  instructor. By selecting private instruction, you’ll be able
                  to discuss your goals with one of our skilled swim teachers.
                  This lets you set session goals and establish a time frame in
                  which you want to learn.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  I WOULD LIKE TO TALK TO MY CHILD’S INSTRUCTOR ABOUT HIS/HER
                  PROGRESS, WHEN IS A GOOD TIME?
                </Accordion.Header>
                <Accordion.Body>
                  Kids do better in school when parents are involved in their
                  academic lives. Attending back-to-school night at the start of
                  the school year is a great way to get to know your child's
                  teachers and their expectations. School administrators may
                  discuss school-wide programs and policies, too.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default FAQ;