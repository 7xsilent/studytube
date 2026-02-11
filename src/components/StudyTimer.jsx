import { useEffect, useState } from "react";
import { useStudy } from "../context/StudyContext";

export default function StudyTimer() {
  const { isStudying } = useStudy();
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (!isStudying) {
      setMinutes(0);
      return;
    }

    const interval = setInterval(() => {
      setMinutes((prev) => prev + 1);
    }, 60000); // 1 minute

    return () => clearInterval(interval);
  }, [isStudying]);

  if (!isStudying) return null;

  return (
    <div className="study-timer">
      You’ve been studying for <strong>{minutes}</strong> minute
      {minutes === 1 ? "" : "s"}
    </div>
  );
}
