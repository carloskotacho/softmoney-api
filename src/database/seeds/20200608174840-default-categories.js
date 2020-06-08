module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Desktop',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Web',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mobile',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Outros',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
