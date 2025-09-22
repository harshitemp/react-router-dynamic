import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const users = [
    { id: 1, name: "Harshitha" },
    { id: 2, name: "Vasu" },
    { id: 3, name: "Mahesh" },
    { id: 4, name: "Srujana" }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home Page</h1>
      <div style={styles.userList}>
        {users.map(user => (
          <Link key={user.id} to={`/user/${user.id}`} style={styles.card}>
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Inline styling
const styles = {
  container: {
    padding: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center"
  },
  title: {
    marginBottom: "30px",
    color: "#333",
    fontSize: "2rem"
  },
  userList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  card: {
    display: "block",
    padding: "20px 30px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, background-color 0.2s"
  }
};

// Add hover effect using JavaScript style
// React inline styles don’t directly support :hover, so use CSS class if needed
