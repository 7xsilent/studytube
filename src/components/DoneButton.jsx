import { useStudy } from "../context/StudyContext";

export default function DoneButton() {
  const { endStudy } = useStudy();

  return (
    <div className="done-btn-wrapper">
      <button onClick={endStudy}>
        Done for Today
      </button>
    </div>
  );
}
