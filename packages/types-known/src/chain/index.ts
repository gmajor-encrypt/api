// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

import Westend from './westend';

// Type overrides based on specific nodes
const typesChain: Record<string, OverrideVersionedType[]> = {
  Westend
};

export default typesChain;
