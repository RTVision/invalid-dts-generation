import type { Sql } from 'postgres';
export class DbUpdate {
	admClient: Sql;

	constructor(admClient: Sql) {
		this.admClient = admClient;
	}

	async exec(strSQL: string) {
		// postgres.RowList<Record<string, unknown>[]>│
		// const result = await adm.execute(sql.raw(strSQL));
		// postgres.RowList<(postgres.Row & Iterable<postgres.Row>)[]>
		const result = await this.admClient.unsafe(strSQL);
		// logged as `Result(0) []` either way (empty for these commands, except for 'SHOW ...')
		// console.info({ sql: strSQL, result });
		return result;
	}
}
