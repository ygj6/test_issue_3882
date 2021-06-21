import { wrap } from "comlink";
import AbcWorkerLoader from "./abcWorker?worker&inline";
const AbcWorker = wrap(AbcWorkerLoader());

export default class Abc {
  async action() {
    const abcWorker = await new AbcWorker();
    return abcWorker.action();
  }
}
