import { Entity, Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from '@modules/employees/entities/employee.entity';

/**
 * SystemLog Entity
 *
 * @description
 * Lưu trữ system logs (errors, warnings, info, debug)
 *
 * @table system_logs
 * @note Không có soft delete (deleted_at) vì đây là bảng log
 */
@Entity('system_logs')
@Index(['level'])
@Index(['createdAt'])
@Index(['userId'])
export class SystemLog {
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
   * Mức độ log: 'ERROR', 'WARN', 'INFO', hoặc 'DEBUG'
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  level: 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';

  /**
   * Nội dung log
   */
  @Column({
    type: 'text',
    nullable: false,
  })
  message: string;

  /**
   * Context (JSON object)
   */
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  context: Record<string, any> | null;

  /**
   * ID nhân viên (user_id)
   */
  @Column({
    name: 'user_id',
    type: 'int',
    nullable: true,
  })
  userId: number | null;

  /**
   * Quan hệ với Employee (user_id)
   */
  @ManyToOne(() => Employee, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: Employee | null;

  /**
   * Địa chỉ IP
   */
  @Column({
    name: 'ip_address',
    type: 'varchar',
    length: 45,
    nullable: true,
  })
  ipAddress: string | null;

  /**
   * User agent
   */
  @Column({
    name: 'user_agent',
    type: 'text',
    nullable: true,
  })
  userAgent: string | null;

  /**
   * Thời gian tạo log
   */
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
