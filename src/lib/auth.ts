export function isAuthenticated() {
  // Burada gerçek token kontrolü yapılacak
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("token");
  }
  return false;
}

export function login(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
} 