import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private _appointment: any;
    public get appointment(): any{
        return this._appointment;
    }

    public set appointment(value: any){
        this._appointment = value;
    }

     async onModuleInit() {
        await this.$connect();
    }
}