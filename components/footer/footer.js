import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "./footer.css";

const output = `$ node created-by.js 
Jack Leslie
`;

export default () => (
  <div className={styles.footer}>
    <SyntaxHighlighter language="bash">{output}</SyntaxHighlighter>
  </div>
);
