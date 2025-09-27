export class CommonUtils {
  private static _navigate: any;

  static init(navigate: any) {
    this._navigate = navigate;
  }

  static navigate() {
    this._navigate(-1);
  }
}
