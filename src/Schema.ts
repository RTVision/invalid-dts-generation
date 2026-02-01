import type { FromSchema } from 'json-schema-to-ts';

const userSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
  },
  required: ['name'],
} as const;

export type User = FromSchema<typeof userSchema>;

export function createUser(data: User): User {
  return data;
}
