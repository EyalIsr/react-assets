import AssetsStore from "./AssetsStore";

export interface Stores {
  assets: AssetsStore;
}

export function createStores(): Stores {
  return {
    assets: new AssetsStore()
  };
}
