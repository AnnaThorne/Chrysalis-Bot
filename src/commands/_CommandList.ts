import {ICommand} from "../interfaces/Command";
import {pony} from "./pony";
import {help} from "./help";
import {pony621} from "./ponyE621";

export const CommandList: ICommand[] = [pony, help, pony621];
