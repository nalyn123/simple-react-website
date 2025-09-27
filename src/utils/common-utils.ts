import { store } from "@store/store";
import { jwtVerify, SignJWT } from "jose";
import { login } from "@utils/enum";

export class CommonUtils {
  private static _secret = new TextEncoder().encode("jwt-secret");

  static checkAuth = (auth: boolean | undefined) => {
    const isAuthenticated = Object.keys(
      store.getState().user.auth ?? {}
    ).length;

    return (!isAuthenticated && auth) || (isAuthenticated && auth === false);
  };
  static maskEmail = (email: string) => {
    const arr = email.split("@");
    const em = arr[0].substring(0, 3);
    return `${em}***@${arr[1]}`;
  };

  static setToken = async (data: any) => {
    const token = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(this._secret);

    localStorage.setItem(login.TOKEN, token);

    return token;
  };

  static getDataFromToken = async () => {
    try {
      const token = localStorage.getItem(login.TOKEN) || "";
      const { payload } = await jwtVerify(token, this._secret);
      return payload ?? {};
    } catch (error) {
      throw Error("getDataFromToken Error");
    }
  };
}
