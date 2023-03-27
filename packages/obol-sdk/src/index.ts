import { Clusters } from './resources/clusters';

export class Library {
  clusters: Clusters;

  constructor(config: {baseUrl?: string }) {
    this.clusters = new Clusters(config);
  }
}
