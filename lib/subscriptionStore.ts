import { HOME_SUBSCRIPTIONS } from "@/constants/data";
import { create } from "zustand";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { createJSONStorage, persist } from "zustand/middleware";

interface SubscriptionStore {
  subscriptions: Subscription[];
  addSubscription: (subscription: Subscription) => void;
  setSubscriptions: (subscriptions: Subscription[]) => void;
}

interface SubscriptionStore {
  subscriptions: Subscription[];
  addSubscription: (subscription: Subscription) => void;
  setSubscriptions: (subscriptions: Subscription[]) => void;
}

export const useSubscriptionStore = create<SubscriptionStore>()(
  persist(
    (set) => ({
      subscriptions: HOME_SUBSCRIPTIONS,
      addSubscription: (subscription) =>
        set((state) => ({
          subscriptions: [subscription, ...state.subscriptions],
        })),
      setSubscriptions: (subscriptions) => set({ subscriptions }),
    }),
    {
      name: "subscription-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
