import { useRouter } from "next/router";

const API_URL = "http://localhost:5000";

export default function Home() {
  const router = useRouter();

  const login = async () => {
    await fetch(`${API_URL}/login`, { method: "POST" });
    router.push("/dashboard");
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <button onClick={login}>
        Login (Mock Banking App)
      </button>
    </div>
  );
}
