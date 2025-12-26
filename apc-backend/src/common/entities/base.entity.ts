import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

/**
 * Base Entity với các trường common
 *
 * @description
 * Tất cả các entities sẽ extend từ BaseEntity để có các trường:
 * - id: Primary key tự động tăng
 * - created_at: Thời gian tạo (tự động set khi insert)
 * - updated_at: Thời gian cập nhật (tự động update khi update)
 * - deleted_at: Soft delete timestamp (NULL nếu chưa xóa)
 *
 * @example
 * ```typescript
 * @Entity('products')
 * export class Product extends BaseEntity {
 *   @Column()
 *   name: string;
 * }
 * ```
 */
export abstract class BaseEntity {
  /**
   * ID tự động tăng (Primary Key)
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Thời gian tạo bản ghi
   * Tự động set khi insert (DEFAULT CURRENT_TIMESTAMP)
   */
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  /**
   * Thời gian cập nhật bản ghi
   * Tự động update khi update (trigger trong DB)
   */
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  /**
   * Thời gian xóa bản ghi (Soft delete)
   * NULL nếu chưa xóa, có giá trị nếu đã xóa
   */
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date | null;
}
