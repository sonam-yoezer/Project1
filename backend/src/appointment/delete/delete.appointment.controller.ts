import { Controller, Delete, HttpCode, HttpException, HttpStatus, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";

@ApiTags('de')              
@Controller('appointment')
export class DeleteAppointmentController {
    constructor (private readonly prismaService: PrismaService){}

    @Delete(':id')
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description: '',
    })

    @ApiOperation({ operationId: 'deleteAppointment'})
    @HttpCode(204)

    async execute(@Param('id') id:  string): Promise<void>  {
        const result = await this.prismaService.appointment.findUnique({
            where: { id: id },
        });

        if (!result) throw new HttpException('Customer Not Found', HttpStatus.NOT_FOUND);
        await this.prismaService.appointment.delete({ where: { id: id } });
    }
}                                                                                                                       