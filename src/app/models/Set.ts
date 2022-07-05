import { Images } from "./Images";
import { Legalities } from "./Legalities";

export interface Set {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: Images;
}
