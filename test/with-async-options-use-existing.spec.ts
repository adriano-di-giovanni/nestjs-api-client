import { bootstrap } from './bootstrap';
import { WithAsyncOptionsUseExisting } from './with-async-options-use-existing.module';

describe('useExisting', bootstrap({ imports: [WithAsyncOptionsUseExisting] }));
