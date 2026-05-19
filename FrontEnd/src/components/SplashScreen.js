import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Howl } from "howler";

import minhaFoto from "../assets/Foto-Usuario.JPG";
import soundFx from "../assets/intro.mp3";

const text = "Bem-vindo ao meu portfólio";

export default function SplashScreen({ onFinish }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const sound = new Howl({
      src: [soundFx],
      volume: 0.4,
    });

    sound.play();

    const tl = gsap.timeline();

    // TEXTO
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 100,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.6,
        ease: "power4.out",
      },
    );

    // IMAGEM
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.5,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 2.1,
        ease: "power4.out",
      },
      "-=1.2",
    );

    // LOADING BAR
    tl.to(progressRef.current, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
    });

    // SAÍDA
    setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power4.inOut",
        onComplete: () => {
          setShow(false);
          onFinish();
        },
      });
    }, 2900);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            overflow: "hidden",

            background: "radial-gradient(circle at center, #111 0%, #000 70%)",
          }}
        >
          {/* BLUR GLOW */}
          <div
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "var(--primary-color)",
              filter: "blur(120px)",
              animation: "pulse 6s infinite alternate",
            }}
          />

          {/* CONTAINER */}
          <div
            style={{
              position: "relative",
              zIndex: 10,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              flexWrap: "wrap",

              gap: "70px",

              width: "100%",
              maxWidth: "1300px",

              padding: "60px",

              borderRadius: "35px",

              background: "rgba(255,255,255,0.05)",

              backdropFilter: "blur(20px)",

              border: "1px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 0 80px rgba(255,255,255,0.5), inset 0 0 40px var(--second-color)",
            }}
          >
            {/* TEXTO */}
            <div
              style={{
                maxWidth: "750px",
              }}
            >
              <h1
                ref={textRef}
                style={{
                  color: "#fff",

                  fontSize: "clamp(3rem, 7vw, 6rem)",

                  fontWeight: "900",

                  lineHeight: "1.05",

                  letterSpacing: "-3px",

                  textShadow:
                    "0 0 25px var(--primary-color), 0 0 60px var(--second-color)",
                }}
              >
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.4,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>

              <p
                style={{
                  marginTop: "25px",

                  color: "rgba(255,255,255,0.65)",

                  fontSize: "1rem",

                  textTransform: "uppercase",

                  letterSpacing: "4px",
                }}
              >
                Desenvolvedor • Designer • Engenharia de Software
              </p>
            </div>

            {/* IMAGEM */}
            <div ref={imageRef}>
              <img
                src={minhaFoto}
                alt="Minha foto"
                style={{
                  width: "230px",
                  height: "230px",

                  borderRadius: "50%",

                  objectFit: "cover",

                  border: "2px solid var(--primary-color)",

                  boxShadow:
                    "0 0 40px var(--primary-color), 0 0 100px rgba(93, 87, 87, 0.25)",

                  transition: "0.5s ease",
                }}
              />
            </div>
          </div>

          {/* LOADING BAR */}
          <div
            style={{
              position: "absolute",

              bottom: "70px",

              width: "300px",
              height: "4px",

              background: "rgba(255,255,255,0.08)",

              borderRadius: "999px",

              overflow: "hidden",
            }}
          >
            <div
              ref={progressRef}
              style={{
                width: "0%",
                height: "100%",

                background:
                  "linear-gradient(90deg, var(--primary-color), var(--second-color))",

                boxShadow: "0 0 25px var(--primary-color)",
              }}
            />
          </div>

          {/* ANIMAÇÃO CSS */}
          <style>
            {`
              @keyframes pulse {
                0% {
                  transform: scale(1);
                  opacity: 0.6;
                }

                100% {
                  transform: scale(1.2);
                  opacity: 1;
                }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
