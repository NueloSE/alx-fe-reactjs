import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTask: (id) => set(function (state) {
    let newTasks = state.tasks.map((item) => {
        if (item.id == id) {
            item.completed = !item.completed
        }
        return item
    });


    return {
        tasks: newTasks
    }
  }),

  removeTask: (id) => set(function (state) {
   let newTasks =  state.tasks.filter((task) => task.id != id);

   return { tasks: newTasks }
  })
}));

export default useTaskStore;
