"""
Minions Publishing Python SDK

Platform credentials, publish queue, and post receipts
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Publishing.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
