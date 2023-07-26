/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// This is a host config that's used for the `react-server` package on npm.
// It is only used by third-party renderers.
//
// Its API lets you pass the host config as an argument.
// However, inside the `react-server` we treat host config as a module.
// This file is a shim between two worlds.
//
// It works because the `react-server` bundle is wrapped in something like:
//
// module.exports = function ($$$config) {
//   /* renderer code */
// }
//
// So `$$$config` looks like a global variable, but it's
// really an argument to a top-level wrapping function.

import type {Request} from 'react-server/src/ReactFizzServer';
import type {TransitionStatus} from 'react-reconciler/src/ReactFiberConfig';

declare var $$$config: any;
export opaque type Destination = mixed; // eslint-disable-line no-undef
export opaque type ResponseState = mixed;
export opaque type Resources = mixed;
export opaque type BoundaryResources = mixed;
export opaque type FormatContext = mixed;
export opaque type SuspenseBoundaryID = mixed;
export type {TransitionStatus};

export const isPrimaryRenderer = false;

export const supportsRequestStorage = false;
export const requestStorage: AsyncLocalStorage<Request> = (null: any);

export const getChildFormatContext = $$$config.getChildFormatContext;
export const UNINITIALIZED_SUSPENSE_BOUNDARY_ID =
  $$$config.UNINITIALIZED_SUSPENSE_BOUNDARY_ID;
export const assignSuspenseBoundaryID = $$$config.assignSuspenseBoundaryID;
export const makeId = $$$config.makeId;
export const pushTextInstance = $$$config.pushTextInstance;
export const pushStartInstance = $$$config.pushStartInstance;
export const pushEndInstance = $$$config.pushEndInstance;
export const pushStartCompletedSuspenseBoundary =
  $$$config.pushStartCompletedSuspenseBoundary;
export const pushEndCompletedSuspenseBoundary =
  $$$config.pushEndCompletedSuspenseBoundary;
export const pushSegmentFinale = $$$config.pushSegmentFinale;
export const writeCompletedRoot = $$$config.writeCompletedRoot;
export const writePlaceholder = $$$config.writePlaceholder;
export const writeStartCompletedSuspenseBoundary =
  $$$config.writeStartCompletedSuspenseBoundary;
export const writeStartPendingSuspenseBoundary =
  $$$config.writeStartPendingSuspenseBoundary;
export const writeStartClientRenderedSuspenseBoundary =
  $$$config.writeStartClientRenderedSuspenseBoundary;
export const writeEndCompletedSuspenseBoundary =
  $$$config.writeEndCompletedSuspenseBoundary;
export const writeEndPendingSuspenseBoundary =
  $$$config.writeEndPendingSuspenseBoundary;
export const writeEndClientRenderedSuspenseBoundary =
  $$$config.writeEndClientRenderedSuspenseBoundary;
export const writeStartSegment = $$$config.writeStartSegment;
export const writeEndSegment = $$$config.writeEndSegment;
export const writeCompletedSegmentInstruction =
  $$$config.writeCompletedSegmentInstruction;
export const writeCompletedBoundaryInstruction =
  $$$config.writeCompletedBoundaryInstruction;
export const writeClientRenderBoundaryInstruction =
  $$$config.writeClientRenderBoundaryInstruction;
export const prepareHostDispatcher = $$$config.prepareHostDispatcher;
export const NotPendingTransition = $$$config.NotPendingTransition;

// -------------------------
//     Resources
// -------------------------
export const writePreamble = $$$config.writePreamble;
export const writeHoistables = $$$config.writeHoistables;
export const writePostamble = $$$config.writePostamble;
export const hoistResources = $$$config.hoistResources;
export const createResources = $$$config.createResources;
export const createBoundaryResources = $$$config.createBoundaryResources;
export const setCurrentlyRenderingBoundaryResourcesTarget =
  $$$config.setCurrentlyRenderingBoundaryResourcesTarget;
export const writeResourcesForBoundary = $$$config.writeResourcesForBoundary;
