import { bootstrap } from './bootstrap';
import { WithAsyncOptionsUseFactory } from './with-async-options-use-factory.module';

describe('useExisting', bootstrap({ imports: [WithAsyncOptionsUseFactory] }));
