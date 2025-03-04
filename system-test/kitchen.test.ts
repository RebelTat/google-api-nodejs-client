/* eslint-disable no-undef */

// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as cp from 'child_process';
import * as path from 'path';
import * as mv from 'mv';
import {ncp} from 'ncp';
import {promisify} from 'util';
import * as tmp from 'tmp';

//TODO: uncomment this line and remove the eslint disable once
// https://github.com/mochajs/mocha/issues/4598 is resolved
//import {describe, it, afterEach} from 'mocha';

const mvp = promisify(mv);
const ncpp = promisify(ncp);
const keep = !!process.env.GANC_KEEP_TEMPDIRS;
const stagingDir = tmp.dirSync({keep, unsafeCleanup: true});
const stagingPath = stagingDir.name;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json');
const spawnOpts: cp.SpawnSyncOptions = {stdio: 'inherit', shell: true};

/**
 * Create a staging directory with temp fixtures used to test on a fresh application.
 */
describe('kitchen sink', async () => {
  it('should be able to use the d.ts', async () => {
    console.log(`${__filename} staging area: ${stagingPath}`);
    cp.spawnSync('npm', ['pack'], spawnOpts);
    const tarball = path.join(
      __dirname,
      `../../${pkg.name}-${pkg.version}.tgz`
    );
    await mvp(tarball, `${stagingPath}/googleapis.tgz`);
    await ncpp('test/fixtures/kitchen', `${stagingPath}/`);
    cp.spawnSync(
      'npm',
      ['install'],
      Object.assign({cwd: `${stagingPath}/`}, spawnOpts)
    );
  }).timeout(160000);

  /**
   * CLEAN UP - remove the staging directory when done.
   */
  afterEach('cleanup staging', async () => {
    if (!keep) {
      stagingDir.removeCallback();
    }
  });
});
