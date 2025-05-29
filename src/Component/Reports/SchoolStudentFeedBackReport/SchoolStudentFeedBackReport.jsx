import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import NavBar from "../../NavBar/NavBar";
import "./SchoolStudentFeedBackReport.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FeedbackReport = () => {
  const [selectedStudent, setSelectedStudent] = useState("1");
  const [selectedYear, setSelectedYear] = useState("2082");

  // Dummy data for multiple students
  const dummyFeedbackData = {
    "1": [ // John Doe
      {
        month: 1,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Excellent",
        confidence_and_communication: "Good",
        classwork_completion: "Always",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 2,
        year: 2082,
        appearance: "Good",
        punctuality: "Excellent",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Average",
        classwork_completion: "Sometimes",
        group_work_participation: "Always",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "Late",
        parents_involvement: false,
        handwriting: "Excellent",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 3,
        year: 2082,
        appearance: "Average",
        punctuality: "Average",
        interaction_with_peers_and_teachers: "Needs Improvement",
        confidence_and_communication: "Good",
        classwork_completion: "Rarely",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Always",
        homework_submission: "Incomplete",
        parents_involvement: true,
        handwriting: "Average",
        maintenance_of_books_and_copies: "Needs Improvement",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Low",
      },
      {
        month: 4,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Excellent",
        confidence_and_communication: "Excellent",
        classwork_completion: "Always",
        group_work_participation: "Always",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 5,
        year: 2082,
        appearance: "Good",
        punctuality: "Needs Improvement",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Average",
        classwork_completion: "Sometimes",
        group_work_participation: "Rarely",
        listening_and_following_instructions: "Rarely",
        homework_submission: "Late",
        parents_involvement: false,
        handwriting: "Excellent",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 6,
        year: 2082,
        appearance: "Average",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Average",
        confidence_and_communication: "Good",
        classwork_completion: "Always",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Excellent",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 7,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Excellent",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Excellent",
        classwork_completion: "Sometimes",
        group_work_participation: "Always",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "Incomplete",
        parents_involvement: false,
        handwriting: "Average",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 8,
        year: 2082,
        appearance: "Good",
        punctuality: "Average",
        interaction_with_peers_and_teachers: "Needs Improvement",
        confidence_and_communication: "Average",
        classwork_completion: "Rarely",
        group_work_participation: "Rarely",
        listening_and_following_instructions: "Rarely",
        homework_submission: "Late",
        parents_involvement: true,
        handwriting: "Needs Improvement",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Low",
      },
      {
        month: 9,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Excellent",
        confidence_and_communication: "Good",
        classwork_completion: "Always",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 10,
        year: 2082,
        appearance: "Average",
        punctuality: "Needs Improvement",
        interaction_with_peers_and_teachers: "Average",
        confidence_and_communication: "Needs Improvement",
        classwork_completion: "Sometimes",
        group_work_participation: "Rarely",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "Incomplete",
        parents_involvement: false,
        handwriting: "Average",
        maintenance_of_books_and_copies: "Needs Improvement",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Low",
      },
      {
        month: 11,
        year: 2082,
        appearance: "Good",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Average",
        classwork_completion: "Always",
        group_work_participation: "Always",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Excellent",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 12,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Excellent",
        interaction_with_peers_and_teachers: "Excellent",
        confidence_and_communication: "Good",
        classwork_completion: "Sometimes",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Rarely",
        homework_submission: "Late",
        parents_involvement: false,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
    ],
    "2": [ // Jane Smith
      {
        month: 1,
        year: 2082,
        appearance: "Good",
        punctuality: "Excellent",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Excellent",
        classwork_completion: "Sometimes",
        group_work_participation: "Always",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "Late",
        parents_involvement: false,
        handwriting: "Excellent",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 2,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Excellent",
        confidence_and_communication: "Good",
        classwork_completion: "Always",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 3,
        year: 2082,
        appearance: "Average",
        punctuality: "Needs Improvement",
        interaction_with_peers_and_teachers: "Average",
        confidence_and_communication: "Average",
        classwork_completion: "Rarely",
        group_work_participation: "Rarely",
        listening_and_following_instructions: "Rarely",
        homework_submission: "Incomplete",
        parents_involvement: false,
        handwriting: "Needs Improvement",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Low",
      },
      {
        month: 4,
        year: 2082,
        appearance: "Good",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Average",
        classwork_completion: "Always",
        group_work_participation: "Always",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Excellent",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 5,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Excellent",
        interaction_with_peers_and_teachers: "Excellent",
        confidence_and_communication: "Good",
        classwork_completion: "Sometimes",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Rarely",
        homework_submission: "Late",
        parents_involvement: false,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 6,
        year: 2082,
        appearance: "Good",
        punctuality: "Average",
        interaction_with_peers_and_teachers: "Needs Improvement",
        confidence_and_communication: "Average",
        classwork_completion: "Rarely",
        group_work_participation: "Rarely",
        listening_and_following_instructions: "Rarely",
        homework_submission: "Incomplete",
        parents_involvement: true,
        handwriting: "Needs Improvement",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Low",
      },
      {
        month: 7,
        year: 2082,
        appearance: "Average",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Average",
        confidence_and_communication: "Good",
        classwork_completion: "Always",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Excellent",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 8,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Excellent",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Excellent",
        classwork_completion: "Sometimes",
        group_work_participation: "Always",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "Late",
        parents_involvement: false,
        handwriting: "Average",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 9,
        year: 2082,
        appearance: "Good",
        punctuality: "Needs Improvement",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Average",
        classwork_completion: "Sometimes",
        group_work_participation: "Rarely",
        listening_and_following_instructions: "Rarely",
        homework_submission: "Incomplete",
        parents_involvement: false,
        handwriting: "Excellent",
        maintenance_of_books_and_copies: "Average",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Moderate",
      },
      {
        month: 10,
        year: 2082,
        appearance: "Average",
        punctuality: "Average",
        interaction_with_peers_and_teachers: "Needs Improvement",
        confidence_and_communication: "Good",
        classwork_completion: "Rarely",
        group_work_participation: "Sometimes",
        listening_and_following_instructions: "Always",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Average",
        maintenance_of_books_and_copies: "Needs Improvement",
        involvement_in_school_activities: false,
        leadership_and_initiative: "Low",
      },
      {
        month: 11,
        year: 2082,
        appearance: "Excellent",
        punctuality: "Good",
        interaction_with_peers_and_teachers: "Excellent",
        confidence_and_communication: "Excellent",
        classwork_completion: "Always",
        group_work_participation: "Always",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "On time",
        parents_involvement: true,
        handwriting: "Good",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "High",
      },
      {
        month: 12,
        year: 2082,
        appearance: "Good",
        punctuality: "Excellent",
        interaction_with_peers_and_teachers: "Good",
        confidence_and_communication: "Average",
        classwork_completion: "Sometimes",
        group_work_participation: "Always",
        listening_and_following_instructions: "Sometimes",
        homework_submission: "Late",
        parents_involvement: false,
        handwriting: "Excellent",
        maintenance_of_books_and_copies: "Good",
        involvement_in_school_activities: true,
        leadership_and_initiative: "Moderate",
      },
    ],
  };

  // Get data for selected student
  const selectedFeedbackData = dummyFeedbackData[selectedStudent] || [];

  // Scoring functions for choice fields
  const scoreRating = (value) => {
    const scores = {
      Excellent: 4,
      Good: 3,
      Average: 2,
      "Needs Improvement": 1,
    };
    return scores[value] || 0;
  };

  const scoreFrequency = (value) => {
    const scores = { Always: 3, Sometimes: 2, Rarely: 1 };
    return scores[value] || 0;
  };

  const scoreHomework = (value) => {
    const scores = { "On time": 3, Late: 2, Incomplete: 1 };
    return scores[value] || 0;
  };

  const scoreLeadership = (value) => {
    const scores = { High: 3, Moderate: 2, Low: 1 };
    return scores[value] || 0;
  };

  // Chart labels (Nepali months)
  const labels = [
    "Baishakh",
    "Jestha",
    "Ashadh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ];

  // Chart datasets
  const groomingChartData = {
    labels,
    datasets: [
      {
        label: "Appearance",
        data: selectedFeedbackData.map((fb) => scoreRating(fb.appearance)),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: false,
      },
      {
        label: "Punctuality",
        data: selectedFeedbackData.map((fb) => scoreRating(fb.punctuality)),
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        fill: false,
      },
      {
        label: "Interaction with Peers & Teachers",
        data: selectedFeedbackData.map((fb) =>
          scoreRating(fb.interaction_with_peers_and_teachers)
        ),
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: false,
      },
      {
        label: "Confidence & Communication",
        data: selectedFeedbackData.map((fb) =>
          scoreRating(fb.confidence_and_communication)
        ),
        borderColor: "#FFEB3B",
        backgroundColor: "rgba(255, 235, 59, 0.2)",
        fill: false,
      },
    ],
  };

  const classTasksChartData = {
    labels,
    datasets: [
      {
        label: "Classwork Completion",
        data: selectedFeedbackData.map((fb) => scoreFrequency(fb.classwork_completion)),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: false,
      },
      {
        label: "Group Work Participation",
        data: selectedFeedbackData.map((fb) =>
          scoreFrequency(fb.group_work_participation)
        ),
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        fill: false,
      },
      {
        label: "Listening & Following Instructions",
        data: selectedFeedbackData.map((fb) =>
          scoreFrequency(fb.listening_and_following_instructions)
        ),
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: false,
      },
    ],
  };

  const homeworkChartData = {
    labels,
    datasets: [
      {
        label: "Homework Submission",
        data: selectedFeedbackData.map((fb) => scoreHomework(fb.homework_submission)),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: false,
      },
    ],
  };

  const skillsChartData = {
    labels,
    datasets: [
      {
        label: "Handwriting",
        data: selectedFeedbackData.map((fb) => scoreRating(fb.handwriting)),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: false,
      },
      {
        label: "Maintenance of Books & Copies",
        data: selectedFeedbackData.map((fb) =>
          scoreRating(fb.maintenance_of_books_and_copies)
        ),
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        fill: false,
      },
      {
        label: "Leadership & Initiative",
        data: selectedFeedbackData.map((fb) =>
          scoreLeadership(fb.leadership_and_initiative)
        ),
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: false,
      },
    ],
  };

  // Chart options with dark theme
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: "#ffffff" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          color: "#ffffff",
          stepSize: 1,
          callback: (value) => {
            const ratingLabels = ["", "Needs Improvement", "Average", "Good", "Excellent"];
            return ratingLabels[value] || value;
          },
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#ffffff" },
      },
      tooltip: {
        backgroundColor: "#2c2c2c",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const field = context.dataset.label;
            if (
              field === "Classwork Completion" ||
              field === "Group Work Participation" ||
              field === "Listening & Following Instructions"
            ) {
              return `${field}: ${["", "Rarely", "Sometimes", "Always"][value]}`;
            } else if (field === "Homework Submission") {
              return `${field}: ${["", "Incomplete", "Late", "On time"][value]}`;
            } else if (field === "Leadership & Initiative") {
              return `${field}: ${["", "Low", "Moderate", "High"][value]}`;
            }
            return `${field}: ${["", "Needs Improvement", "Average", "Good", "Excellent"][value]}`;
          },
        },
      },
    },
  };

  const homeworkChartOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        beginAtZero: true,
        max: 3,
        ticks: {
          color: "#ffffff",
          stepSize: 1,
          callback: (value) => ["", "Incomplete", "Late", "On time"][value] || value,
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  const classTasksChartOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        beginAtZero: true,
        max: 3,
        ticks: {
          color: "#ffffff",
          stepSize: 1,
          callback: (value) => ["", "Rarely", "Sometimes", "Always"][value] || value,
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  const skillsChartOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          color: "#ffffff",
          stepSize: 1,
          callback: (value) => {
            const labels = ["", "Needs Improvement/Low", "Average/Moderate", "Good", "Excellent/High"];
            return labels[value] || value;
          },
        },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  // Dummy students for selection
  const students = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
  ];

  // Years for selection
  const years = ["2082", "2083", "2084"];

  return (
    <div className="main-div">
      <NavBar />
      <div className="report-container">
        <h1 className="report-heading">Student Feedback Report</h1>
        <div className="report-filters">
          <div className="input-group">
            <label htmlFor="student" className="form-label">
              Student:
            </label>
            <select
              className="form-input"
              id="student"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">Select Student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="year" className="form-label">
              Year (B.S.):
            </label>
            <select
              className="form-input"
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="report-section">
          <h2 className="section-title">Grooming & Behaviour</h2>
          <div className="chart-container">
            <Line data={groomingChartData} options={chartOptions} />
          </div>
        </div>
        <div className="report-section">
          <h2 className="section-title">Class Tasks & Participation</h2>
          <div className="chart-container">
            <Line data={classTasksChartData} options={classTasksChartOptions} />
          </div>
        </div>
        <div className="report-section">
          <h2 className="section-title">Home Task</h2>
          <div className="chart-container">
            <Line data={homeworkChartData} options={homeworkChartOptions} />
          </div>
        </div>
        <div className="report-section">
          <h2 className="section-title">Extracurricular & Skills Development</h2>
          <div className="chart-container">
            <Line data={skillsChartData} options={skillsChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReport;