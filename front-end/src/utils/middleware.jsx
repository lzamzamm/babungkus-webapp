// utils.js

export const checkUserRole = (roles) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.role) {
      return roles.includes(userInfo.role);
    }
    return false; // Return false jika userInfo atau userInfo.role tidak ada
  };
  