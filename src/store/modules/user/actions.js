export function userSignIn(user) {
  return {
    type: '@user/SIGN_IN',
    payload: { user },
  };
}

export function userSignOut() {
  return {
    type: '@user/SIGN_OUT',
  };
}
