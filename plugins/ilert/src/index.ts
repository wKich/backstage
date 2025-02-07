/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { IconComponent } from '@backstage/core';
import ILertIconComponent from './assets/ilert.icon.svg';

export {
  ilertPlugin,
  ilertPlugin as plugin,
  ILertPage,
  EntityILertCard,
} from './plugin';
export {
  ILertPage as Router,
  isPluginApplicableToEntity,
  isPluginApplicableToEntity as isILertAvailable,
  ILertCard,
} from './components';
export * from './api';
export * from './route-refs';
export const ILertIcon: IconComponent = ILertIconComponent;
