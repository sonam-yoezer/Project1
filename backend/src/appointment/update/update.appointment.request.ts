import { IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class UpdateAppointmentRequest {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly email: string;

    @ApiProperty()
    @IsString()
    readonly num: string;

    @ApiProperty()
    @IsString()
    readonly appd: string;
    
    @ApiProperty()
    @IsString()
    readonly sdepartment: string;

    @ApiProperty()
    @IsString()
    readonly doctor: string;
}