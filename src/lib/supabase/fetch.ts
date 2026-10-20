const REQUEST_TIMEOUT_MS = 5_000;

export function fetchWithTimeout(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const requestSignal =
    init?.signal ?? (input instanceof Request ? input.signal : undefined);
  const timeoutSignal = AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  const signal = requestSignal
    ? AbortSignal.any([requestSignal, timeoutSignal])
    : timeoutSignal;

  return fetch(input, { ...init, signal });
}
