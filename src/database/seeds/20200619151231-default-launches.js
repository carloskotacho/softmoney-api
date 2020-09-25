module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'launches',
      [
        {
          description: 'E-commerce',
          due_date: '2020-09-10',
          pay_date: null,
          value: 650000,
          observation: 'Integração com pagar.me',
          type: 'RECEITA',
          category_id: 2,
          customer_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Portfólio',
          due_date: '2020-09-12',
          pay_date: null,
          value: 250000,
          observation: null,
          type: 'RECEITA',
          category_id: 2,
          customer_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'App de consulta médica em domicílio',
          due_date: '2020-09-10',
          pay_date: null,
          value: 885000,
          observation: null,
          type: 'RECEITA',
          category_id: 3,
          customer_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Protótipo de dashboard',
          due_date: '2020-07-14',
          pay_date: null,
          value: 235000,
          observation: null,
          type: 'RECEITA',
          category_id: 2,
          customer_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Controler de ponto',
          due_date: '2020-07-25',
          pay_date: null,
          value: 780000,
          observation: null,
          type: 'RECEITA',
          category_id: 1,
          customer_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Serviço AWS',
          due_date: '2020-07-25',
          pay_date: '2020-07-25',
          value: 200000,
          observation: null,
          type: 'DESPESA',
          category_id: 1,
          customer_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
