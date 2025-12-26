import { Entity, Column, Index, UpdateDateColumn } from 'typeorm';

/**
 * UrlRedirect Entity
 *
 * @description
 * Lưu trữ URL redirects khi slug của entity thay đổi
 *
 * @table url_redirects
 * @note Không có soft delete (deleted_at) và created_at từ BaseEntity
 */
@Entity('url_redirects')
@Index(['oldUrl'], { unique: true })
@Index(['entityType', 'entityId'])
export class UrlRedirect {
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
   * URL cũ (trước khi slug thay đổi)
   * Format: /{entity_type}/{old_slug}
   * Ví dụ: /products/san-pham-cu
   */
  @Column({
    name: 'old_url',
    type: 'varchar',
    length: 500,
    nullable: false,
    unique: true,
  })
  oldUrl: string;

  /**
   * URL mới (sau khi slug thay đổi)
   * Format: /{entity_type}/{new_slug}
   * Ví dụ: /products/san-pham-moi
   */
  @Column({
    name: 'new_url',
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  newUrl: string;

  /**
   * Loại entity: 'PRODUCT', 'NEWS', hoặc 'CATEGORY'
   */
  @Column({
    name: 'entity_type',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  entityType: 'PRODUCT' | 'NEWS' | 'CATEGORY';

  /**
   * ID của entity (để tham chiếu)
   */
  @Column({
    name: 'entity_id',
    type: 'int',
    nullable: true,
  })
  entityId: number | null;

  /**
   * Thời gian tạo redirect
   */
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  /**
   * Thời gian cập nhật redirect
   */
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
