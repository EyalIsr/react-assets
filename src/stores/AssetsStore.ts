import { observable, action, computed, runInAction } from "mobx";

export default class AssetsStore {
  @observable assets = [];
  @observable domains: string[] = [];
  @observable selectedDomainId?: string = undefined;
  @observable isFetchingDomains: boolean = false;

  @action
  async fetchDomains() {
    this.isFetchingDomains = true;
    // axios////

    const wait = new Promise(res => setTimeout(res, 3000));
    await wait;
    let counter = 1;
    setInterval(() => this.addDomain(`domain ${counter++}`), 1000);
    this.domains = ["first", "second"];
    runInAction(() => {
      this.domains.push("third");

      this.isFetchingDomains = false;
    });
  }

  @action
  addDomain(id: string): void {
    this.domains.push(id);
  }

  @computed
  get domainsCount() {
    return this.domains.length;
  }
}
