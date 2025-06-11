import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectToEducation() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/education", { replace: true });
  }, [navigate]);

  return null;
}

export default RedirectToEducation; 