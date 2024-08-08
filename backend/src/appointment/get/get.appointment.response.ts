import { IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class GetAppointment{
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly id: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly email: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly num: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly address: string;
}