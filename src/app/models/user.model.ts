import { type Entity } from './entity-id.model';
export interface User extends Entity {
  name: string;
  coins: number;
  moves: Move[];
}
type Move = any;
