import { Body, Controller, HttpCode, HttpStatus, Param, Patch, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { UpdateAppointmentRequest } from "./update.appointment.request";

@Controller('appointment')
export class UpdateAppointmentController {
    constructor(private readonly prismaService: PrismaService) {}

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ operationId: 'updateAppointment' })
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async execute(@Param('id') id: string, @Body() request: UpdateAppointmentRequest): Promise<void> {
        await this.prismaService.appointment.update({
            where: {
                id: id,
            },      
            data: {
                name: request.name,
                email: request.email,
                num: request.num,
                appd: request.appd,
                sdepartment: request.sdepartment,  
                doctor: request.doctor,
            },
        });  
    } 
}

