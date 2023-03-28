
import { Base } from '../base';
import { Cluster } from '../../types';


export class Clusters extends Base {

    /**
     * @param cluster The new unique cluster
     * @returns The saved cluster from DB
    */
    createCluster(newCluster: Cluster, creatorConfigSignature: string): Promise<Cluster> {
        return this.request(`/dv`, {
            method: 'POST',
            body: JSON.stringify(newCluster),
            headers: {
                Authorization: `Bearer ${creatorConfigSignature}`,
                "fork-version": newCluster.fork_version,
            }
        });
    }

    // /**
    //  * @param configHash The config hash of the requested cluster
    //  * @returns The matched cluster from DB
    // */
    // getCluster(configHash: string): Promise<Cluster> {
    //     return this.request(`/dv/${configHash}`, {
    //         method: 'GET',
    //     });
    // }


    //To be used only in testing
    /**
     * @param configHash The config hash of the cluster to be deleted
     * @returns The deleted cluster data
    */
    deleteCluster(configHash: string): Promise<Cluster> {
        return this.request(`/dv/${configHash}`, {
            method: 'DELETE',
        });
    }
}
