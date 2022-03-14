import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";

test("Deve testar a conexao com o banco de dados", async () => {
  const connection = new PostgreSQLConnectionAdapter();
  const items = await connection.query("select * from ccca.item", []);
  expect(items).toHaveLength(3);
  await connection.close();
});
