import { Entity, Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '@common/entities';
import { Category } from '@modules/categories/entities/category.entity';
import { FileUpload } from '@modules/files/entities/file-upload.entity';

/**
 * Product Entity
 *
 * @description
 * Lưu trữ thông tin sản phẩm
 *
 * @table products
 */
@Entity('products')
@Index(['categoryId'])
@Index(['urlSlug'], { unique: true })
@Index(['status'])
@Index(['featured'])
@Index(['price'])
@Index(['views'])
@Index(['featuredImageId'])
export class Product extends BaseEntity {
  /**
   * Mã sản phẩm (unique)
   */
  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  code: string;

  /**
   * Tên sản phẩm
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  /**
   * ID danh mục
   */
  @Column({
    name: 'category_id',
    type: 'int',
    nullable: false,
  })
  categoryId: number;

  /**
   * Quan hệ với Category
   */
  @ManyToOne(() => Category, (category) => category.products, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  /**
   * Mô tả ngắn
   */
  @Column({
    name: 'short_description',
    type: 'text',
    nullable: true,
  })
  shortDescription: string | null;

  /**
   * Mô tả chi tiết
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | null;

  /**
   * Giá gốc
   */
  @Column({
    type: 'decimal',
    precision: 15,
    scale: 2,
    nullable: false,
  })
  price: number;

  /**
   * Giá khuyến mãi
   */
  @Column({
    name: 'sale_price',
    type: 'decimal',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  salePrice: number | null;

  /**
   * ID ảnh đại diện (featured image)
   */
  @Column({
    name: 'featured_image_id',
    type: 'int',
    nullable: true,
  })
  featuredImageId: number | null;

  /**
   * Quan hệ với FileUpload (featured image)
   */
  @ManyToOne(() => FileUpload, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'featured_image_id' })
  featuredImage: FileUpload | null;

  /**
   * Thông số kỹ thuật (JSON object key-value pairs)
   * Image gallery được lấy từ file_uploads table với entity_type='product' và entity_id
   */
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  specifications: Record<string, any> | null;

  /**
   * Tags (phân cách bằng dấu phẩy)
   */
  @Column({
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  tags: string | null;

  /**
   * SEO title
   */
  @Column({
    name: 'seo_title',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  seoTitle: string | null;

  /**
   * SEO description
   */
  @Column({
    name: 'seo_description',
    type: 'text',
    nullable: true,
  })
  seoDescription: string | null;

  /**
   * URL slug (unique, dùng cho SEO-friendly URL)
   */
  @Column({
    name: 'url_slug',
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  urlSlug: string;

  /**
   * Trạng thái: 'VISIBLE' hoặc 'HIDDEN'
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: 'VISIBLE',
  })
  status: 'VISIBLE' | 'HIDDEN';

  /**
   * Sản phẩm nổi bật
   */
  @Column({
    type: 'boolean',
    default: false,
  })
  featured: boolean;

  /**
   * Số lượt xem (tự động tăng khi xem)
   */
  @Column({
    type: 'int',
    default: 0,
  })
  views: number;
}
