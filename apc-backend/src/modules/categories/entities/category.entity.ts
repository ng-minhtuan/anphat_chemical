import {
  Entity,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '@common/entities';
import { Product } from '@modules/products/entities/product.entity';

/**
 * Category Entity
 *
 * @description
 * Lưu trữ danh mục sản phẩm (cấu trúc cây)
 *
 * @table categories
 */
@Entity('categories')
@Index(['parentId'])
@Index(['urlSlug'], { unique: true })
@Index(['status'])
export class Category extends BaseEntity {
  /**
   * Tên danh mục
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  /**
   * ID danh mục cha (NULL nếu là danh mục gốc)
   */
  @Column({
    name: 'parent_id',
    type: 'int',
    nullable: true,
  })
  parentId: number | null;

  /**
   * Quan hệ với Category (parent)
   */
  @ManyToOne(() => Category, (category) => category.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'parent_id' })
  parent: Category | null;

  /**
   * Quan hệ với Category (children)
   */
  @OneToMany(() => Category, (category) => category.parent)
  children: Category[];

  /**
   * Mô tả danh mục
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | null;

  /**
   * Thứ tự hiển thị (số nhỏ hơn hiển thị trước)
   */
  @Column({
    name: 'display_order',
    type: 'int',
    default: 0,
  })
  displayOrder: number;

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
   * Quan hệ với Product
   */
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
