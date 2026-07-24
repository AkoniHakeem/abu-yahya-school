import { Controller, Get, Post, Body, Param, UseGuards, Request, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { StudentService } from './student.service';

@Controller('api/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UseGuards(JwtAuthGuard)
  @Get('dashboard')
  getDashboardStats(@Request() req: any) {
    return this.studentService.getDashboardStats(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('courses')
  getCourses(@Request() req: any) {
    return this.studentService.getCourses(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('schedule')
  getSchedule(@Request() req: any) {
    return this.studentService.getSchedule(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('assignments')
  getAssignments(@Request() req: any) {
    return this.studentService.getAssignments(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Post('assignments/submit')
  submitAssignment(@Request() req: any, @Body() body: { assignmentId: string; fileUrl?: string; comments?: string }) {
    return this.studentService.submitAssignment(req.user.sub, body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('assignments/:id/submit')
  submitAssignmentWithParam(
    @Request() req: any,
    @Param('id') id: string,
    @Body() body: { fileUrl?: string; comments?: string },
  ) {
    return this.studentService.submitAssignment(req.user.sub, { assignmentId: id, ...body });
  }

  @UseGuards(JwtAuthGuard)
  @Get('billing')
  getBilling(@Request() req: any) {
    return this.studentService.getBilling(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('community')
  getCommunity(@Request() req: any) {
    return this.studentService.getCommunity(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('messages')
  getMessages(@Request() req: any) {
    return this.studentService.getMessages(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('settings')
  getSettings(@Request() req: any) {
    return this.studentService.getSettings(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put('settings')
  updateSettings(@Request() req: any, @Body() body: any) {
    return this.studentService.updateSettings(req.user.sub, body);
  }
}
