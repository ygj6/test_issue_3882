import { expose } from "comlink";

class AbcWorker {
  action() {
    return "123";
  }
}

expose(AbcWorker);
