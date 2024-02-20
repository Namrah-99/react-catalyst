import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthcontext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
