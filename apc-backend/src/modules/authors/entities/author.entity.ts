import {
  Entity,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '@common/entities';
import { FileUpload } from '@modules/files/entities/file-upload.entity';
import { News } from '@modules/news/entities/news.entity';

/**
 * Author Entity
 *
 * @description
 * Lưu trữ thông tin tác giả cho các bài viết tin tức
 *
 * @table authors
 */
@Entity('authors')
@Index(['email'])
@Index(['name'])
@Index(['avatarId'])
export class Author extends BaseEntity {
  /**
   * Tên đầy đủ của tác giả (required)
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  /**
   * Email tác giả (optional)
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  email: string | null;

  /**
   * Chức danh / vai trò (optional)
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  role: string | null;

  /**
   * Tổ chức / đơn vị đang làm việc (optional)
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  organization: string | null;

  /**
   * Tiểu sử tác giả (optional)
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  bio: string | null;

  /**
   * Avatar (foreign key to file_uploads)
   */
  @Column({
    name: 'avatar_id',
    type: 'int',
    nullable: true,
  })
  avatarId: number | null;

  /**
   * Quan hệ với FileUpload (avatar)
   */
  @ManyToOne(() => FileUpload, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'avatar_id' })
  avatar: FileUpload | null;

  /**
   * Quan hệ với News
   */
  @OneToMany(() => News, (news) => news.author)
  news: News[];
}
