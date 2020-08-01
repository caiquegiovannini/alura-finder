import api from '../services/api';

function getAll() {
  return fetch(`${api.URL_BASE}`)
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();

        return data;
      }

      throw new Error('Não foi possível encontrar os cursos :(');
    });
}

export default {
  getAll,
};
