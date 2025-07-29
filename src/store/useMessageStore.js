import { create } from "zustand";

const useTaskStore = create((set) => ({
  message: "",
  messageType: "",
  setMessage: (message) => set({ message }),
  setMessageType: (messageType) => set({ messageType }),
}));

export default useTaskStore;
