from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    TIMESTAMP
)

from sqlalchemy.orm import declarative_base

from sqlalchemy.sql import func

Base = declarative_base()


class Listing(Base):

    __tablename__ = "listing_master"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    business_name = Column(
        String(255),
        nullable=False
    )

    category = Column(
        String(255),
        nullable=False
    )

    city = Column(
        String(255),
        nullable=False
    )

    address = Column(Text)

    phone = Column(String(50))

    source = Column(
        String(100),
        nullable=False
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )