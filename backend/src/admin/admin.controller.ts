import { Controller, Get, Post, Body, UseGuards, Request, Put, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminService } from './admin.service';
import { User } from '../entities/user.entity';
import { CourseClass } from '../entities/course-class.entity';
import { Course } from '../entities/course.entity';
import { Enrollment } from '../entities/enrollment.entity';

@Controller('api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  getDashboardStats() {
    return this.adminService.getDashboardStats();
  }

  @Get('users')
  getUsers() {
    return this.adminService.getUsers();
  }

  @Post('users')
  createUser(@Body() userData: Partial<User>) {
    return this.adminService.createUser(userData);
  }

  @Put('users/:id')
  updateUser(@Param('id') id: string, @Body() userData: Partial<User>) {
    return this.adminService.updateUser(id, userData);
  }


  @Get('classes')
  getClasses() {
    return this.adminService.getClasses();
  }

  @Post('classes')
  createClass(@Body() classData: Partial<CourseClass>) {
    return this.adminService.createClass(classData);
  }

  @Put('classes/:id')
  updateClass(@Param('id') id: string, @Body() classData: Partial<CourseClass>) {
    return this.adminService.updateClass(id, classData);
  }

  @Get('courses')
  getCourses() {
    return this.adminService.getCourses();
  }

  @Post('courses')
  createCourse(@Body() courseData: any) {
    return this.adminService.createCourse(courseData);
  }

  @Get('enrollments')
  getEnrollments() {
    return this.adminService.getEnrollments();
  }

  @Post('enrollments')
  createEnrollment(@Body() enrollmentData: any) {
    return this.adminService.createEnrollment(enrollmentData);
  }


  @Get('financials')
  getFinancials() {
    return this.adminService.getFinancials();
  }

  @Get('reports')
  getReports() {
    return this.adminService.getReports();
  }

  @Get('support')
  getSupportTickets() {
    return this.adminService.getSupportTickets();
  }

  @Post('support/resolve')
  resolveTicket(@Body('ticketId') ticketId: string) {
    return this.adminService.resolveTicket(ticketId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('settings')
  getSettings(@Request() req: any) {
    return this.adminService.getSettings(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put('settings')
  updateSettings(@Request() req: any, @Body() body: any) {
    return this.adminService.updateSettings(req.user.sub, body);
  }
}
