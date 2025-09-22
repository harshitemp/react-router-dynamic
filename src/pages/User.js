import { useParams, Link } from "react-router-dom";
import "./User.css";

export default function User() {
  const { id } = useParams(); // Get dynamic route parameter

  const users = {
    1: { name: "Harshitha", email: "harshi@example.com" },
    2: { name: "Vasu", email: "vasu@example.com" },
    3: { name: "Mahesh", email: "mahesh@example.com" },
    4: { name: "Srujana", email: "srujana@example.com" }
  };

  const user = users[id];

  if (!user)
    return (
      <div style={styles.container}>
        <h2>User not found!</h2>
        <Link to="/" style={styles.backLink}>Go Back</Link>
      </div>
    );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>User Details</h1>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <Link to="/" style={styles.backLink}>Back to Home</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9"
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    minWidth: "300px"
  },
  title: {
    marginBottom: "20px",
    color: "#333"
  },
  backLink: {
    marginTop: "20px",
    display: "inline-block",
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    borderRadius: "5px",
    transition: "background-color 0.2s",
  }
};
