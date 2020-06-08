module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'cities',
      [
        {
          name: 'Belo Horizonte',
          state_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Uberlândia',
          state_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Uberaba',
          state_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'São Paulo',
          state_id: 26,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Campinas',
          state_id: 26,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rio de Janeiro',
          state_id: 19,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Angra dos Reis',
          state_id: 19,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Goiânia',
          state_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Caldas Novas',
          state_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
