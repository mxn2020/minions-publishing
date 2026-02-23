---
title: Quick Start
description: Get up and running with Minions Publishing in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-publishing/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_publishing import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
publishing info
```
