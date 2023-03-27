
import { Base } from '../base';
import { Cluster } from '../../types';


export class Clusters extends Base {

    createCluster(newCluster: Cluster): Promise<Cluster> {
        return this.request(`/dv`, {
            method: 'POST',
            body: JSON.stringify(newCluster),
            headers: {
                Authorization: `Bearer ${newCluster?.creator.config_signature}`,
            }
        });
    }

    getCluster(configHash: string): Promise<Cluster> {
        return this.request(`/dv/${configHash}`, {
            method: 'GET',
        });
    }
}
