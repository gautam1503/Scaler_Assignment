import MentorSelectPage from "./Pages/MentorSelect";
import StudentEvaluationPage from "./Pages/StudentEvaluation";
import StudentSelectPage from "./Pages/StudentSelect";
import StudentsViewPage from "./Pages/StudentsView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentorSelectPage />} />
        <Route path="/student-select" element={<StudentSelectPage />} />
        <Route path="/student-view" element={<StudentsViewPage />} />
        <Route path="/student-evaluate/:id" element={<StudentEvaluationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
