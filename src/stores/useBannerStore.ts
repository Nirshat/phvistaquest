import { create } from "zustand"


// pag ang array is naglalaman ng objects
type State = {
  banners: {
    place: string
    main: string
    photo: string
  }[]

  bg: string
}

type Action = {
  bgChanger: (banner:string) => void
}

const useBannerStore = create<State & Action>((set) => (
  {
    banners: [
      {
        place: 'Bicol',
        main:  'Mayon Volcano',
        photo: './assets/mayon-2.jpg',
      },
      {
        place: 'Bohol',
        main: 'Tarsier',
        photo: './assets/bohol-1.jpg',
      },
      {
        place: 'Palawan',
        main: 'Coron',
        photo: './assets/palawan-2.jpg',
      },
    ],
    bg : './assets/mayon-2.jpg',
    bgChanger: (banner) => set((state) => ({...state, bg: banner})),
  }
));

export default useBannerStore