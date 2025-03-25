/* eslint-disable no-unused-vars */
import { get, set, del, clear } from "idb-keyval";

const retryOperation = async (operation, key = null, value = null, retries = 3, delay = 100) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (error?.name === 'InvalidStateError') {
        console.warn(`Attempt ${attempt} failed due to InvalidStateError. Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  return null;
};

export default {
  set: async (key, value) => {
    await retryOperation(() => set(key, value), key, value);
  },

  get: async (key) => {
    return await retryOperation(() => get(key), key);
  },

  del: async (key) => {
    await retryOperation(() => del(key), key);
  },

  clr: async () => {
    await retryOperation(() => clear());
  }
};
