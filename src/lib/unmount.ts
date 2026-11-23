import { useEffect, useRef } from "react";


export function useUnmountSignal(): AbortSignal {
  const controllerRef = useRef<AbortController | null>(null);

  if (!controllerRef.current || controllerRef.current.signal.aborted) {
    controllerRef.current = new AbortController();
  }

  const controller = controllerRef.current;

  useEffect(() => {
    return () => {
      console.log('unmounting')
      controller.abort("Component unmounted");
    };
  }, [controller]);

  return controller.signal;
}
