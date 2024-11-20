import { toast } from "@zerodevx/svelte-toast";

export const success = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "skyblue",
    },
  });

export const warning = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "orange",
    },
  });

export const failure = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "red",
    },
  });
