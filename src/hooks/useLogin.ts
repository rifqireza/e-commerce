import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/auth";
import {
  type LoginResponse,
  type SuccessResponse,
  type LoginRequest,
  type ErrorResponse,
} from "../types";
import api from "../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const response = await api.post<SuccessResponse<LoginResponse>>(
        "/api/login",
        credentials,
      );
      return response.data;
    },
    onSuccess: (response) => {
      setAuth(response.content);
      toast.success("Login berhasil!");
    },
    onError: (error: ErrorResponse) => {
      if (error.response?.data?.errors) {
        toast.error(error.response.data.message || "Login gagal");
      }
    },
  });
};
