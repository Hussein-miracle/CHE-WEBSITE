import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";


export const useCustomAnimate = (startAnim,endAnim) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  
  useEffect(() => {
      if (inView) {
        controls.start(startAnim);
      }
      if (!inView) {
        controls.start(endAnim);
      }
    }, [controls, inView,startAnim,endAnim]);
  

  return { ref };
}