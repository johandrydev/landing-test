/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = (info?: boolean) => {
  const user = getLoggedInUser();
  if (!user || !user?.data) {
    return (info) ? {
      isAutenticated: false,
      data: null
    } : false;
  }
  return (info) ? user : true;
};

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
  const user = localStorage.getItem('user');
  return user ? (JSON.parse(user)) : null;
};

export { isUserAuthenticated, getLoggedInUser };
