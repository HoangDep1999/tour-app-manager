import { DeepPartial, DeleteResult, FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseRepository<T extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<T>) {}

  async findOneByField(field: keyof T, value: any): Promise<T | null> {
    if (!value) return null;
    return await this.repository.findOne({
      where: { [field]: value } as FindOptionsWhere<T>,
      withDeleted: true,
    });
  }

  async findById(id: number): Promise<T | null> {
    return this.findOneByField('id' as keyof T, id);
  }

  // DeepPartial dùng cho save và create
  // Sự khác biệt giữa save và create đó chính là
  // Create sẽ tạo 1 object và sẽ không lưu vào DB
  // Save sẽ tạo 1 object và lưu vào DB
  async save(entity: DeepPartial<T>): Promise<T> {
    return this.repository.save(entity);
  }

  // QueryDeepPartialEntity dùng cho update, upsert
  // upsert là sự kết hợp giữa update và insert nghĩa là nó sẽ tạo 1 obj nếu chưa có còn có rồi thì nó sẽ update
  async update(id: number, updateData: QueryDeepPartialEntity<T>): Promise<T | null> {
    await this.repository.update(id, updateData);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected && result.affected > 0;
  }

  async softDelete(id: number): Promise<DeleteResult> {
    return await this.repository.softDelete(id);
  }
}
