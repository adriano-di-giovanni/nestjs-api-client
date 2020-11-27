import { bootstrap } from './bootstrap';
import { WithAsyncOptionsUseClass } from './with-async-options-use-class.module';

describe('useClass', bootstrap({ imports: [WithAsyncOptionsUseClass] }));
