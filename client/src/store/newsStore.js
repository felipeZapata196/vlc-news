import create from 'zustand'



let newsStore = (set) => ({
  news: [],
  addNews: (post) =>
    set((state) => ({ news: [...state.news, post] })),
})




export const useNewsStore = create(newsStore)