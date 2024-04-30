import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  name: "Namrah",
  email: "namrah@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=cd",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      dispatch({ type: "login", payload: JSON.parse(userStorage) });
    }
  }, []);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
      // navigate("/app", { replace: true }); // Navigate to protected app route
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    // navigate("/", { replace: true }); // Navigate to home on logout
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
