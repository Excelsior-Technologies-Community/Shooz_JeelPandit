import React, { useEffect, useState } from "react";

const ANIMATION_DURATION = 350;

const ProfileModal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);

      // start animation after render
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);

      const timer = setTimeout(() => {
        setShow(false);
      }, ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: animate ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        transition: `background-color ${ANIMATION_DURATION}ms ease`,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "450px",
          padding: "30px",
          position: "relative",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(-60px)",
          transition: `all ${ANIMATION_DURATION}ms ease`,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#999",
          }}
          aria-label="Close profile modal"
        >
          ×
        </button>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#000",
            textAlign: "center",
          }}
        >
          Login
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          Please enter your e-mail and password:
        </p>

        <form>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              type="email"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Password
            </label>
            <input
              type="password"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px", textAlign: "right" }}>
            <a
              href="#"
              style={{
                fontSize: "13px",
                color: "grey",
                textDecoration: "none",
              }}
              onClick={(e) => e.preventDefault()}
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#b1444e",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "20px",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "black")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#b1444e")}
          >
            LOGIN
          </button>

          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "13px", color: "#666" }}>
              New customer?{" "}
            </span>
            <a
              href="#"
              style={{
                fontSize: "13px",
                color: "grey",
                textDecoration: "none",
              }}
              onClick={(e) => e.preventDefault()}
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
