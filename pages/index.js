import React from "react";
import Head from "next/head";
import Link from "next/link";
import "./index.css";

export default () => {
  const examples = [
    {
      name: "Hello World",
      path: "hello-world"
    }
  ];

  return (
    <div>
      <Head>
        <title>Node.js by Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="column">
          <h1>Node.js by Example</h1>
          <p>
            <a href="https://nodejs.org">Node.js</a> is an open source{" "}
            <a href="https://developer.mozilla.org/docs/Web/JavaScript">
              JavaScript
            </a>{" "}
            runtime environment allowing the execution of JavaScript programs
            outside of the browser.
          </p>
          <p>
            <i>Node.js by Example</i> is a hands-on introduction to JavaScript
            with Node.js using annotated example programs. Check out the{" "}
            <Link href="hello-world">first example</Link> or browse the full
            list below.
          </p>
          <ul>
            {examples.map(example => (
              <li key={example.name}>
                <Link href={example.path}>{example.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
