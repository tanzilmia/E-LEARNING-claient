import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import './Faq.css'
const FAQ = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <Container>
      <div className ='faq_div'>
        {" "}
        <Button
          onClick={() => setOpen1(!open1)}
          aria-controls="example-collapse-text1"
          aria-expanded={open1}
          className = 'cusotome_btn'
        >
          what is parpas of this website
        </Button>
        <Collapse in={open1}>
          <div id="example-collapse-text1">
          Website logo. The logo section of the website will commonly be the space for identifying the website brand. While personal blogs and other non-brand-driven websites may only include the name of the website here, this spot is the first point of call for establishing a brand on the website. Header. The header is the top portion of the website, often containing the website logo as well as the main menu. The header is often a permanent fixture of the website, where the main content might scroll beneath it. Menu. Menus, often placed at an easy-to-reach place on the website, provide a way to navigate the website in an easy way. A main menu is often contained in the header, or on a collapsible pane (especially in mobile views of websites), and allows navigation through the pages of the website. Body. The body area of a website is the area of the website that contains the most content. There are a number of different kinds of content. Specific pages will contain specific content.
          </div>
        </Collapse>
      </div>

      <div className ='faq_div'>
        {" "}
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text1"
          aria-expanded={open}
        >
          what is work it
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text1">
          Work It is an American television sitcom that aired on ABC from January 3 to January 10, 2012. Set in St. Louis, the series is about two men who must dress as women in order to keep a job in a bad economy. The series had received overwhelmingly negative reviews.
          </div>
        </Collapse>
      </div>
      <div className ='faq_div'>
        {" "}
        <Button
          onClick={() => setOpen2(!open2)}
          aria-controls="example-collapse-text12"
          aria-expanded={open}
        >
          Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?
        </Button>
        <Collapse in={open2}>
          <div id="example-collapse-text12">
          Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed.
          </div>
        </Collapse>
      </div>
      <div className ='faq_div'>
        {" "}
        <Button
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text13"
          aria-expanded={open3}
        >
         How can we benefit from this?
        </Button>
        <Collapse in={open3}>
          <div id="example-collapse-text13">
          We can all benefit from a little white noise, whether it's the whir of crickets or airplanes overhead. The airline will undoubtedly benefit from the agreement, most particularly on that first hop of the
          </div>
        </Collapse>
      </div>

    </Container>
  );
};

export default FAQ;
