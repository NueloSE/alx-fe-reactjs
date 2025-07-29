import { useEffect } from "react";
import useMessageStore from "../store/useMessageStore.js";

function Snackbar() {
  const store = useMessageStore((s) => s);

  useEffect(() => {
    setTimeout(() => {
        store.setMessage('');
        store.setMessageType('')
        console.log('clearing message')
    }, 3e3)
  }, [store.message, store.messageType])

  return (
    store.message && <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${
        store.messageType === "success" ? "bg-green-700" : "bg-red-700"
      } bg-opacity-70 p-4 rounded text-white`}
    >
      <p>{store.message}</p>
    </div>
  );
}

export default Snackbar;
