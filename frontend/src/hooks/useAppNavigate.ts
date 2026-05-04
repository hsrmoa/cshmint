import { useNavigate } from 'react-router-dom';
import { COMMON_PATHS } from "@/routes/paths";

export const useAppNavigate = () => {
  const navigate = useNavigate()

  return {
    goLogin: () => navigate(COMMON_PATHS.LOGIN),
    goJoin: () => navigate(COMMON_PATHS.JOIN)
  }
};