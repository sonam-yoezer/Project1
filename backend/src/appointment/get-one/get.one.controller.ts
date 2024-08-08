import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { GetOneAppointmentResponse } from "./get.one.response";



@Controller('appointment')
export class GetOneAppointmentController {
    constructor (private readonly prismaService: PrismaService) {}

    @Get(':id')
    @ApiResponse({
        status: HttpStatus.OK,
        description:'',
    })

    @ApiOperation({ operationId: 'getAppointment' })
    @HttpCode(200)

    async execute(@Param('id') id: string): Promise<GetOneAppointmentResponse> {
        const result = await this.prismaService.appointment.findUnique({
            where: { id: id },
        });

        return {
            id: result.id,
            name: result.name,
            email: result.email,
            num: result.num,
            appd: result.address,
            sdepartment: result.sdepartment,
            doctor: result.doctor,
        } as GetOneAppointmentResponse;
    }
}