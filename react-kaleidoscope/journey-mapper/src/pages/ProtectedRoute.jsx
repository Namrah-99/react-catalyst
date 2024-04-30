import { useAuth } from "../contexts/FakeAuthcontext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Access authentication state

  // Conditional rendering based on authentication
  if (!isAuthenticated) {
    navigate("/login"); // Navigate to login if not authenticated
    return null;
  }

  return children; // Render children if authenticated
}

export default ProtectedRoute;
