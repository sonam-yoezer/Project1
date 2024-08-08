import { IsNotEmpty, IsString, IsOptional } from "@nestjs/class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentRequest{
    @ApiProperty()
    @IsNotEmpty()
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
    readonly appd: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly sdepartment: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly doctor: string;
}