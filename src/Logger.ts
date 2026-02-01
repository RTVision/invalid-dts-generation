import type { FastifyBaseLogger } from 'fastify';

export class AppLogger {
	constructor(private logger: FastifyBaseLogger) {}

	info(msg: string): void {
		this.logger.info(msg);
	}
}
