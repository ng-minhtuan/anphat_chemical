import {
  Entity,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '@common/entities';
import { FileUpload } from '@modules/files/entities/file-upload.entity';
import { ContactRequest } from '@modules/contacts/entities/contact-request.entity';
import { Response } from '@modules/contacts/entities/response.entity';
import { ActivityLog } from '@modules/activity-logs/entities/activity-log.entity';

/**
 * Employee Entity
 *
 * @description
 * Lưu trữ thông tin nhân viên và tài khoản đăng nhập
 *
 * @table employees
 */
@Entity('employees')
@Index(['email'], { unique: true })
@Index(['username'], { unique: true })
@Index(['status'])
export class Employee extends BaseEntity {
  /**
   * Mã nhân viên (unique, có thể tự động generate)
   */
  @Column({
    name: 'employee_code',
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  employeeCode: string;

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
   * Email (unique, required)
   */
  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
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
   * Username để đăng nhập (unique, required)
   */
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
  })
  username: string;

  /**
   * Password đã được hash (bcrypt)
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    select: false, // Không select password mặc định
  })
  password: string;

  /**
   * Vai trò: 'ADMIN' hoặc 'EMPLOYEE'
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: 'EMPLOYEE',
  })
  role: 'ADMIN' | 'EMPLOYEE';

  /**
   * Avatar (foreign key to file_uploads)
   */
  @Column({
    name: 'avatar_id',
    type: 'int',
    nullable: true,
  })
  avatarId: number | null;

  /**
   * Quan hệ với FileUpload (avatar)
   */
  @ManyToOne(() => FileUpload, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'avatar_id' })
  avatar: FileUpload | null;

  /**
   * Địa chỉ
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  address: string | null;

  /**
   * Ngày sinh
   */
  @Column({
    name: 'date_of_birth',
    type: 'date',
    nullable: true,
  })
  dateOfBirth: Date | null;

  /**
   * Trạng thái: 'ACTIVE' hoặc 'LOCKED'
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: 'ACTIVE',
  })
  status: 'ACTIVE' | 'LOCKED';

  /**
   * Số lần đăng nhập thất bại liên tiếp
   */
  @Column({
    name: 'failed_login_attempts',
    type: 'int',
    default: 0,
  })
  failedLoginAttempts: number;

  /**
   * Thời gian khóa tài khoản (NULL nếu chưa bị khóa)
   */
  @Column({
    name: 'locked_until',
    type: 'timestamp',
    nullable: true,
  })
  lockedUntil: Date | null;

  /**
   * Thời gian đăng nhập cuối cùng
   */
  @Column({
    name: 'last_login',
    type: 'timestamp',
    nullable: true,
  })
  lastLogin: Date | null;

  /**
   * Quan hệ với ContactRequest (assigned_to)
   */
  @OneToMany(() => ContactRequest, (contact) => contact.assignedTo)
  assignedContacts: ContactRequest[];

  /**
   * Quan hệ với Response
   */
  @OneToMany(() => Response, (response) => response.employee)
  responses: Response[];

  /**
   * Quan hệ với ActivityLog
   */
  @OneToMany(() => ActivityLog, (log) => log.employee)
  activityLogs: ActivityLog[];
}
