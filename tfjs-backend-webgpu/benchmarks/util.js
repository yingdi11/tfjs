/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const swatches = {
  'webgpu_min': '#F1523E',
  'webgpu_mean': '#F1523E',
  'webgl_min': '#3f51b5',
  'webgl_mean': '#3f51b5'
};

const strokes = {
  'webgpu_min': '2',
  'webgpu_mean': '0',
  'webgl_min': '2',
  'webgl_mean': '0'
};

function getSwatchBackground(swatch, stroke) {
  let background = swatch;
  if (stroke > 0) {
    background = `repeating-linear-gradient(
      to right,
      ${swatch},
      ${swatch} 2px,
      white 2px,
      white 4px
    );`;
  }
  return background;
}

let graphOffsetLeft = 0;

function resize() {
  graphOffsetLeft =
      document.querySelector('.graph-container').offsetLeft;
};

window.addEventListener('resize', resize);
