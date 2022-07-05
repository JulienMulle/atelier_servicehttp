import { Attack } from "./Attack";
import { Resistance } from "./Resistance";
import { Set } from "./Set";
import { Weakness } from "./Weakness";

export interface Pokemon {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    attacks: Attack[];
    weaknesses: Weakness[];
    resistances: Resistance[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: Set;
    number: string;
    artist: string;
    rarity: string;
    nationalPokedexNumbers: number[];

}
