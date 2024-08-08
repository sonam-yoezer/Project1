import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { CreateAppointmentRequest } from "./create.appointment.request";
import { CreateAppointmentResponse } from "./create.appointment.response";


@ApiTags('cu')
@Controller('appointment')
    export class CreateAppointmentController{
        constructor (private readonly prismaservice: PrismaService){}
        
        @Post()  
        @ApiResponse({status: HttpStatus.OK, description:'', type:CreateAppointmentResponse})
        @ApiResponse({status: HttpStatus.NOT_FOUND, description:''})
        @ApiOperation({operationId: 'createAppointment'})
        @HttpCode(201)
        async execute (@Body() request: CreateAppointmentRequest): Promise<CreateAppointmentResponse>{
            const result = await this.prismaservice.appointment.create({
                data:{
                    name: request.name,
                    email: request.email,
                    num: request.num,
                    appd: request.appd,
                    sdepartment: request.sdepartment,
                    doctor: request.doctor
                },
            });
            return{
                id: result.id,
            }
        }

    }