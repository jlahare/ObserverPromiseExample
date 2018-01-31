import { Pojo } from "./Pojo";

export class SubPojo extends Pojo
{
    country: string;

    constructor(name , detail , country)
    {
        super(name , detail);
        this.country = country;
    }

    setCountry(c)
    {
        this.country = c;
    }

    get(): string
    {
        return super.get() + " , " + this.country;
    }
    
}