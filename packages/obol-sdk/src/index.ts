import { Base } from "./resources/base";
import { Clusters } from './resources/clusters';
import { applyMixins } from "./utils";

class Typicode extends Base {}
interface Typicode extends Clusters {}

applyMixins(Typicode, [Clusters]);

export default Typicode;