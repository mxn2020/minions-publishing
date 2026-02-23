/**
 * @module @minions-publishing/sdk/schemas
 * Custom MinionType schemas for Minions Publishing.
 */

import type { MinionType } from 'minions-sdk';

export const publishtargetType: MinionType = {
  id: 'publishing-publish-target',
  name: 'Publish target',
  slug: 'publish-target',
  description: 'A platform or CMS where articles are published.',
  icon: '🎯',
  schema: [
    { name: 'blogId', type: 'string', label: 'blogId' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'apiEndpoint', type: 'string', label: 'apiEndpoint' },
    { name: 'authMethod', type: 'select', label: 'authMethod' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastPublishedAt', type: 'string', label: 'lastPublishedAt' },
  ],
};

export const publishqueueentryType: MinionType = {
  id: 'publishing-publish-queue-entry',
  name: 'Publish queue entry',
  slug: 'publish-queue-entry',
  description: 'An article queued for publishing.',
  icon: '📬',
  schema: [
    { name: 'articleId', type: 'string', label: 'articleId' },
    { name: 'publishTargetId', type: 'string', label: 'publishTargetId' },
    { name: 'scheduledAt', type: 'string', label: 'scheduledAt' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'priority', type: 'select', label: 'priority' },
    { name: 'approvalRequestId', type: 'string', label: 'approvalRequestId' },
  ],
};

export const publishreceiptType: MinionType = {
  id: 'publishing-publish-receipt',
  name: 'Publish receipt',
  slug: 'publish-receipt',
  description: 'Confirmation that an article was published.',
  icon: '✅',
  schema: [
    { name: 'articleId', type: 'string', label: 'articleId' },
    { name: 'publishTargetId', type: 'string', label: 'publishTargetId' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
    { name: 'publishedUrl', type: 'string', label: 'publishedUrl' },
    { name: 'platformPostId', type: 'string', label: 'platformPostId' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const crosspostType: MinionType = {
  id: 'publishing-cross-post',
  name: 'Cross post',
  slug: 'cross-post',
  description: 'A record of an article cross-posted to another platform.',
  icon: '🔗',
  schema: [
    { name: 'articleId', type: 'string', label: 'articleId' },
    { name: 'originalReceiptId', type: 'string', label: 'originalReceiptId' },
    { name: 'targetPlatform', type: 'select', label: 'targetPlatform' },
    { name: 'publishedUrl', type: 'string', label: 'publishedUrl' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const customTypes: MinionType[] = [
  publishtargetType,
  publishqueueentryType,
  publishreceiptType,
  crosspostType,
];

