import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { GetAppointment } from "./get.appointment.response";


@ApiTags('')
@Controller('appointment')
export class GetAppointmentController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    @ApiResponse ({ status: HttpStatus.OK, description: 'List of Customer', type: [GetAppointment] })
    @ApiResponse ({ status: HttpStatus.NOT_FOUND, description: 'No Customer Found'})
    @ApiOperation ({ operationId: 'getAppointment' })
    @HttpCode(200)

    async execute(): Promise <GetAppointment[]> {
        const result = await this.prismaService.appointment.findMany({});
        const response = result.map ((x) =>{
            return {
                id: x.id,
                name: x.name,
                email: x.email, 
                num: x.num,
                appd: x.appd,
                sdepartment: x.sdepartment,
                doctor: x.doctor,
            };
        });

        return response;
    }

}