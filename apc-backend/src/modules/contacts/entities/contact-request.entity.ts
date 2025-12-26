import {
  Entity,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '@common/entities';
import { Employee } from '@modules/employees/entities/employee.entity';
import { Response } from '@modules/contacts/entities/response.entity';

/**
 * ContactRequest Entity
 *
 * @description
 * Lưu trữ các yêu cầu liên hệ từ khách hàng
 *
 * @table contact_requests
 */
@Entity('contact_requests')
@Index(['email'])
@Index(['phone'])
@Index(['status'])
@Index(['createdAt'])
export class ContactRequest extends BaseEntity {
  /**
   * Họ và tên đầy đủ
   */
  @Column({
    name: 'full_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  fullName: string;

  /**
   * Email
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  email: string;

  /**
   * Số điện thoại
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  phone: string;

  /**
   * Tên công ty
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  company: string | null;

  /**
   * Tiêu đề
   */
  @Column({
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  subject: string;

  /**
   * Nội dung tin nhắn
   */
  @Column({
    type: 'text',
    nullable: false,
  })
  message: string;

  /**
   * Trạng thái: 'NEW', 'PROCESSING', hoặc 'RESOLVED'
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: 'NEW',
  })
  status: 'NEW' | 'PROCESSING' | 'RESOLVED';

  /**
   * ID nhân viên được giao xử lý (NULL nếu chưa được giao)
   */
  @Column({
    name: 'assigned_to_id',
    type: 'int',
    nullable: true,
  })
  assignedToId: number | null;

  /**
   * Quan hệ với Employee (assigned_to)
   */
  @ManyToOne(() => Employee, (employee) => employee.assignedContacts, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'assigned_to_id' })
  assignedTo: Employee | null;

  /**
   * Thời gian bắt đầu xử lý
   */
  @Column({
    name: 'processed_at',
    type: 'timestamp',
    nullable: true,
  })
  processedAt: Date | null;

  /**
   * Quan hệ với Response
   */
  @OneToMany(() => Response, (response) => response.contactRequest)
  responses: Response[];
}
