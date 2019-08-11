import { useRef, useEffect, useState } from 'react';

/**
 * @returns {Array} Two elements: a ref to attach to the focusable element,
 *                  and a function that will set focus on the element after the
 *                  next render.
 */
export default function useFocusManagement() {
  const [shouldFocus, setShouldFocus] = useState(false);
  const ref = useRef(null);

  useEffect(
    () => {
      if (!shouldFocus) {
        return;
      }

      if (ref && ref.current && 'focus' in ref.current) {
        ref.current.focus();
      }

      setShouldFocus(false);
    },
    [
      shouldFocus,
      ref,
      setShouldFocus
    ]
  );

  return [ref, () => setShouldFocus(true)];
}
