import { writable, derived} from "svelte/store";
export let count = writable(0);
export const doubleCount = derived([count, otherProperty], ([c, o]) => c * 2);