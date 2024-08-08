import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { CreateAppointmentController } from './appointment/create/create.appointment.controller';
import { GetAppointmentController } from './appointment/get/get.appointment.controller';
import { UpdateAppointmentController } from './appointment/update/update.appointment.controller';
import { DeleteAppointmentController } from './appointment/delete/delete.appointment.controller';
import { GetOneAppointmentController } from './appointment/get-one/get.one.controller';



@Module({
  imports: [PrismaModule],
  controllers: [
    CreateAppointmentController,
    GetAppointmentController,
    UpdateAppointmentController,
    DeleteAppointmentController,
    GetOneAppointmentController,
   ],

  providers: [],
})
export class ApiModule {}
