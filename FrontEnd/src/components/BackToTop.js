import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#scroll-container"
      className={`back-to-top ${visible ? "show" : ""}`}
      aria-label="Voltar ao topo"
    >
      <i className="bi bi-arrow-bar-up"></i>
      <div className="water-fill"></div>
    </a>
  );
}
