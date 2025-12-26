import { Entity, Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from '@modules/employees/entities/employee.entity';

/**
 * Setting Entity
 *
 * @description
 * Lưu trữ cài đặt hệ thống (key-value)
 *
 * @table settings
 * @note Không có soft delete (deleted_at) và created_at
 */
@Entity('settings')
@Index(['key'], { unique: true })
@Index(['groupName'])
export class Setting {
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
   * Key (unique)
   */
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
  })
  key: string;

  /**
   * Value (text)
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  value: string | null;

  /**
   * Loại dữ liệu: 'string', 'number', 'boolean', hoặc 'json'
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: 'string',
  })
  type: 'string' | 'number' | 'boolean' | 'json';

  /**
   * Mô tả
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | null;

  /**
   * Nhóm cài đặt: 'general', 'email', 'seo', etc.
   */
  @Column({
    name: 'group_name',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  groupName: string | null;

  /**
   * ID nhân viên cập nhật lần cuối
   */
  @Column({
    name: 'updated_by',
    type: 'int',
    nullable: true,
  })
  updatedById: number | null;

  /**
   * Quan hệ với Employee (updated_by)
   */
  @ManyToOne(() => Employee, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'updated_by' })
  updatedBy: Employee | null;

  /**
   * Thời gian cập nhật
   */
  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
