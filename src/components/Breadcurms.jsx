import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  const styles = {
    container: {
      display: "flex",
      //   justifyContent: "left",
      gap: "5px",
      fontSize: "14px",
      marginBottom: "10px",
      marginLeft: "50px",
    },

    link: {
      color: "goldenrod",
      textDecoration: "none",
    },

    current: {
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.link}>
        Home
      </Link>
      <span>/</span>
      <span style={styles.current}>{title}</span>
    </div>
  );
};

export default Breadcrumb;
