import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

/**
 * Returns screen width
 */
const getScreenWidth = () => Dimensions.get('screen').width;

/**
 * A React Hook which updates when the orientation changes
 * @returns current screen width
 */
export function useScreenWidth(): number {
  const [width, setWidth] = useState(getScreenWidth());

  useEffect(() => {
    const callback = () => setWidth(getScreenWidth());
    const subs = Dimensions.addEventListener('change', callback);

    return () => {
      subs.remove();
    };
  }, []);

  return width;
}
