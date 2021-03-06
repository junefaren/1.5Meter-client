export default function (state = { jwt: "", userId: 0 }, action = {}) {
  switch (action.type) {
    case "JWT":
      console.log("this is JWT", action.payload);
      return { jwt: action.payload.jwt, userId: action.payload.userId };
    case "LOGOUT":
      return { jwt: "", userId: 0 };
    default:
      return state;
  }
}
