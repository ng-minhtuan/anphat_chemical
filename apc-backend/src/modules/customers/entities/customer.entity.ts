import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '@common/entities';

/**
 * Customer Entity
 *
 * @description
 * Lưu trữ thông tin khách hàng (tự động tạo từ form liên hệ)
 *
 * @table customers
 */
@Entity('customers')
@Index(['email'], { unique: true })
@Index(['phone'])
@Index(['lastContactAt'])
export class Customer extends BaseEntity {
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
   * Email (unique)
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
    nullable: true,
  })
  phone: string | null;

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
   * Địa chỉ
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  address: string | null;

  /**
   * Số lần đã liên hệ
   */
  @Column({
    name: 'contact_count',
    type: 'int',
    default: 1,
  })
  contactCount: number;

  /**
   * Thời gian liên hệ gần nhất
   */
  @Column({
    name: 'last_contact_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastContactAt: Date;

  /**
   * Ghi chú
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  notes: string | null;
}
