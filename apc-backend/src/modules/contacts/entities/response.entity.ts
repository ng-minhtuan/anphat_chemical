import { Entity, Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { ContactRequest } from '@modules/contacts/entities/contact-request.entity';
import { Employee } from '@modules/employees/entities/employee.entity';

/**
 * Response Entity
 *
 * @description
 * Lưu trữ lịch sử phản hồi cho các yêu cầu liên hệ
 *
 * @table responses
 * @note Không có soft delete (deleted_at) vì đây là bảng log
 */
@Entity('responses')
@Index(['contactRequestId'])
@Index(['employeeId'])
export class Response {
  /**
   * ID tự động tăng (Primary Key)
   */
  @Column({
    type: 'int',
    primary: true,
    generated: true,
  })
  id: number;

  /**
   * ID yêu cầu liên hệ
   */
  @Column({
    name: 'contact_request_id',
    type: 'int',
    nullable: false,
  })
  contactRequestId: number;

  /**
   * Quan hệ với ContactRequest
   */
  @ManyToOne(() => ContactRequest, (contact) => contact.responses, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'contact_request_id' })
  contactRequest: ContactRequest;

  /**
   * ID nhân viên phản hồi
   */
  @Column({
    name: 'employee_id',
    type: 'int',
    nullable: false,
  })
  employeeId: number;

  /**
   * Quan hệ với Employee
   */
  @ManyToOne(() => Employee, (employee) => employee.responses, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  /**
   * Nội dung phản hồi
   */
  @Column({
    type: 'text',
    nullable: false,
  })
  content: string;

  /**
   * Thời gian tạo phản hồi
   */
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
