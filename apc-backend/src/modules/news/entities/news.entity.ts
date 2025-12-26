import { Entity, Column, Index, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '@common/entities';
import { Author } from '@modules/authors/entities/author.entity';
import { FileUpload } from '@modules/files/entities/file-upload.entity';

/**
 * News Entity
 *
 * @description
 * Lưu trữ các bài viết tin tức/blog
 *
 * @table news
 */
@Entity('news')
@Index(['authorId'])
@Index(['urlSlug'], { unique: true })
@Index(['status'])
@Index(['featured'])
@Index(['publishedAt'])
@Index(['views'])
@Index(['featuredImageId'])
export class News extends BaseEntity {
  /**
   * Tiêu đề bài viết
   */
  @Column({
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  title: string;

  /**
   * Tóm tắt bài viết
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  summary: string | null;

  /**
   * Nội dung bài viết
   */
  @Column({
    type: 'text',
    nullable: false,
  })
  content: string;

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
   * ID tác giả
   */
  @Column({
    name: 'author_id',
    type: 'int',
    nullable: false,
  })
  authorId: number;

  /**
   * Quan hệ với Author
   */
  @ManyToOne(() => Author, (author) => author.news, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'author_id' })
  author: Author;

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
   * Trạng thái: 'DRAFT', 'PUBLISHED', hoặc 'HIDDEN'
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: 'DRAFT',
  })
  status: 'DRAFT' | 'PUBLISHED' | 'HIDDEN';

  /**
   * Bài viết nổi bật
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

  /**
   * Thời gian publish (NULL nếu chưa publish, có thể schedule)
   */
  @Column({
    name: 'published_at',
    type: 'timestamp',
    nullable: true,
  })
  publishedAt: Date | null;
}
