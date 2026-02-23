"""
Minions Publishing SDK — Type Schemas
Custom MinionType schemas for Minions Publishing.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

publish_target_type = MinionType(
    id="publishing-publish-target",
    name="Publish target",
    slug="publish-target",
    description="A platform or CMS where articles are published.",
    icon="🎯",
    schema=[
        FieldDefinition(name="blogId", type="string", label="blogId"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="apiEndpoint", type="string", label="apiEndpoint"),
        FieldDefinition(name="authMethod", type="select", label="authMethod"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastPublishedAt", type="string", label="lastPublishedAt"),
    ],
)

publish_queue_entry_type = MinionType(
    id="publishing-publish-queue-entry",
    name="Publish queue entry",
    slug="publish-queue-entry",
    description="An article queued for publishing.",
    icon="📬",
    schema=[
        FieldDefinition(name="articleId", type="string", label="articleId"),
        FieldDefinition(name="publishTargetId", type="string", label="publishTargetId"),
        FieldDefinition(name="scheduledAt", type="string", label="scheduledAt"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="priority", type="select", label="priority"),
        FieldDefinition(name="approvalRequestId", type="string", label="approvalRequestId"),
    ],
)

publish_receipt_type = MinionType(
    id="publishing-publish-receipt",
    name="Publish receipt",
    slug="publish-receipt",
    description="Confirmation that an article was published.",
    icon="✅",
    schema=[
        FieldDefinition(name="articleId", type="string", label="articleId"),
        FieldDefinition(name="publishTargetId", type="string", label="publishTargetId"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
        FieldDefinition(name="publishedUrl", type="string", label="publishedUrl"),
        FieldDefinition(name="platformPostId", type="string", label="platformPostId"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

cross_post_type = MinionType(
    id="publishing-cross-post",
    name="Cross post",
    slug="cross-post",
    description="A record of an article cross-posted to another platform.",
    icon="🔗",
    schema=[
        FieldDefinition(name="articleId", type="string", label="articleId"),
        FieldDefinition(name="originalReceiptId", type="string", label="originalReceiptId"),
        FieldDefinition(name="targetPlatform", type="select", label="targetPlatform"),
        FieldDefinition(name="publishedUrl", type="string", label="publishedUrl"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

custom_types: list[MinionType] = [
    publish_target_type,
    publish_queue_entry_type,
    publish_receipt_type,
    cross_post_type,
]

