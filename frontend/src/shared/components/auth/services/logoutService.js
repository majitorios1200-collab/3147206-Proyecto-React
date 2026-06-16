//frontend/src/shared/components/auth/services/logoutService.js
//Cerrar sesion eliminando JWT

export function logout() {
    sessionStorage.removeItem("token");
}