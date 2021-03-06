// @flow

import {pagerank} from "../../analysis/pagerank";
import {defaultWeightsForAdapterSet} from "../weights/weights";
import {dynamicAdapterSet} from "../../plugins/demo/appAdapter";

export const COLUMNS = () => ["Description", "", "Cred"];

export async function example() {
  const adapters = await dynamicAdapterSet();
  const weightedTypes = defaultWeightsForAdapterSet(adapters.static());
  const graph = adapters.graph();
  const pnd = await pagerank(graph, (_unused_Edge) => ({
    toWeight: 1,
    froWeight: 1,
  }));

  return {adapters, pnd, weightedTypes};
}
