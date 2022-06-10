// export const myMutation= (state, payload) => {

// }

export const setEntries = async (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = async (state, payload) => {
  const idx = state.entries.map((e) => e.id).indexOf(payload.id);
  state.entries[idx] = payload;
};

export const addEntry = async (state, payload) => {
  state.entries.unshift(payload);
};

export const deleteEntry = (state, payload) => {
  state.entries = state.entries.filter((entry) => entry.id !== payload);
};
