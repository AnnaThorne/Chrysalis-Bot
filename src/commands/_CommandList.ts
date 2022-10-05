import {ICommand} from "../interfaces/Command";
import {pony} from "./pony";
import {help} from "./help";

export const CommandList: ICommand[] = [pony, help];
