module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'states',
      [
        {
          name: 'Acre',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Alagoas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Amazonas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Amapá',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bahia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ceará',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Distrito Federal',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Espírito Santo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Goiás',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maranhão',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Minas Gerais',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mato Grosso do Sul',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mato Grosso',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pará',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Paraíba',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pernambuco',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Piauí',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Paraná',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rio de Janeiro',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rio Grande do Norte',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rondônia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Roraima',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rio Grande do Sul',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Santa Catarina',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sergipe',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'São Paulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tocantins',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
