import type {Command} from '../types/Command';
import {pony} from './pony';
import {help} from './help';
import {pony621} from './ponyE621';

export const commandList: Command[] = [pony, help, pony621];
