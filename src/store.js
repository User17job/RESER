import { create } from "zustand";

const useStore = create((set) => ({
	reservations: [],
	addReservation: (hotel, dates) =>
		set((state) => ({
			reservations: [...state.reservations, { hotel, dates }],
		})),
	addReservatio: (carro, dates) =>
		set((state) => ({
			reservations: [...state.reservations, { carro, dates }],
		})),
}));

export default useStore;