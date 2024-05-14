import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = (isOpen) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardWillShow = useCallback(
    (e) => {
      if (!isOpen) return;
      setKeyboardHeight(e.endCoordinates.height);
      setKeyboardVisible(true);
    },
    [isOpen],
  );

  const onKeyboardWillHide = useCallback(() => {
    setKeyboardHeight(0);
    setKeyboardVisible(false);
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardWillShow",
      onKeyboardWillShow,
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardWillHide",
      onKeyboardWillHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [onKeyboardWillHide, onKeyboardWillShow]);

  return { keyboardVisible, keyboardHeight };
};
