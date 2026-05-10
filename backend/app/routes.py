from fastapi import APIRouter
from sqlalchemy import func

from app.db import SessionLocal
from app.models import Listing

router = APIRouter()


@router.get("/")
def home():

    return {

        "message": "Business Dashboard API Running"

    }


@router.get("/city-wise")
def city_wise():

    db = SessionLocal()

    try:

        data = db.query(

            Listing.city,

            func.count(Listing.id)

        ).group_by(Listing.city).all()

        result = []

        for city, count in data:

            result.append({

                "city": city,

                "count": count

            })

        return result

    finally:

        db.close()


@router.get("/category-wise")
def category_wise():

    db = SessionLocal()

    try:

        data = db.query(

            Listing.category,

            func.count(Listing.id)

        ).group_by(Listing.category).all()

        result = []

        for category, count in data:

            result.append({

                "category": category,

                "count": count

            })

        return result

    finally:

        db.close()


@router.get("/source-wise")
def source_wise():

    db = SessionLocal()

    try:

        data = db.query(

            Listing.source,

            func.count(Listing.id)

        ).group_by(Listing.source).all()

        result = []

        for source, count in data:

            result.append({

                "source": source,

                "count": count

            })

        return result

    finally:

        db.close()


@router.get("/all-businesses")
def all_businesses():

    db = SessionLocal()

    try:

        data = db.query(Listing).all()

        result = []

        for item in data:

            result.append({

                "id": item.id,

                "business_name": item.business_name,

                "category": item.category,

                "city": item.city,

                "address": item.address,

                "phone": item.phone,

                "source": item.source,

                "created_at": item.created_at

            })

        return result

    finally:

        db.close()