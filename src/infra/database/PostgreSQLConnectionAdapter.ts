import Connection from "./Connection";
import pgp from "pg-promise";

export default class PostgreSQLConnectionAdapter implements Connection {
  connection: any;

  constructor() {
    this.connection = pgp()({
      database: "teste_abs",
      host: "servidor.jclan.com.br",
      port: 5432,
      user: "jclan",
      password: "jcuser",
    });
  }

  async close(): Promise<void> {
    this.connection.$pool.end();
  }

  query(stmt: string, params: any): Promise<any> {
    return this.connection.query(stmt, params);
  }
}
``;
