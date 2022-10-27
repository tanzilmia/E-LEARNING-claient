import React from "react";
import Container from "react-bootstrap/Container";
import './Blog.css';
const Blog = () => {
  return (
    <Container className="blog_container my-4">
      <div>
        <h3>what is cors?</h3>
        <p>
          Answer:CORS stands for cross-origin resource sharing. Just like HTTPS,
          it's a protocol that defines some rules for sharing resources from a
          different origin. We know that modern web apps consist of two key
          components: a client and a server. The client requests some data from
          the server, and the server sends back data as a response. That means
          In ReactJS, CORS refers to the method that allows you to make requests
          to the server deployed at a different domain. As a reference, if the
          frontend and backend are at two different domains, we need CORS there.
        </p>
      </div>
      <div>
        <h3>
          {" "}
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Answer:We use firebase for ssome benefits.For examples- 1.Reliable &
          Extensive Databases 2.Fast & Safe Hosting 3.Provides A Free Start to
          Newbies 4.Google Analytics 5.Firebase Cloud Messaging for
          Cross-Platform 6.Free Multi-Platform Firebase Authentication etc
          Auth0, MongoDB, Passport, Okta etc are the most other popular
          alternatives and competitors to Firebase Authentication.
        </p>
      </div>

      <div>
        <h3>How does the private route work?</h3>
        <p>
          Answer:The Private Route component is used to protect selected pages
          in a React app from unauthenticated users. PrivateRoute component will
          simply check the current user state from the user,destructed from
          useContext hook. The PrivateRoute component renders child components
          if the user is loged in.Then the user is redirected to the login page
          with return url paged in the Navigate component.
        </p>
      </div>
      <div>
        <h3>What is Node? How does Node work?</h3>
        <p>
          Answer: Node allows developers to write JavaScript code that runs
          directly in a computer process itself instead of in a browser. It is a
          used as backend service where javascript works on the server-side of
          the application. This way javascript is used on both frontend and
          backend. Node. js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive.
        </p>
      </div>
    </Container>
  );
};

export default Blog;
