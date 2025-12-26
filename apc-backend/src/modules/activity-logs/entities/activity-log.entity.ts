import { Entity, Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from '@modules/employees/entities/employee.entity';

/**
 * ActivityLog Entity
 *
 * @description
 * Lưu trữ lịch sử hoạt động của nhân viên
 *
 * @table activity_logs
 * @note Không có soft delete (deleted_at) vì đây là bảng log
 */
@Entity('activity_logs')
@Index(['employeeId'])
@Index(['entityType', 'entityId'])
@Index(['createdAt'])
@Index(['action'])
export class ActivityLog {
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
   * ID nhân viên
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
  @ManyToOne(() => Employee, (employee) => employee.activityLogs, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  /**
   * Hành động: 'create', 'update', 'delete', 'login', 'logout'
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  action: string;

  /**
   * Loại entity: 'product', 'news', 'employee', etc.
   */
  @Column({
    name: 'entity_type',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  entityType: string;

  /**
   * ID của entity
   */
  @Column({
    name: 'entity_id',
    type: 'int',
    nullable: true,
  })
  entityId: number | null;

  /**
   * Mô tả
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | null;

  /**
   * Giá trị cũ (JSON object)
   */
  @Column({
    name: 'old_values',
    type: 'jsonb',
    nullable: true,
  })
  oldValues: Record<string, any> | null;

  /**
   * Giá trị mới (JSON object)
   */
  @Column({
    name: 'new_values',
    type: 'jsonb',
    nullable: true,
  })
  newValues: Record<string, any> | null;

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
   * Thời gian tạo log
   */
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
