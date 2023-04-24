import $api from "@src/API/axios";

export default class MainService {
  static async testQueryWithParams(par1, par2) {
    try {
      return $api.get("/endpoint", {
        params: {
          par1,
          par2,
        },
      });
    } catch (e) {
      console.error(`EXCEPTION testQueryWithParams: ${e}`);
      throw e;
    }
  }
}
