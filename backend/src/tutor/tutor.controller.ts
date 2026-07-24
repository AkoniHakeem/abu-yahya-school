import { Controller, Get, Post, Body, UseGuards, Request, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TutorService } from './tutor.service';
import { CourseClass } from '../entities/course-class.entity';

@Controller('api/tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Get('dashboard')
  getDashboardStats() {
    return this.tutorService.getDashboardStats();
  }

  @Get('classes')
  getClasses() {
    return this.tutorService.getClasses();
  }

  @Get('assigned-classes')
  getAssignedClasses() {
    return this.tutorService.getAssignedClasses();
  }

  @Post('classes')
  createClass(@Body() classData: Partial<CourseClass>) {
    return this.tutorService.createClass(classData);
  }

  @Get('assignments')
  getAssignments() {
    return this.tutorService.getAssignments();
  }

  @Post('assignments/grade')
  gradeAssignment(@Body() body: { assignmentId: string; score: number; feedback: string }) {
    return this.tutorService.gradeAssignment(body.assignmentId, body.score, body.feedback);
  }

  @UseGuards(JwtAuthGuard)
  @Get('students')
  getStudents(@Request() req: any) {
    return this.tutorService.getStudents(req.user.sub);
  }

  @Get('earnings')
  getEarnings() {
    return this.tutorService.getEarnings();
  }

  @Get('community')
  getCommunityPosts() {
    return this.tutorService.getCommunityPosts();
  }

  @UseGuards(JwtAuthGuard)
  @Get('settings')
  getSettings(@Request() req: any) {
    return this.tutorService.getSettings(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put('settings')
  updateSettings(@Request() req: any, @Body() body: any) {
    return this.tutorService.updateSettings(req.user.sub, body);
  }
}
