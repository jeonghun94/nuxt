import { defineStore } from "pinia";

interface Tab {
  idx: number;
  title: string;
  subTitle: string;
}

const useTabMenuStore = defineStore("tabMenu", {
  state: (): { tabMenu: Tab[] } => ({
    tabMenu: [],
  }),
  actions: {
    addTab(title: string, subTitle: string) {
      if (
        this.tabMenu.length < 10 &&
        !this.tabMenu.some((item) => item.title === title)
      ) {
        this.tabMenu.push({
          idx: this.tabMenu.length + 1,
          title,
          subTitle,
        });
      }
    },

    removeTab(title: string) {
      this.tabMenu = this.tabMenu.filter((item) => item.title !== title);
    },
  },
  getters: {
    getTabMenu: (state) => state.tabMenu,
  },
  // persist: {
  //   enabled: true,
  // },
});

export default useTabMenuStore;
