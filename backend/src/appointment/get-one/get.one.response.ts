import { IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetOneAppointmentResponse {
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