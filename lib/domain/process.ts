/**
 * Process ("How I Work") — SHAPE ONLY.
 *
 * A process is an ordered set of steps. The specific steps are business content
 * that has not been provided, so none are invented here — the array is empty
 * and awaits definition (from spec or CMS). Step labels/descriptions will
 * resolve from the `process` message namespace by `key`.
 */
export interface ProcessStep {
  /** Stable key used for message lookups and ordering. */
  key: string;
  order: number;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [];
