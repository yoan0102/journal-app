import journalApi from "@/api/journalApi";

// export const myAction = async ({commit}, payload) => {
// }

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");

  if (!data) return commit("setEntries", []);

  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, payload) => {
  const { id, ...resto } = payload;

  await journalApi.put(`/entries/${id}.json`, resto);

  commit("updateEntry", { ...payload });
};

export const createEntry = async ({ commit }, payload) => {
  const { data } = await journalApi.post(`/entries.json`, payload);
  const entry = {
    id: data.name,
    ...payload,
  };
  commit("addEntry", entry);
  return data.name;
};

export const deleteEntry = async ({ commit }, payload) => {
  await journalApi.delete(`/entries/${payload}.json`);
  commit("deleteEntry", payload);
  return payload;
};
