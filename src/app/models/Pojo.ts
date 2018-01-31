//import { Injectable } from '@angular/core';

//@Injectable()
export class Pojo
{
    name: string;
    detail: string;

    constructor(name: string , detail: string)
    {
            this.name = name;
            this.detail = detail;
    }

    setName(name)
    {
        this.name = name;
    }
    setDetail(detail: string)
    {
        this.detail = detail;
    }

    get(): string
    {
        return this.name + " , " + this.detail;
    }
}