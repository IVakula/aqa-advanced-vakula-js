import { RestClient } from "../restClient/RestClient.js";

export class ObjectsAPI extends RestClient {
  constructor(baseUrl, configOverrides){
    super(baseUrl, configOverrides);
    this.headers = {};
    this.params = {};
    this.url = '/objects'
  }


  async getListOfAllObjects(){
    return this.sendGet({url: `${this.url}`});
  }

  async getListOfObjectsByIDs(ids) {
    const paramsArr = ids.map(id => `id=${id}`).join('&');
    const resp = await this.sendGet({url: `${this.url}?${paramsArr}`});
    return resp;
  }
  async getSingleObject(id) {
    const resp = await this.sendGet({url: `${this.url}/${id}`});
    return resp;
  }

  async addObject(payload) {
    return this.sendPost({url: `${this.url}`, data: payload});
  }

  async updateObject(id, payload) {
    return this.sendPut({url: `${this.url}/${id}`, data: payload});
  }

  async partitiallyUpdateObject(id, payload) {
    return this.sendPatcht({url: `${this.url}/${id}`, data: payload});
  }

  async deleteObject(id) {
    return await this.sendDelete({url: `${this.url}//${id}`});
  }

}