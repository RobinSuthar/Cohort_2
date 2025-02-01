import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenCountAtom = selector({
  key: "evenCountAtom",
  get: ({ get }) => {
    const x = get(countAtom);
    if (x % 2 == 0) {
      return x;
    }
  },
});
