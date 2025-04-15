import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/abstract.repository';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectRepository(User) // Dùng để định nghĩa T để biết entity là gì ?
    // Tại sao ta đã viết class UserRepository extends BaseRepository<User>,
    // thì rõ ràng T đã là User rồi, sao NestJS lại không hiểu để tự inject Repository<User> cho BaseRepository luôn?
    // mà sao vẫn phải định nghĩa thêm @InjectRepository(User)
    // TypeScript hiểu T = User, nhưng NestJS thì không, vì NestJS không chạy trên type system của TypeScript
    // — nó chạy trên JavaScript runtime

    // Cụ thể là:
    // class UserRepository extends BaseRepository<User> TypeScript biết T = User và bạn có thể dùng các hàm với kiểu User.
    // Tuy nhiên NestJS dùng Dependency Injection dựa trên decorators và metadata.
    // Nhưng TypeScript generic bị loại bỏ khi biên dịch sang JavaScript,
    // nên khi chạy, BaseRepository<T> không còn biết T là gì nữa.
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
