import { Entity, Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '@common/entities';
import { Employee } from '@modules/employees/entities/employee.entity';

/**
 * FileUpload Entity
 *
 * @description
 * Lưu trữ metadata của các file đã upload
 *
 * @table file_uploads
 */
@Entity('file_uploads')
@Index(['entityType', 'entityId'])
@Index(['uploadedBy'])
@Index(['fileType'])
@Index(['createdAt'])
@Index(['entityType', 'entityId', 'displayOrder'])
@Index(['entityType', 'entityId', 'isMain'], { where: 'is_main = true' })
export class FileUpload extends BaseEntity {
  /**
   * Tên file gốc khi upload
   */
  @Column({
    name: 'original_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  originalName: string;

  /**
   * Tên file sau khi lưu (có thể đã rename)
   */
  @Column({
    name: 'file_name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  fileName: string;

  /**
   * Đường dẫn file (relative hoặc absolute)
   */
  @Column({
    name: 'file_path',
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  filePath: string;

  /**
   * Kích thước file (bytes)
   */
  @Column({
    name: 'file_size',
    type: 'bigint',
    nullable: false,
  })
  fileSize: number;

  /**
   * MIME type của file
   */
  @Column({
    name: 'mime_type',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  mimeType: string | null;

  /**
   * Loại file: 'IMAGE' hoặc 'VIDEO'
   */
  @Column({
    name: 'file_type',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  fileType: 'IMAGE' | 'VIDEO';

  /**
   * Loại entity liên kết: 'PRODUCT', 'NEWS', 'EMPLOYEE', 'AUTHOR'
   */
  @Column({
    name: 'entity_type',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  entityType: 'PRODUCT' | 'NEWS' | 'EMPLOYEE' | 'AUTHOR' | null;

  /**
   * ID của entity liên kết
   */
  @Column({
    name: 'entity_id',
    type: 'int',
    nullable: true,
  })
  entityId: number | null;

  /**
   * ID nhân viên upload file
   */
  @Column({
    name: 'uploaded_by',
    type: 'int',
    nullable: true,
  })
  uploadedById: number | null;

  /**
   * Quan hệ với Employee (uploaded_by)
   */
  @ManyToOne(() => Employee, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'uploaded_by' })
  uploadedBy: Employee | null;

  /**
   * Thứ tự hiển thị (cho gallery, 0-based)
   */
  @Column({
    name: 'display_order',
    type: 'int',
    default: 0,
  })
  displayOrder: number;

  /**
   * Đánh dấu ảnh chính (featured_image) hay ảnh gallery
   * true: ảnh chính, false: ảnh gallery
   */
  @Column({
    name: 'is_main',
    type: 'boolean',
    default: false,
  })
  isMain: boolean;
}
